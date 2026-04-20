# Design System Specification: The Kinetic Concierge

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Kinetic Concierge**. 

While many event apps feel like static digital brochures, this system is designed to feel like a living, breathing companion. It moves beyond the "standard grid" by utilizing **Dynamic Editorial Layering**. We reject the rigid, boxed-in layouts of legacy web apps in favor of an interface that breathes. By using intentional asymmetry, overlapping card elements, and a sophisticated hierarchy of "floating" surfaces, we create an experience that feels premium, energetic, and hyper-functional. 

The goal is to guide the user through a high-energy event environment with the calm authority of a professional concierge, using depth and motion to signal importance.

---

## 2. Colors & Surface Philosophy
The palette is rooted in high-clarity vibrance, balanced by a sophisticated neutral foundation.

### Core Palette
*   **Primary (Action Blue):** `#0058bc` (The engine of the app; used for navigation and primary intent).
*   **Secondary (Engagement Purple):** `#5b00df` (The spark; reserved for gamification, rewards, and social momentum).
*   **Tertiary (Safety Red):** `#b6171e` (The guardian; strictly for urgent alerts and emergency features).
*   **Neutral Foundation:** `surface` (#f8f9fa) and `on-surface` (#191c1d).

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through tonal transitions. Use `surface-container-low` to set a stage, and `surface-container-highest` or `surface-container-lowest` to define interactive zones. This creates a "soft" UI that feels more integrated and less cluttered.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials:
*   **Base Layer:** `surface` (#f8f9fa) – The global canvas.
*   **Content Areas:** `surface-container-low` (#f3f4f5) – Subtle recession for secondary information.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) – High-contrast "pop" for primary task modules.
*   **Glassmorphism:** For floating overlays (modals/drawers), use `surface` at 80% opacity with a `24px` backdrop-blur. This ensures the vibrant event energy bleeds through the interface without sacrificing legibility.

---

## 3. Typography
We use a dual-sans-serif approach to balance "High-End Editorial" with "Utilitarian Speed."

*   **Display & Headlines (Plus Jakarta Sans):** Chosen for its modern, geometric flair. 
    *   *Role:* Use `display-lg` to `headline-sm` for event titles and major section headers. Use tight letter-spacing (-0.02em) to create a "locked-in" professional look.
*   **Interface & Body (Inter):** Chosen for its unparalleled legibility at small sizes.
    *   *Role:* Use `title-md` for navigation labels and `body-md` for all descriptive content.

**Intentional Asymmetry:** Don't feel forced to center-align headlines. Left-aligning a `display-md` headline while offsetting the body text creates a sophisticated, magazine-style layout that feels custom-built for the event.

---

## 4. Elevation & Depth
Depth is a functional tool, not a decoration.

*   **The Layering Principle:** Instead of shadows, use color. A `primary-container` button sitting on a `surface-container-low` background provides enough "visual lift" to be actionable without adding visual noise.
*   **Ambient Shadows:** If an element must float (e.g., a Bottom Sheet or a Floating Action Button), use a shadow tinted with the `on-surface` color:
    *   *Spec:* `0px 12px 32px rgba(25, 28, 29, 0.06)`. This mimics soft, natural gallery lighting.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` at **20% opacity**. Never use a 100% opaque border; it breaks the "concierge" softness.

---

## 5. Components

### Buttons & CTAs
*   **Primary Action:** Use a subtle gradient from `primary` (#0058bc) to `primary-container` (#0070eb). Use `lg` (1rem) rounded corners. This provides a "jewel-like" depth that flat buttons lack.
*   **Engagement (Secondary):** Use `secondary` (#5b00df). These should feel like "rewards"—use them for "Join Challenge" or "Claim Badge" actions.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines between list items. Use 16px–24px of vertical whitespace or a subtle shift to `surface-container-high` on hover/active states.
*   **Event Timeline Cards:** Use `xl` (1.5rem) corner radius. Overlap elements (like a speaker's photo breaking the top edge of the card) to create a 3D effect.

### Input Fields
*   **State:** Background should be `surface-container-highest`. Upon focus, transition to `surface-container-lowest` with a `2px` "Ghost Border" in `primary`. This "light-up" effect guides the user's attention.

### Smart Companion Specials
*   **The "Urgency Toast":** For emergency features, use `tertiary-container` (#da3433) with a high-blur backdrop to ensure it commands the screen without feeling "broken."
*   **Gamification Chips:** Use `secondary-fixed` with `on-secondary-fixed-variant` text. These should always be `full` (9999px) rounded to feel like physical tokens or coins.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use "Breathing Room." If you think there's enough padding, add 8px more. Space is luxury.
*   **Do** use `primary-fixed-dim` for inactive states rather than mid-grey. Keep the color "alive" even when it's muted.
*   **Do** ensure all interactive targets are at least 44px tall for high-speed "on-the-move" event usage.

### Don't:
*   **Don't** use pure black (#000000). Use `on-surface` (#191c1d) to maintain the premium, soft-touch feel.
*   **Don't** use standard "drop shadows" with 20%+ opacity. They look "cheap" and dated.
*   **Don't** use dividers to separate content. Let the typography and background shifts do the work. If it feels messy, your spacing scale is too small.