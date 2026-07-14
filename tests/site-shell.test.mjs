import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = {
  home: readFileSync(join(root, 'index.html'), 'utf8'),
  tarot: readFileSync(join(root, 'tarot.html'), 'utf8'),
  mix: readFileSync(join(root, 'mixmatch.html'), 'utf8'),
};

test('all product pages share one responsive header shell', () => {
  const shellPath = join(root, 'assets', 'site-shell.css');
  assert.ok(existsSync(shellPath), 'shared site-shell.css must exist');
  const shellCss = readFileSync(shellPath, 'utf8');

  assert.match(shellCss, /\.global-header\s*\{/);
  assert.match(shellCss, /\.global-tabs\s*\{/);
  assert.match(shellCss, /\.global-language\s*\{/);
  assert.match(shellCss, /@media\s*\(max-width:\s*780px\)/);
  assert.doesNotMatch(
    shellCss,
    /\.global-header a\s*\{[^}]*color:/s,
    'page-level text colors must not leak into shared header links',
  );

  for (const [name, html] of Object.entries(pages)) {
    assert.match(html, /href=["']assets\/site-shell\.css["']/);
    assert.match(html, /class=["']global-header["']/);
    assert.match(html, /class=["']global-shell global-nav["']/);
    assert.match(html, /class=["']global-tabs["']/);
    assert.match(html, /class=["']global-language["'][^>]*role=["']group["']/);
    assert.match(html, /href=["']index\.html["']/);
    assert.match(html, /href=["']tarot\.html["']/);
    assert.match(html, /href=["']mixmatch\.html["']/);
    assert.match(html, /data-lang=["']vi["']/);
    assert.match(html, /data-lang=["']en["']/);
    assert.match(html, new RegExp(`data-brand=["']${name}["']`));
  }
});

test('each shared header marks only its own tab active', () => {
  const activeHrefs = {
    home: 'index.html',
    tarot: 'tarot.html',
    mix: 'mixmatch.html',
  };

  for (const [name, html] of Object.entries(pages)) {
    const activeTabs = [...html.matchAll(/<a\b[^>]*class=["'][^"']*global-tab[^"']*["'][^>]*aria-current=["']page["'][^>]*href=["']([^"']+)["']/g)];
    assert.equal(activeTabs.length, 1, `${name} must expose one active tab`);
    assert.equal(activeTabs[0][1], activeHrefs[name]);
  }
});

test('home page is a neutral bilingual hub for both products', () => {
  const html = pages.home;
  assert.match(html, /<html lang=["']vi["']/);
  assert.match(html, /--home-bg:\s*#f7f5f2/);
  assert.match(html, /class=["']product-grid["']/);
  assert.match(html, /class=["'][^"']*product-card[^"']*tarot-product/);
  assert.match(html, /class=["'][^"']*product-card[^"']*mix-product/);
  assert.match(html, /data-i18n=["']heroTitle["']/);
  assert.match(html, /const translations\s*=/);
  assert.match(html, /function setLanguage\(language\)/);
  assert.match(html, /Mèo cưng/);
  assert.match(html, /meocungptt@gmail\.com/);
  assert.doesNotMatch(html, /cdn\.tailwindcss\.com|bg-black|Cinzel/);
});

test('tarot page keeps its product identity inside the shared shell', () => {
  const html = pages.tarot;
  assert.match(html, /data-i18n=["']heroTitle["']/);
  assert.match(html, /const translations\s*=/);
  assert.match(html, /function setLanguage\(language\)/);
  assert.doesNotMatch(html, /cdn\.tailwindcss\.com/);
});
