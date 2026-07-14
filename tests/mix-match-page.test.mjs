import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = join(root, 'mixmatch.html');

function readRequired(path, label) {
  assert.ok(existsSync(path), `${label} must exist at ${path}`);
  return readFileSync(path, 'utf8');
}

function createElement(dataset = {}) {
  return {
    dataset,
    textContent: '',
    innerHTML: '',
    attributes: new Map(),
    setAttribute(name, value) {
      this.attributes.set(name, String(value));
    },
    getAttribute(name) {
      return this.attributes.get(name) ?? null;
    },
  };
}

function createLanguageHarness(html) {
  const script = html.match(/<script>([\s\S]*)<\/script>/)?.[1];
  assert.ok(script, 'inline language script must exist');

  const start = script.indexOf('const translations =');
  const end = script.indexOf(
    '\n\n        document.querySelectorAll("[data-lang]")',
  );
  assert.ok(start >= 0 && end > start, 'language controller must be extractable');

  const textElement = createElement({ i18n: 'navHome' });
  const htmlElement = createElement({ i18nHtml: 'heroTitle' });
  const altElement = createElement({ i18nAlt: 'closetImageAlt' });
  const ariaElement = createElement({ i18nAria: 'navAria' });
  const viButton = createElement({ lang: 'vi' });
  const enButton = createElement({ lang: 'en' });
  const description = createElement();
  const storedValues = new Map();

  const selectorMap = new Map([
    ['[data-i18n]', [textElement]],
    ['[data-i18n-html]', [htmlElement]],
    ['[data-i18n-alt]', [altElement]],
    ['[data-i18n-aria]', [ariaElement]],
    ['[data-lang]', [viButton, enButton]],
  ]);

  const context = {
    document: {
      documentElement: { lang: '' },
      title: '',
      querySelector(selector) {
        return selector === 'meta[name="description"]' ? description : null;
      },
      querySelectorAll(selector) {
        return selectorMap.get(selector) ?? [];
      },
    },
    localStorage: {
      setItem(key, value) {
        storedValues.set(key, value);
      },
    },
  };

  runInNewContext(
    `${script.slice(start, end)}\n` +
      'globalThis.testSetLanguage = setLanguage;' +
      'globalThis.testTranslations = translations;',
    context,
  );

  return {
    ...context,
    elements: {
      textElement,
      htmlElement,
      altElement,
      ariaElement,
      viButton,
      enButton,
      description,
    },
    storedValues,
    setLanguage: context.testSetLanguage,
    translations: context.testTranslations,
  };
}

