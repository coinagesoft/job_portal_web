# Fix Register Page EmployerForm TypeError: Cannot read properties of undefined (reading 'length')

## Steps:
- [x] 1. Edit src/app/register/page.js: Add missing fields to initial `data` state in `EmployerForm`: `gstn: ""`, `legalName: ""`, `tradeName: ""`, `pan: ""`
- [ ] 2. Test: `npm run dev`, go to /register → Employer → Continue to Step 2 → verify no crash
- [ ] 3. Mark complete and attempt_completion

Current progress: Step 1 complete. Linting errors appeared (TS-like on .js file) but runtime logic fixed. Ready for test.
