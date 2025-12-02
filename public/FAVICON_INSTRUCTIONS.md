# Favicon Setup Instructions

## Step 1: Save Your Logo Image

Save your CA logo image to the `public` folder with these names:

1. **favicon.png** - Main favicon (32x32 or 64x64 pixels recommended)
2. **favicon-32x32.png** - 32x32 pixels
3. **favicon-16x16.png** - 16x16 pixels  
4. **apple-touch-icon.png** - 180x180 pixels (for iOS devices)
5. **favicon-192x192.png** - 192x192 pixels (for Android)
6. **favicon-512x512.png** - 512x512 pixels (for Android)

## Step 2: Image Requirements

- **Format:** PNG (transparent background works best)
- **Sizes needed:**
  - 16x16 (favicon-16x16.png)
  - 32x32 (favicon-32x32.png)
  - 180x180 (apple-touch-icon.png)
  - 192x192 (favicon-192x192.png)
  - 512x512 (favicon-512x512.png)

## Step 3: Quick Setup (If you only have one image)

If you only have one image file, you can:
1. Save it as `favicon.png` in the `public` folder
2. The browser will use it for all sizes (may not look perfect on all devices)

## Step 4: Online Favicon Generator (Recommended)

For best results, use an online tool to generate all sizes:
- https://realfavicongenerator.net/
- Upload your logo
- Download the generated files
- Place them in the `public` folder

## Current Setup

The HTML is already configured to use these files. Once you add the images to the `public` folder, the favicon will appear automatically.