test('existing Mix & Match navigation points to the dedicated page', () => {
  const indexHtml = readRequired(join(root, 'index.html'), 'index.html');
  const tarotHtml = readRequired(join(root, 'tarot.html'), 'tarot.html');
  assert.match(
    indexHtml,
    /href=["']mixmatch\.html["'][^>]*>Mix &amp; Match|href=["']mixmatch\.html["'][^>]*>Mix & Match/,
  );
  assert.match(
    tarotHtml,
    /href=["']mixmatch\.html["'][^>]*>Mix &amp; Match|href=["']mixmatch\.html["'][^>]*>Mix & Match/,
  );
});

test('Mix & Match page has semantic product sections', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  assert.match(html, /<main\b/);
  assert.match(html, /id=["']features["']/);
  assert.match(html, /id=["']how-it-works["']/);
  assert.match(html, /id=["']download["']/);
  assert.match(html, /scroll-margin-top:\s*128px/);
  assert.match(html, /html\s*\{[^}]*overflow-x:\s*clip;/s);
  assert.match(html, /body\s*\{[^}]*overflow-x:\s*clip;/s);
  assert.match(html, /\.download-art img\s*\{[^}]*position:\s*relative;/s);
  assert.match(html, /outline:\s*3px solid var\(--primary-dark\)/);
  assert.match(html, /class=["']global-language["'][^>]*role=["']group["']/);
  assert.match(
    html,
    /class=["'][^"']*value-rail reveal["'][^>]*role=["']list["']/,
  );
  assert.match(html, /width=["']1037["'] height=["']218["']/);
});

test('hero and launch actions use the refined product presentation', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  assert.match(html, /Outfit đậm chất riêng\./);
  assert.doesNotMatch(html, /Outfit đúng chất bạn\./);
  assert.doesNotMatch(html, /stylist-card|stylistCard|AI đang phối đồ/);
  assert.equal(
    html.match(/class=["']button button-store["'] type=["']button["'] disabled/g)
      ?.length,
    2,
  );
  assert.match(html, /appStoreButton:\s*["']Coming soon on App Store["']/);
});

test('three-step section follows the soft Mix & Match theme', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  assert.match(
    html,
    /\.how-it-works\s*\{[^}]*background:\s*linear-gradient\([^;]*var\(--primary-soft\)/s,
  );
  assert.match(
    html,
    /\.step-card\s*\{[^}]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.82\)/s,
  );
  assert.match(html, /\.step-card h3\s*\{[^}]*color:\s*var\(--text-strong\)/s);
  assert.match(html, /\.step-card p\s*\{[^}]*color:\s*var\(--text-muted\)/s);
});

test('Mix & Match page exposes a complete bilingual language controller', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  assert.match(html, /data-lang=["']vi["']/);
  assert.match(html, /data-lang=["']en["']/);
  assert.match(html, /const translations\s*=/);
  assert.match(html, /function setLanguage\(language\)/);
  assert.match(html, /document\.documentElement\.lang\s*=/);
  assert.match(html, /localStorage\.setItem\(/);
  assert.match(html, /aria-pressed/);
});

test('language controller updates content, metadata, accessibility, and storage', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  const harness = createLanguageHarness(html);
  const localizedKeys = new Set(
    [...html.matchAll(/data-i18n(?:-html|-alt|-aria)?=["']([^"']+)["']/g)].map(
      (match) => match[1],
    ),
  );

  assert.deepEqual(
    Object.keys(harness.translations.vi).sort(),
    Object.keys(harness.translations.en).sort(),
  );
  for (const key of localizedKeys) {
    assert.ok(key in harness.translations.vi, `Vietnamese translation missing ${key}`);
    assert.ok(key in harness.translations.en, `English translation missing ${key}`);
  }

  harness.setLanguage('en');
  assert.equal(harness.document.documentElement.lang, 'en');
  assert.equal(harness.document.title, 'Mix & Match | Your AI Fashion Stylist');
  assert.equal(harness.elements.textElement.textContent, 'Home');
  assert.match(harness.elements.htmlElement.innerHTML, /<em>/);
  assert.match(harness.elements.altElement.getAttribute('alt'), /Photographing/);
  assert.equal(
    harness.elements.ariaElement.getAttribute('aria-label'),
    'Primary navigation',
  );
  assert.equal(harness.elements.enButton.getAttribute('aria-pressed'), 'true');
  assert.equal(harness.elements.viButton.getAttribute('aria-pressed'), 'false');
  assert.match(
    harness.elements.description.getAttribute('content'),
    /digital closet/,
  );
  assert.equal(harness.storedValues.get('site-language'), 'en');

  harness.setLanguage('invalid');
  assert.equal(harness.document.documentElement.lang, 'vi');
  assert.equal(harness.elements.textElement.textContent, 'Trang chủ');

  harness.localStorage.setItem = () => {
    throw new Error('storage unavailable');
  };
  assert.doesNotThrow(() => harness.setLanguage('vi'));
});

test('Mix & Match page uses the requested brand, contact, and Google Play details', () => {
  const html = readRequired(pagePath, 'Mix & Match page');
  const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=com.Aurevon.mix_match';

  assert.match(html, /Mèo cưng/);
  assert.doesNotMatch(html, /Mèo Cưng\s+Labs/i);
  assert.match(html, /\.footer-brand img\s*\{[^}]*height:\s*auto;/s);
  assert.match(html, /mailto:meocungptt@gmail\.com/);
  assert.match(
    html,
    /https:\/\/www\.facebook\.com\/profile\.php\?id=61591603363567/,
  );
  assert.match(html, />Facebook · Mix & Match<\/a>/);
  assert.doesNotMatch(html, />Facebook · Mèo cưng<\/a>/);
  assert.equal(html.split(googlePlayUrl).length - 1, 2);
  assert.doesNotMatch(
    html,
    /mailto:meocungptt@gmail\.com\?subject=Mix%20%26%20Match%20launch/,
  );
  assert.match(html, /downloadButton:\s*"Tải trên Google Play"/);
  assert.match(html, /downloadButton:\s*"Get it on Google Play"/);
  assert.doesNotMatch(
    html,
    /Sắp ra mắt · Nhận thông báo|Coming soon · Get notified|Mix & Match sắp ra mắt|Mix & Match is coming soon|Nhận tin ra mắt|Launch updates/,
  );
});

test('all selected Mix & Match app assets are available locally', () => {
  const assetDirectory = join(root, 'assets', 'mix-match');
  const assets = [
    'onboarding1b.webp',
    'onboarding2.webp',
    'onboarding3.webp',
    'onboarding4.webp',
    'signinlogo2.webp',
    'branch.webp',
  ];

  for (const asset of assets) {
    assert.ok(existsSync(join(assetDirectory, asset)), `${asset} must exist`);
  }
});
