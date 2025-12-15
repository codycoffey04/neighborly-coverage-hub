# Guide: Filter Bot Traffic in Google Analytics 4

## Current Situation
You're seeing a lot of bot traffic from China (331 users) and Singapore (202 users), with only 104 real users from the United States. Most of this traffic shows as "(direct) / (none)" which is a classic bot signature.

---

## Step 1: Skip Data Filters - Use Explorations Instead

**Note:** If "Bot filtering" isn't available in your GA4 setup, that's okay! GA4 may already filter bots automatically, or we'll use Explorations to see only real traffic.

**Action:** Close the "Create data filter" dialog (click X) and go to Step 2 below.

---

## Step 2: Understanding GA4 Data Filters

**Important:** GA4 Data Filters only support:
- ✅ Bot filtering (Step 1)
- ✅ Internal traffic filtering
- ✅ Developer traffic filtering

**GA4 does NOT support custom country filters in Data Filters.**

To filter by country, you need to use **Explorations** (see Step 3 below). This is actually better because it doesn't permanently delete data - it just creates a filtered view.

---

## Step 2: Create a Filtered Exploration View (To See US Traffic Only)

This creates a separate view that only shows US traffic, without affecting your main data:

1. In the left sidebar, click **"Explore"** (under "Reports")
2. Click **"Blank"** or **"Free form"**
3. Name it: **"Real Traffic - US Only"**
4. In the **Variables** section (left panel):
   - Under **Dimensions**, click **"+"** → Search for **"Country"** → Add it
   - Under **Metrics**, add: **"Active users"**, **"Sessions"**, **"Engaged sessions"**
5. In the **Tab settings** section:
   - Drag **"Country"** to **Rows**
   - Drag **"Active users"** to **Values**
   - Click **"Add filter"** (funnel icon)
   - Filter: **Country** = **"United States"**
   - Click **"Apply"**
6. Click **"Save"** (top right)

**Now you have a view that only shows US traffic!**

---

## Step 3: Create Another Exploration for Real Traffic Sources

To see your actual traffic sources (excluding bots):

1. Go to **Explore** → **"Blank"**
2. Name it: **"Real Traffic Sources"**
3. Add dimensions: **"Session source"**, **"Session medium"**
4. Add metrics: **"Active users"**, **"Sessions"**
5. Add filters:
   - **Country** = **"United States"**
   - **Session source** ≠ **"(direct)"** (optional - to exclude direct bot traffic)
6. Save it

**This shows you:**
- Google organic search (real users)
- Facebook referrals (real users)
- Bing organic (real users)
- Other legitimate sources

---

## Step 4: Verify It's Working

After enabling filters, wait 24-48 hours, then check:

1. Go to **Reports** → **Reports snapshot**
2. Look at **"Active users by Country"**
3. You should see mostly **United States** traffic
4. China and Singapore should be significantly reduced or gone

---

## Quick Reference: What Each Filter Does

| Filter | What It Does | When to Use |
|--------|-------------|-------------|
| **Bot Filtering** | Excludes known bots/spiders | Always enable - filters Google's known bot list |
| **US Traffic Only** | Shows only United States traffic | Use to see your real customers |
| **Exploration Views** | Custom filtered reports | Use for analysis without affecting main data |

---

## Important Notes

⚠️ **Data Filters vs Explorations:**
- **Data Filters** (Step 1): Permanently exclude data from ALL reports (only bot filtering available)
- **Explorations** (Step 2-3): Create filtered views without changing main data - this is what you want!

💡 **Recommendation:** 
- ✅ Enable **Bot Filtering** (Step 1) - this is safe and recommended, filters out known bots
- ✅ Use **Explorations** (Step 2-3) to analyze real traffic - this doesn't delete data, just creates filtered views
- ✅ Check your Explorations regularly to see real US traffic

---

## Expected Results

After filtering, you should see:
- **Active users:** ~100-150 (mostly US)
- **Top country:** United States
- **Top sources:** Google organic, Facebook, Bing
- **Bot traffic:** Significantly reduced or eliminated

---

## Need Help?

If you get stuck:
1. Screenshot the page you're on
2. Note which step you're on
3. I can help troubleshoot!

