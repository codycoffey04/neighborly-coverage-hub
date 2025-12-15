# Image Optimization Guide for PageSpeed Performance

This guide explains how to create the optimized WebP images needed for the performance improvements.

## Required Images

### 1. Hero Background Image (Priority 1 - LCP Element)

**Current:** `src/assets/hero-background.jpg` (850 KB)

**Required Outputs:**
- `src/assets/hero-background.webp` - Desktop version (~150-200 KB)
- `src/assets/hero-background-mobile.webp` - Mobile version (~80-120 KB)

**Steps:**

1. **Desktop Version** (`hero-background.webp`):
   ```bash
   # Using cwebp (install via: brew install webp on Mac)
   cwebp -q 80 -m 6 hero-background.jpg -o hero-background.webp
   
   # Or using ImageMagick
   magick hero-background.jpg -quality 80 -define webp:method=6 hero-background.webp
   
   # Target: ~150-200 KB, max width 1920px
   ```

2. **Mobile Version** (`hero-background-mobile.webp`):
   ```bash
   # Resize to max 768px width, then convert to WebP
   cwebp -q 75 -m 6 -resize 768 0 hero-background.jpg -o hero-background-mobile.webp
   
   # Or using ImageMagick
   magick hero-background.jpg -resize 768x -quality 75 -define webp:method=6 hero-background-mobile.webp
   
   # Target: ~80-120 KB, max width 768px
   ```

**Online Tools (if command line not available):**
- https://squoosh.app/ - Upload original, select WebP, adjust quality to hit target size
- https://convertio.co/jpg-webp/ - Simple converter

**Quality Guidelines:**
- Desktop: Quality 75-80, aim for 150-200 KB
- Mobile: Quality 70-75, aim for 80-120 KB
- Test visually - should look nearly identical to original

---

### 2. Logo Image (Priority 2)

**Current:** `src/assets/coffey-logo-transparent-2.png` (588 KB, 1920x763px)
**Display Size:** 247x98px (2.5x for retina = 500x156px)

**Required Output:**
- `src/assets/coffey-logo-transparent-2.webp` (~10-20 KB)

**Steps:**

1. **Resize first** (to 500x156px for 2x retina display):
   ```bash
   # Using ImageMagick
   magick coffey-logo-transparent-2.png -resize 500x156 coffey-logo-transparent-2-resized.png
   
   # Or using sips (Mac built-in)
   sips -z 156 500 coffey-logo-transparent-2.png --out coffey-logo-transparent-2-resized.png
   ```

2. **Convert to WebP**:
   ```bash
   cwebp -q 90 -m 6 coffey-logo-transparent-2-resized.png -o coffey-logo-transparent-2.webp
   
   # Target: ~10-20 KB
   ```

**Online Alternative:**
1. Go to https://squoosh.app/
2. Upload `coffey-logo-transparent-2.png`
3. Resize to 500x156px
4. Select WebP format
5. Adjust quality slider until size is ~10-20 KB
6. Download and save as `coffey-logo-transparent-2.webp` in `src/assets/`

---

## Verification

After creating the images:

1. **Check file sizes:**
   ```bash
   ls -lh src/assets/hero-background*.webp src/assets/coffey-logo-transparent-2.webp
   ```

2. **Expected sizes:**
   - `hero-background.webp`: 150-200 KB
   - `hero-background-mobile.webp`: 80-120 KB
   - `coffey-logo-transparent-2.webp`: 10-20 KB

3. **Test in browser:**
   - Build the project: `npm run build`
   - Check Network tab - images should load as WebP
   - Verify visual quality matches original

4. **Run PageSpeed Insights:**
   - https://pagespeed.web.dev/analysis?url=https://coffeyagencies.com
   - Target: Performance score 85+, LCP < 2.5s, FCP < 1.8s

---

## Quick Reference: Command Line Tools

**Install WebP tools (Mac):**
```bash
brew install webp
```

**Install ImageMagick (Mac):**
```bash
brew install imagemagick
```

**Install WebP tools (Windows):**
Download from: https://developers.google.com/speed/webp/download

**Install ImageMagick (Windows):**
Download from: https://imagemagick.org/script/download.php

---

## Notes

- The code changes are already in place - you just need to create the optimized images
- Vite will handle the WebP imports automatically
- Fallback to original JPG/PNG is included for older browsers
- Mobile version uses smaller image for faster LCP on mobile devices

