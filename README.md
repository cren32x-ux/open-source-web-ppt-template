# Open Source Web PPT Template

A minimal React + Vite template for building browser-based 16:9 strategy decks.

It is designed for proposal-style presentations where each screen should behave like a PPT slide, not a long scrolling webpage.

## Features

- Fixed 16:9 presentation stage
- One slide per screen
- Keyboard navigation with arrow keys, PageUp/PageDown, Home, and End
- Clean consulting-style blue-white visual system
- Simple slide data structure in `src/App.jsx`
- Static build with Vite

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Edit Slides

Open `src/App.jsx` and edit the `slides` array.

Each slide can use:

- `type: "hero"` for the cover slide
- `cards` for three-column insight/proof slides
- `steps` for process slides

## Keyboard Shortcuts

- Next slide: `ArrowDown`, `ArrowRight`, `PageDown`, or `Space`
- Previous slide: `ArrowUp`, `ArrowLeft`, or `PageUp`
- First slide: `Home`
- Last slide: `End`

## Build

```bash
npm run build
```

The static output will be generated in `dist/`.

## License

MIT
