# Copilot Instructions for InstinctBits

## Project Overview
InstinctBits is a Vue 3 + Vite SPA showcasing gaming community brands (Pixel Strike Force) with social media integration. Deployed to Netlify with GitHub Pages hosting (`InstinctBits.github.io`).

## Architecture & Stack
- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Build Tool**: Vite 6 with HMR and Vue DevTools plugin
- **Routing**: Vue Router 4 with lazy-loaded routes (all routes except home use `() => import()`)
- **Deployment**: Netlify (builds from `dist/`, SPA redirects configured in `netlify.toml`)
- **Alias**: Use `@/` for `src/` imports (configured in `vite.config.js`)

## Project Structure
```
src/
  views/         # Page components (HomeView, PixelStrikeForceView, etc.)
  components/    # Reusable components (WelcomeItem, HelloWorld)
    icons/       # SVG icon components
  router/        # Vue Router configuration
  assets/        # Global styles (base.css, main.css)
```

## Key Conventions

### Component Patterns
- **Views**: Top-level page components in `src/views/` (kebab-case routes, PascalCase filenames)
- **Layout Components**: Use `WelcomeItem.vue` for content cards with icon slot + heading slot + default slot pattern
  ```vue
  <WelcomeItem>
    <template #icon><ToolingIcon /></template>
    <template #heading>Title Here</template>
    <p>Content here...</p>
  </WelcomeItem>
  ```
- **Icons**: Import from `components/icons/` directory (all use consistent SVG icon pattern)

### Routing
- Routes use kebab-case paths (`/pixel-strike-force`) with lazy loading except home
- Add new routes in `src/router/index.js` with dynamic imports for code-splitting
- Navigation links in `App.vue` header using `<RouterLink>`

### External Embeds
When embedding Discord widgets or iframes, use:
- `allowtransparency="true"`
- `frameborder="0"` 
- `sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"`
- Dark theme parameter when available (e.g., Discord: `&theme=dark`)

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

### Local Development
- Dev server runs on Vite's default port (usually 5173)
- Hot Module Replacement (HMR) enabled by default
- Vue DevTools plugin active in development mode

### Deployment
- **Auto-deploy**: Push to `main` branch triggers Netlify build
- **Build command**: `npm run build` (configured in `netlify.toml`)
- **SPA routing**: All routes redirect to `index.html` via Netlify redirects (already configured)

## Styling
- Global styles in `src/assets/main.css` and `base.css`
- CSS custom properties for theming (e.g., `var(--color-text)`, `var(--color-heading)`)
- Scoped styles in components using `<style scoped>`
- Responsive breakpoint: `@media (min-width: 1024px)` for desktop layouts

## Brand-Specific Pages
**Pixel Strike Force** (`/pixel-strike-force`): Gaming community with YouTube, Twitch, and social media links. Uses content-grid layout with WelcomeItem cards and CTA sections.
