# Job Filters Implementation TODO

## Status: [x] 6/10 Complete

1. [x] Add Flutter theme CSS vars to src/app/globals.css
2. [x] Create src/app/jobs-list/components/filterData.js (Flutter categories/options)
3. [x] Enhance src/app/jobs-list/components/data.js mockJobs with new fields (experience, salaryRange, workMode, etc.)
4. [x] Create src/app/jobs-list/components/FilterButton.js
5. [x] Create src/app/jobs-list/components/JobFilterSheet.js (bottom modal)
6. [x] Update src/app/jobs-list/page.js: Add filter count state, FilterButton trigger
7. [ ] Update src/app/jobs-list/components/JobFiltersSidebar.js: Apply Flutter theme/data (sharp checkboxes, counts, sidebar styling)
8. [ ] Update src/app/jobs-list/components/JobList.js: Full multi-category filtering logic
9. [ ] Add FilterButton to HeroSearch or page header as trigger
10. [ ] Test filtering, responsive modal, theme consistency

## Notes
- Keep existing sidebar, enhance with Flutter theme
- Sheet triggered by FilterButton (badge with total count)
- Filters sync between sidebar/sheet via parent state
- Match exact Flutter colors/sharp 2px borders
