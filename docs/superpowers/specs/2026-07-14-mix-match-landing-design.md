# Mix & Match Landing Page Design

## Scope

Create only the dedicated Mix & Match page at `mixmatch.html`. The shared `index.html` redesign remains out of scope. Keep the existing navigation contract because the current Mix & Match tab links to `mixmatch.html`.

## Visual direction

Use the Flutter app as the source of truth: warm ivory `#FDF7F8`, plum `#7548A7`, pale lilac `#F9EDFF`, muted brown text, rounded cards, and the app's editorial onboarding artwork. Typography should feel softer than the current Cinzel styling, using a rounded Vietnamese-capable sans-serif for body copy and a gentle editorial serif for display text.

## Page structure

1. Sticky navigation with links back to Home and Bí ẩn Tarot, an active Mix & Match item, and a VI/EN switch.
2. Split hero introducing Mix & Match as an AI fashion stylist, with a Google Play download action, a disabled App Store preview button, and a feature-navigation call to action.
3. Compact product-value rail: digital closet, outfit studio, outfit planner, and AI try-on.
4. Three alternating feature stories using the app's existing onboarding artwork.
5. A soft lilac-and-ivory three-step workflow and a final Google Play download call to action.
6. Footer branded “Mèo cưng” with `meocungptt@gmail.com` and the supplied Facebook profile.

## Localization and interaction

Vietnamese is the initial language. Every visible content string and relevant accessibility label has Vietnamese and English variants. The switch updates `document.documentElement.lang`, the document title, visible content, `aria-pressed` state, and persists the preference in `localStorage`. If storage is unavailable, the page continues to work in the current session.

## Responsive and accessibility behavior

The desktop layout uses generous two-column editorial sections. Tablet and mobile collapse to one column without horizontal overflow. Navigation becomes compact but remains usable. Images use meaningful bilingual alternative text, controls have visible focus states, semantic landmarks are used, and motion is reduced when the visitor requests reduced motion.

## Assets

Copy only the required source assets from `/Users/phamtienthang/flutter_project/mix_match/assets/images`: `onboarding1b.webp`, `onboarding2.webp`, `onboarding3.webp`, `onboarding4.webp`, `signinlogo2.webp`, and `branch.webp`. Do not modify the Flutter project.

## Verification

Add a Node-based contract test for required page structure, localization behavior, contact details, Google Play URL, and local asset availability. Then verify the rendered page at desktop and mobile widths in the in-app browser, including both language states and the existing navigation entry point.
