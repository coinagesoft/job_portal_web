# Job Portal Font System Documentation

## Overview
**Primary Font:** `Plus Jakarta Sans`, sans-serif  
**Current Unique Sizes:** 24+ (recommend **consolidation to 8**)  
**Weights:** 400, 500, 600, 700, 800  
**Line Heights:** 1.5 (default), size-specific (22px-71px)

## Font Size Scale (Recommended)
| Token | Size | Use Case |
|-------|------|----------|
| xs | 10px | Fine print, hints |
| sm | 12px | Tags, buttons |
| base | 14px | Body default |
| md | 16px | Paragraphs |
| lg | 20px | Subheadings |
| xl | 24px | h4+ |
| h1 | 36px | Main headings |
| display | 48px+ | Heroes |

## Current Usage Audit

### 1. Headings (style.css)
```
h1: 56px (71px lh)
h2: 36px (45px lh) 
h3: 28px (35px lh)
h4: 24px (30px lh)
h5: 20px (26px lh)
h6: 16px (26px lh)
```

### 2. Body & Paragraphs
```
body: 14px (24px lh) - globals.css
p: color #4F5E64 (style.css)
font-md: 16px (24px lh)
font-lg: 18px (26px lh)
```

### 3. Utility Classes (style.css)
```
font-xxs: 10px
font-xs: 12px  
font-sm: 14px
font-md: 16px
font-lg: 18px
```

### 4. Inline Styles (register/page.js - most fragmented)
```
10px: labels, hints (12 places)
11px: hints, small text (8 places)
12px: labels, buttons (15+ places)
13px: buttons, text (10+)
14px: buttons (5+)
15px: buttons
16px: headings
18px,24px,26px: larger elements
```

### 5. Buttons & UI Elements
```
12px: tags, small btn
13px-15px: primary btn
font-weight: 500-700
```

### 6. Vendor Fonts (Overridden)
```
Bootstrap: 1rem body (16px), responsive headings
uicons-*: Icon fonts only
```

## Files to Review for Consolidation
```
✅ src/app/globals.css (primary)
✅ public/assets/css/style.css (main)
✅ public/assets2/css/style.css (secondary) 
✅ src/app/register/page.js (inline abuse)
✅ src/components/*.module.css (scoped)
```

## Action Items
1. **Audit & Replace** inline `fontSize:` → CSS classes
2. **Limit to 8 sizes** using scale above
3. **CSS Variables** in globals.css:
```
:root {
  --font-xs: 10px;
  --font-sm: 12px;
  --font-base: 14px;
  /* etc */
}
```
4. **Run search** for remaining inline styles post-changes

**Generated:** " + new Date().toISOString().split('T')[0]
