# PageSpeed Performance Fixes - Round 2 (78 → 90+)

## ✅ Code Changes Completed

### 1. Preconnect Hints ✅
**File:** `index.html`

- ✅ Added preconnect for `fonts.googleapis.com` (already existed)
- ✅ Added preconnect for `fonts.gstatic.com` (already existed)
- ✅ Added preconnect for `www.googletagmanager.com` (NEW)
- ✅ Added preconnect for `scripts.clarity.ms` (NEW)
- ✅ Added dns-prefetch for all external domains

**Impact:** Reduces DNS/TCP connection time for external resources

---

### 2. Google Fonts Non-Blocking ✅
**File:** `index.html`

- ✅ Changed from blocking `<link rel="stylesheet">` to non-blocking preload pattern
- ✅ Uses `onload` handler to convert preload to stylesheet after load
- ✅ Includes noscript fallback for users without JavaScript
- ✅ `display=swap` already in URL (prevents FOIT)

**Impact:** Saves ~750ms of render-blocking time

**Before:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?..." />
```

**After:**
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?..." as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?..." /></noscript>
```

---

### 3. Hero Image Preload Hints ✅
**File:** `src/components/homepage/Hero.tsx`

- ✅ Added Helmet component to inject preload hints dynamically
- ✅ Preloads mobile hero image for screens ≤768px
- ✅ Preloads desktop hero image for screens >768px
- ✅ Uses `fetchPriority="high"` for LCP optimization
- ✅ Vite resolves imported image paths to correct hashed filenames

**Impact:** Browser discovers LCP image earlier, improves LCP by ~500ms-1s

**Note:** Preload hints are added via React Helmet, so they're in the DOM early but not in initial HTML. For maximum benefit, consider using a Vite plugin to inject them into the built HTML.

---

### 4. Google Tag Manager Optimization ✅
**File:** `index.html`

- ✅ Already deferred until after `window.load` + 2s delay
- ✅ Improved to check `document.readyState` for faster loading if page already loaded
- ✅ Maintains async loading to prevent blocking

**Impact:** Reduces main thread blocking by ~267ms, saves ~102 KB of unused JS

---

### 5. CSS Non-Blocking (Vite Handled) ℹ️
**File:** N/A (Vite handles this automatically)

- ℹ️ Vite already optimizes CSS loading
- ℹ️ CSS is injected as `<link>` tags (not inline)
- ℹ️ For further optimization, consider:
  - Inlining critical CSS (above-the-fold)
  - Using `rel="preload"` pattern for non-critical CSS

**Note:** The 220ms blocking time is relatively small. Further optimization would require:
1. Extracting critical CSS
2. Inlining it in `<head>`
3. Deferring non-critical CSS

This is a more advanced optimization that may not be necessary if other fixes achieve 90+ score.

---

## 📋 Remaining Manual Tasks

### Image Recompression (Optional but Recommended)

**1. Hero Background Mobile WebP**
- Current: 90 KB
- Target: ~30-40 KB (quality 70-75)
- Command:
  ```bash
  cwebp -q 75 -m 6 hero-background-mobile.webp -o hero-background-mobile.webp
  ```

**2. Logo WebP**
- Current: 21 KB
- Target: ~10-15 KB (quality 70-75, resize to 628x196 for 2x retina)
- Commands:
  ```bash
  # Resize first (if needed)
  magick coffey-logo-transparent-2.webp -resize 628x196 coffey-logo-resized.webp
  # Then compress
  cwebp -q 75 -m 6 coffey-logo-resized.webp -o coffey-logo-transparent-2.webp
  ```

**Expected Savings:** ~73 KB total

---

## 📊 Expected Performance Improvements

### Before (Current):
- **Performance Score:** 78
- **Render Blocking:** 1,450ms (fonts: 750ms + CSS: 220ms)
- **Unused JavaScript:** 156 KB (GTM: 102 KB + bundle: 54 KB)
- **Image Delivery:** 73 KB could be saved

### After (Expected):
- **Performance Score:** 90+
- **Render Blocking:** ~220ms (fonts non-blocking, CSS minimal)
- **Unused JavaScript:** ~54 KB (GTM deferred, bundle optimized)
- **Image Delivery:** Optimized (if recompressed)

### Breakdown:
1. **Fonts non-blocking:** ~750ms improvement
2. **Preconnect hints:** ~100-200ms improvement
3. **Hero preload:** ~500ms-1s LCP improvement
4. **GTM deferral:** ~267ms + 102 KB saved
5. **Image recompression:** ~73 KB saved (if done)

**Total expected improvement:** ~1.5-2 seconds faster load time

---

## 🔍 Verification Checklist

After deploying:

- [ ] Fonts load without blocking render (check Network tab - should see preload then stylesheet)
- [ ] Hero images preload early (check Network tab - should see preload requests)
- [ ] GTM loads after page is interactive (check Network tab - should load ~2s after page load)
- [ ] Preconnect hints are present in HTML head
- [ ] PageSpeed score is 90+
- [ ] LCP is under 2.5s
- [ ] FCP is under 1.8s
- [ ] No console errors
- [ ] Visual quality matches original

---

## 🛠️ Advanced Optimizations (If Score Still < 90)

If performance score is still below 90 after these fixes:

1. **Critical CSS Inlining**
   - Extract above-the-fold CSS
   - Inline in `<head>`
   - Defer rest of CSS

2. **Code Splitting**
   - Ensure Vite is code-splitting properly
   - Lazy load non-critical components

3. **Resource Hints**
   - Add `rel="dns-prefetch"` for more external domains
   - Consider `rel="prefetch"` for likely next-page resources

4. **Image Format Optimization**
   - Consider AVIF format (better compression than WebP)
   - Use responsive images with srcset

5. **Service Worker**
   - Implement caching strategy
   - Cache static assets

---

## 📝 Notes

- All code changes are backward compatible
- Fonts will still load for users without JavaScript (noscript fallback)
- GTM delay ensures analytics don't impact user experience
- Hero preload hints help browser discover LCP image early
- Vite handles CSS/JS optimization automatically

---

**Next Steps:**
1. Deploy changes
2. Run PageSpeed Insights: https://pagespeed.web.dev/analysis?url=https://coffeyagencies.com
3. Verify score is 90+
4. Optionally recompress images for additional savings

