# Login Page UX Update - Unified Email/Mobile OTP

## Status: In Progress

### Step-by-step plan:

- [x] **Step 1**: Update `src/app/Login/page.js` - Unified email/mobile input w/ auto-detect, Send OTP → OTP field → single "Sign In" verifies+submits. **✅ COMPLETE**

- [ ] **Step 2**: Update `src/app/register/page.js` (similar UX) 
  - Apply same unified input + single submit for consistency

- [ ] **Step 3**: Test UX flow
  - Email test: Enter `test@example.com` → Send OTP → Enter OTP → Sign In
  - Mobile test: Enter `9876543210` → Send OTP → Enter OTP → Sign In
  - Demo OTPs shown via alert, state managed locally

**Next step: Step 1**

## UX Flow:
1. Single field: auto-detects email (letters) vs mobile (digits)
2. "Send OTP" 
3. OTP input appears below
4. "Sign In" verifies OTP + submits (one click)

