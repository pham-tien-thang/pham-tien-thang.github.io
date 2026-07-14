# Home Landing Page and Shared Header Design

## Scope

Redesign `index.html` as the neutral Mèo cưng home hub and unify the header across `index.html`, `tarot.html`, and `yearly.html`. Product pages keep their own visual identity; the header component changes only in its brand/logo and active-tab state.

## Shared header

All three pages consume `assets/site-shell.css` and use the same header structure, spacing, pill tabbar, active state, VI/EN control, desktop height, and mobile two-row layout. The language choice persists under the shared `site-language` storage key so it follows the visitor across pages.

## Home direction

The Home page uses a warm neutral palette, soft editorial typography, generous spacing, and restrained sage/clay accents. Its purpose is to introduce Mèo cưng and route visitors to two product cards: Bí ẩn Tarot and Mix & Match. The page includes bilingual content, contact details, responsive single-column fallbacks, and no Tailwind runtime dependency.

## Tarot integration

The Tarot page keeps a dark reflective product identity while moving to the shared header and the same bilingual behavior. Its existing Google Play and contact destinations remain available.

## Verification

Static contract tests enforce the shared stylesheet, header structure, active tabs, distinct brand slots, language controls, neutral Home theme, and removal of the old Tailwind runtime. Browser checks cover desktop/mobile widths, cross-page language persistence, tab navigation, image loading, overflow, and console errors.
