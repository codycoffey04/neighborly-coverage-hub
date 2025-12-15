# Image Compression - Round 2 (Additional 87 KiB Savings)

## Current File Sizes
- `hero-background-mobile.webp`: **90 KB** (target: 40-50 KB)
- `coffey-logo-transparent-2.webp`: **33 KB** (target: 10-15 KB)

## Compression Instructions

### 1. Hero Background Mobile WebP

**Target:** 40-50 KB (currently 90 KB)

**Command:**
```bash
cd /Users/cody/Desktop/coffey/neighborly-coverage-hub/src/assets

# Compress with quality 70-75
cwebp -q 75 -m 6 hero-background-mobile.webp -o hero-background-mobile-compressed.webp

# Check size
ls -lh hero-background-mobile-compressed.webp

# If size is good (40-50 KB), replace original
mv hero-background-mobile-compressed.webp hero-background-mobile.webp
```

**Online Alternative:**
1. Go to https://squoosh.app/
2. Upload `hero-background-mobile.webp`
3. Select WebP format
4. Adjust quality slider to 70-75
5. Check file size - aim for 40-50 KB
6. Download and replace original file

---

### 2. Logo WebP

**Target:** 10-15 KB (currently 33 KB)

**Command:**
```bash
cd /Users/cody/Desktop/coffey/neighborly-coverage-hub/src/assets

# Compress with quality 70-75
cwebp -q 75 -m 6 coffey-logo-transparent-2.webp -o coffey-logo-compressed.webp

# Check size
ls -lh coffey-logo-compressed.webp

# If size is good (10-15 KB), replace original
mv coffey-logo-compressed.webp coffey-logo-transparent-2.webp
```

**Online Alternative:**
1. Go to https://squoosh.app/
2. Upload `coffey-logo-transparent-2.webp`
3. Select WebP format
4. Adjust quality slider to 70-75
5. Check file size - aim for 10-15 KB
6. Download and replace original file

---

## Verification

After compressing:

1. **Check file sizes:**
   ```bash
   ls -lh src/assets/hero-background-mobile.webp src/assets/coffey-logo-transparent-2.webp
   ```

2. **Expected sizes:**
   - `hero-background-mobile.webp`: 40-50 KB
   - `coffey-logo-transparent-2.webp`: 10-15 KB

3. **Test visually:**
   - Build: `npm run build`
   - Preview: `npm run preview`
   - Verify images still look good

4. **Commit and push:**
   ```bash
   git add src/assets/*.webp
   git commit -m "Further compress hero and logo images for PageSpeed"
   git push
   ```

---

## Expected Savings

- **Hero mobile:** 90 KB → 45 KB = **45 KB saved**
- **Logo:** 33 KB → 12 KB = **21 KB saved**
- **Total:** **~66 KB saved** (close to 87 KB target)

This should help improve PageSpeed performance score from 76 to 90+.

