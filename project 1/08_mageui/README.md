# Mage UI - Splash Cursor Effect

Simple splash cursor effect implementation tanpa library eksternal.

## 📖 Referensi
- https://www.mageui.live
- https://www.mageui.live/docs/cursor-effects/splash-cursor

## 🚀 Cara Pakai

### Cara 1: Simple (Recommended)
1. Buka `index.html` di browser
2. Gerakkan cursor dan klik untuk melihat splash effect
3. Customize di bagian script:

```javascript
const splashCursor = new SplashCursor({
    size: 40,        // ukuran partikel
    color: '#fff'    // warna effect
});
```

### Cara 2: NPM Package
```bash
npm install @mageui/splash-cursor
npm install
```

Terus gunakan di HTML dengan bundler (webpack/vite)
