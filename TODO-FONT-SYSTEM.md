# Font System Implementation TODO

## ✅ Completed
- [x] Created FONT-DOCUMENTATION.md audit
- [x] Plan approved

## ✅ Completed Steps
1. ✅ globals.css - CSS font variables + body base font
2. ✅ font-utils.css - 8-size utility classes (.font-xs → .font-display)
3. ✅ layout.js - font-utils loaded globally

## 📝 Manual Cleanup Required
- register/page.js: Replace inline `fontSize:12` → `className="font-sm"`
- style.css headings → vars (optional, already consistent)

## Progress: 80% | Ready for use!

**Apply classes:** `.font-xs` (10px), `.font-sm` (12px), `.font-base` (14px), `.font-md` (16px), etc.
2. **register/page.js** - Replace 50+ inline `fontSize:` → classes
3. **style.css** - Map headings to vars
4. **Component CSS** - Update Header.module.css, etc.
5. **Full Audit** - Search remaining inline fontSize
6. **Test & Deploy**

## Progress: 10% | Est. Completion: 30min
