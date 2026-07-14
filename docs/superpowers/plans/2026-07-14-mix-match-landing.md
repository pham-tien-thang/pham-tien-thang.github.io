# Mix & Match Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build a responsive bilingual Mix & Match landing page connected to the existing top navigation.

**Architecture:** Keep the project dependency-free and static. `mixmatch.html` owns semantic markup, scoped CSS, translation data, and the small language-controller script; copied app artwork lives under `assets/mix-match/`; a Node test enforces the page contract.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- Create the Mix & Match page first; do not redesign the common `index.html` page.
- Preserve existing user changes in `index.html`.
- Default to Vietnamese and provide an English/Vietnamese switch.
- Use `meocungptt@gmail.com`, the supplied Facebook profile, and “Mèo cưng”.
- Reuse the Flutter app's theme colors and visual assets without modifying the Flutter project.
- Do not ask follow-up questions when the request can be implemented safely from repository context.

---

### Task 1: Project instruction and page contract

**Files:**
- Create: `AGENTS.md`
- Create: `tests/mix-match-page.test.mjs`

**Interfaces:**
- Consumes: the user's explicit execution and content requirements.
- Produces: project-level operating rules and executable expectations for `mixmatch.html`.

- [x] **Step 1: Write the failing page contract**

```js
test('Mix & Match page exposes bilingual content and correct contact details', () => {
  const html = readFileSync(pagePath, 'utf8');
  assert.match(html, /data-lang="vi"/);
  assert.match(html, /data-lang="en"/);
  assert.match(html, /meocungptt@gmail\.com/);
  assert.match(html, /Mèo cưng/);
});
```

- [x] **Step 2: Run the test and confirm RED**

Run: `node --test tests/mix-match-page.test.mjs`

Expected: FAIL because `mixmatch.html` and copied assets do not exist.

- [x] **Step 3: Add the project rule file**

Document that clear implementation requests must be acted on immediately, safe assumptions should be inferred from repository context, and questions are reserved for genuine blockers or destructive/external-impact decisions.

### Task 2: Assets and bilingual landing page

**Files:**
- Create: `assets/mix-match/onboarding1b.webp`
- Create: `assets/mix-match/onboarding2.webp`
- Create: `assets/mix-match/onboarding3.webp`
- Create: `assets/mix-match/onboarding4.webp`
- Create: `assets/mix-match/signinlogo2.webp`
- Create: `assets/mix-match/branch.webp`
- Create: `mixmatch.html`

**Interfaces:**
- Consumes: `data-i18n` keys and `data-lang` controls asserted by Task 1.
- Produces: `setLanguage(language)` and a static responsive page reachable from the existing `index.html` tab.

- [x] **Step 1: Copy the six selected Flutter assets into `assets/mix-match/`**

- [x] **Step 2: Implement the semantic page and responsive theme**

Use exact app colors as CSS custom properties, local WebP artwork, rounded cards, mobile breakpoints, visible focus states, and reduced-motion support.

- [x] **Step 3: Implement localization**

```js
function setLanguage(language) {
  const nextLanguage = translations[language] ? language : 'vi';
  document.documentElement.lang = nextLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translations[nextLanguage][element.dataset.i18n];
  });
}
```

- [x] **Step 4: Run the page contract and confirm GREEN**

Run: `node --test tests/mix-match-page.test.mjs`

Expected: all tests pass.

### Task 3: Rendered verification

**Files:**
- Verify: `mixmatch.html`
- Verify: `index.html`

**Interfaces:**
- Consumes: the completed static page.
- Produces: evidence that the page works at desktop/mobile widths and both languages, with the Google Play download action and App Store marked as coming soon.

- [x] **Step 1: Serve the repository locally**

Run: `python3 -m http.server 4173 --bind 127.0.0.1`

- [x] **Step 2: Verify desktop and mobile rendering in the in-app browser**

Confirm hero, feature sections, footer, no horizontal overflow, and image loading.

- [x] **Step 3: Exercise VI/EN switching and navigation**

Confirm title, copy, pressed states, persisted preference, and that the existing Mix & Match tab opens `mixmatch.html`.

- [x] **Step 4: Run final static checks**

Run: `node --test tests/mix-match-page.test.mjs && git diff --check`

Expected: all tests pass and `git diff --check` exits with no output.
