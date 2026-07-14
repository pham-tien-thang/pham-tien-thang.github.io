import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mixHtml = readFileSync(join(root, 'mixmatch.html'), 'utf8');
const tarotHtml = readFileSync(join(root, 'tarot.html'), 'utf8');

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

function assertLegalLinks(html, links) {
  assert.match(html, /data-i18n=["']footerLegal["']>Pháp lý</);

  for (const { href, key } of links) {
    const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const linkPattern = new RegExp(
      `<a\\b(?=[^>]*href=["']${escapedHref}["'])(?=[^>]*target=["']_blank["'])(?=[^>]*rel=["']noopener noreferrer["'])[^>]*data-i18n=["']${key}["'][^>]*>`,
    );
    assert.match(html, linkPattern);
  }

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
