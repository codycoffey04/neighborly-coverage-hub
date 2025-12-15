# Logo Resize Instructions for PageSpeed Performance

## Current Status
- **File**: `src/assets/coffey-logo-transparent-2.webp`
- **Current Size**: ~24 KB
- **Display Size**: 251x98px (as rendered in Header)
- **Target Size**: 502x196px (2x for retina) → 8-12 KB

## Why Resize?
The logo is currently 400x156px but displays at 251x98px. For retina displays, we need 2x the display size (502x196px). The current file is larger than needed, causing unnecessary bandwidth usage.

## Resize Instructions

### Option 1: Using Python/PIL (Recommended)
```python
from PIL import Image

# Open the logo
img = Image.open('src/assets/coffey-logo-transparent-2.webp')

# Resize to 502x196 (2x display size for retina)
img_resized = img.resize((502, 196), Image.LANCZOS)

# Save with optimized WebP settings
img_resized.save(
    'src/assets/coffey-logo-transparent-2.webp',
    'WEBP',
    quality=75,  # Slightly lower quality for smaller file size
    method=6,     # Best compression method
    lossless=False
)

print(f"Resized logo: {img_resized.size[0]}x{img_resized.size[1]}px")
```

### Option 2: Using Online Tool
1. Go to https://squoosh.app/ or https://tinypng.com/
2. Upload `coffey-logo-transparent-2.webp`
3. Resize to **502x196px**
4. Set quality to **70-75**
5. Download and replace the file

### Option 3: Using ImageMagick (if installed)
```bash
cd /Users/cody/Desktop/coffey/neighborly-coverage-hub
magick src/assets/coffey-logo-transparent-2.webp \
  -resize 502x196 \
  -quality 75 \
  -define webp:method=6 \
  src/assets/coffey-logo-transparent-2.webp
```

## Target Metrics
- **Dimensions**: 502x196px (exactly 2x display size)
- **File Size**: 8-12 KB (down from 24 KB)
- **Quality**: 70-75 (balance between file size and visual quality)
- **Format**: WebP (transparent background preserved)

## After Resizing
1. Replace the file: `src/assets/coffey-logo-transparent-2.webp`
2. Commit: `git add src/assets/coffey-logo-transparent-2.webp`
3. Commit: `git commit -m "Resize logo to 502x196px for PageSpeed (24KB→8-12KB)"`
4. Push: `git push`

## Expected PageSpeed Impact
- **Current**: Logo contributes ~24 KB to page weight
- **After**: Logo contributes ~8-12 KB to page weight
- **Savings**: ~12-16 KB reduction
- **Performance Score**: Should improve by 1-2 points

