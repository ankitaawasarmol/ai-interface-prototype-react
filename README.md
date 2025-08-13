# AI Interface Prototype (React + TypeScript + Tailwind)

A polished **frontend-only** AI UI that combines the best ideas from leading platforms. Built with React, TypeScript (strict), Tailwind, Zustand, Framer Motion, and Storybook.

> Deployed to Netlify — see instructions below.

---

## 1) Research

**Reviewed UIs**

- **OpenAI Playground** — clean prompt area, model/parameter controls, JSON output, and saved presets.
- **Hugging Face Spaces** — diverse app gallery, simple widgets (sliders, text areas), shareable demos.
- **Anthropic Claude** — conversational chat focus, thoughtful safety messaging, and fast copy/share.
- **Microsoft Copilot** — task-oriented prompts, prompt suggestions, and cohesive theming across surfaces.
- **Perplexity** — answer+citations pattern, compact layout, and strong keyboard usability.

**Chosen core features to combine (6):**

1. **Model Selector** (Playground) — choose a model quickly with short context hints.
2. **Prompt Templates** (Playground + Copilot) — save/load common tasks; quick affordances.
3. **Parameters Panel** (Playground + Spaces) — temperature, max tokens, top‑p with sliders.
4. **Chat Transcript** (Claude) — clear bubbles with copy/download actions.
5. **Theme Toggle** (Copilot) — light/dark, persisted in localStorage.
6. **Responsive, Keyboard‑First UX** (Perplexity) — focus states, ARIA labels, and shortcuts-friendly controls.

## 2) Design

**Mockup (Figma/XD):** _Replace with your link_

**Tailwind token mapping**

- **Spacing:** `px-4 py-3`, components use `p-4`, grid gaps `gap-6`. Larger containers `max-w-6xl`.
- **Typography:** System default; weights via `font-medium`, `font-semibold`. Code areas use `font-mono`.
- **Colors:** Brand indigo scale (`brand.600` primary, `brand.700` hover), neutrals via `zinc` palette.
- **Radius & Shadow:** `rounded-2xl` for all cards/buttons; `shadow-soft` for elevation.
- **Dark mode:** `dark:` variants; `darkMode: 'class'` toggled via store.

**Design → Code mapping**

- **Header bar:** sticky, translucent, border — `backdrop-blur`, `border-zinc-200` / `dark:border-zinc-800`.
- **Two‑pane layout:** sidebar (model+params) and main (prompt+chat) using `md:grid-cols-3`.
- **Cards:** `rounded-2xl p-4 border ... bg-white dark:bg-zinc-900`.
- **Interactive states:** focus ring `focus:ring-brand-500`; hover scale via Framer Motion.

## 3) Development

**Key features implemented**

- **Model Selector:** `/src/components/ModelSelector.tsx`
- **Prompt Editor with Templates (save/load/delete):** `/src/components/PromptEditor.tsx`
- **Parameters Panel (temperature, max tokens, top‑p):** `/src/components/ParametersPanel.tsx`
- **Chat/Output with copy/download JSON:** `/src/components/ChatArea.tsx`
- **Theme Toggle (persisted):** Zustand store in `/src/store/theme.ts`
- **Responsive Layout:** `md:` breakpoints; mobile-first.
- **Accessibility:** ARIA labels, keyboard navigable, visible focus rings.
- **Animations:** Framer Motion on buttons, sections, and modal.
- **Mock API:** `/src/mock/respond.ts` simulates LLM responses.

**Storybook**

Stories for **Button**, **Slider**, **Modal**, **ChatBubble** in `src/components/*.stories.tsx`. Run:

```bash
npm run storybook
```

**Getting started**

```bash
npm i
npm run dev
```

**Build & Preview**

```bash
npm run build
npm run preview
```

**Deploy**

- **Vercel/Netlify/GitHub Pages:** Build command `npm run build`; output dir `dist`.

**Known limitations**

- No real model calls; responses are mocked.
- Templates/params persisted to localStorage only.
- No server or auth; single-session UI.

---

### Project Structure

```
src/
  components/        UI components + stories
  mock/              mock API
  store/             Zustand stores (theme, session)
  App.tsx            main layout
  main.tsx           React entry
.storybook/          Storybook config
```

---

### License

MIT
