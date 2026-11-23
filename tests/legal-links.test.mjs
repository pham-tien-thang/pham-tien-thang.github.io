import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mixHtml = readFileSync(join(root, 'mixmatch.html'), 'utf8');
const tarotHtml = readFileSync(join(root, 'tarot.html'), 'utf8');
const ageOfDynastiesHtml = readFileSync(join(root, 'age-of-dynasties.html'), 'utf8');
const gamePagesScript = readFileSync(join(root, 'assets', 'game-pages.js'), 'utf8');

const mixLegalLinks = [
  {
    href: 'https://pham-tien-thang.github.io/policy/mix_match/policy_mix_match.html',
    key: 'footerPrivacy',
  },
  {
    href: 'https://pham-tien-thang.github.io/policy/mix_match/terms_mix_match.html',
    key: 'footerTerms',
  },
  {
    href: 'https://pham-tien-thang.github.io/policy/mix_match/delete_data.html',
    key: 'footerDeleteAccount',
  },
];

const tarotLegalLinks = [
  {
    href: 'https://pham-tien-thang.github.io/policy/tarot_app/policy_tarot',
    key: 'footerPrivacy',
  },
  {
    href: 'https://pham-tien-thang.github.io/policy/tarot_app/delete_data',
    key: 'footerDeleteAccount',
  },
];

function assertLinkDestinations(html, links) {
  for (const { href, key } of links) {
    const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const linkPattern = new RegExp(
      `<a\\b(?=[^>]*href=["']${escapedHref}["'])(?=[^>]*target=["']_blank["'])(?=[^>]*rel=["']noopener noreferrer["'])[^>]*data-i18n=["']${key}["'][^>]*>`,
    );
    assert.match(html, linkPattern);
  }
}

function assertLegalLinks(html, links) {
  assert.match(html, /data-i18n=["']footerLegal["']>Pháp lý</);
  assertLinkDestinations(html, links);

  assert.equal(html.match(/footerLegal:\s*["'][^"']+["']/g)?.length, 2);
  assert.equal(html.match(/footerPrivacy:\s*["'][^"']+["']/g)?.length, 2);
  assert.equal(
    html.match(/footerDeleteAccount:\s*["'][^"']+["']/g)?.length,
    2,
  );
}

test('Mix & Match footer exposes bilingual legal destinations', () => {
  assertLegalLinks(mixHtml, mixLegalLinks);
  assert.equal(mixHtml.match(/footerTerms:\s*["'][^"']+["']/g)?.length, 2);
});

test('Tarot footer exposes its bilingual legal destinations', () => {
  assertLegalLinks(tarotHtml, tarotLegalLinks);
  assert.doesNotMatch(
    tarotHtml,
    /https:\/\/pham-tien-thang\.github\.io\/policy\/tarot_app\/terms/,
  );
});

test('Age of Dynasties footer exposes its bilingual privacy policy', () => {
  const footer = ageOfDynastiesHtml.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/)?.[0];
  assert.ok(footer);
  assertLinkDestinations(footer, [{
    href: 'https://pham-tien-thang.github.io/policy/age_of_dynasties/policy_age_of_dynasties.html',
    key: 'footerPrivacy',
  }]);
  assert.match(footer, /data-i18n="footerPrivacy">Chính sách quyền riêng tư</);
  assert.match(gamePagesScript, /"footerPrivacy": "Chính sách quyền riêng tư"/);
  assert.match(gamePagesScript, /"footerPrivacy": "Privacy Policy"/);
});
