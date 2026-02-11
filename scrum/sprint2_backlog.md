# Sprint 2 Backlog

## Sprint 2: Enhanced Usability & Reliability

**Sprint Duration:** Week 2 (7 days)  
**Sprint Goal:** Improve system usability, reliability, and user experience through validation, persistence, and enhanced features  
**Scrum Master:** Jaff  
**Product Owner:** Chang

---

## Selected User Stories

### US4: Input Validation (3 points)
**Priority:** High  
**Status:** ✅ Completed

### US5: Confirmation Messages (2 points)
**Priority:** Medium  
**Status:** ✅ Completed

### US6: Delete Booking (3 points)
**Priority:** Medium  
**Status:** ✅ Completed

**Total Story Points Committed:** 8

---

## Sprint 2 Tasks Breakdown

### 1. Implement Form Validation
**Story:** US4  
**Assigned to:** Fonglam  
**Estimated Hours:** 4h  
**Status:** ✅ Done

**Tasks:**
- [x] Add validation check for empty name field
- [x] Add validation for restaurant selection
- [x] Add validation for time selection
- [x] Prevent form submission if validation fails
- [x] Display alert message for validation errors
- [x] Test all validation scenarios
- [x] Handle edge cases (whitespace, special characters)

**Implementation Details:**
```javascript
// Validation logic added
if (!name || !stall || !time) {
    alert("Please fill in all fields before submitting.");
    return;
}
```

**Testing Scenarios:**
- ✅ Empty name field
- ✅ No restaurant selected
- ✅ No time selected
- ✅ All fields empty
- ✅ Whitespace-only input

**Completion Date:** Day 2

---

### 2. Data Persistence with LocalStorage
**Story:** US4 (Enhancement)  
**Assigned to:** Fonglam  
**Estimated Hours:** 6h  
**Status:** ✅ Done

**Tasks:**
- [x] Research localStorage API
- [x] Create save function for appointments
- [x] Create load function on page init
- [x] Update localStorage on new booking
- [x] Update localStorage on deletion
- [x] Handle JSON serialization/deserialization
- [x] Test data persistence across page reloads
- [x] Handle localStorage errors gracefully

**Implementation Details:**
- Key used: `appointments`
- Storage format: JSON array of objects
- Automatic save on every booking/deletion
- Automatic load on page load

**Testing Scenarios:**
- ✅ Create booking → Refresh → Data persists
- ✅ Multiple bookings → Refresh → All persist
- ✅ Delete booking → Refresh → Change persists
- ✅ Clear browser data → Fresh start
- ✅ Incognito mode → Works independently

**Completion Date:** Day 3-4

---

### 3. Delete Appointment Functionality
**Story:** US6  
**Assigned to:** Fonglam, Wenxin  
**Estimated Hours:** 5h  
**Status:** ✅ Done

**Tasks:**
- [x] Add delete button to each appointment item
- [x] Style delete button (icon + hover effect)
- [x] Implement delete event listener
- [x] Remove item from DOM
- [x] Remove item from localStorage
- [x] Add confirmation before delete (optional)
- [x] Test delete functionality
- [x] Ensure proper indexing after deletions

**Implementation Details:**
- Delete button added to each list item
- Uses Font Awesome trash icon
- Updates both DOM and localStorage
- No confirmation dialog (instant delete for better UX)

**Testing Scenarios:**
- ✅ Delete first booking
- ✅ Delete last booking
- ✅ Delete middle booking
- ✅ Delete all bookings
- ✅ Delete then refresh (verify persistence)

**Completion Date:** Day 4-5

---

### 4. Enhanced User Feedback
**Story:** US5  
**Assigned to:** Fonglam  
**Estimated Hours:** 3h  
**Status:** ✅ Done

**Tasks:**
- [x] Improve validation error messages
- [x] Add visual feedback on form submission
- [x] Ensure form resets after successful booking
- [x] Add animation to new booking entries
- [x] Improve error message clarity
- [x] Test user feedback flow

**Improvements Made:**
- Clear alert messages for validation errors
- Form automatically clears after booking
- Smooth fade-in animation for new bookings
- Consistent messaging throughout

**Completion Date:** Day 5

---

### 5. UI/UX Improvements
**Story:** General Enhancement  
**Assigned to:** Wenxin  
**Estimated Hours:** 6h  
**Status:** ✅ Done

**Tasks:**
- [x] Implement premium gold theme
- [x] Integrate Font Awesome icons throughout
- [x] Improve form field styling
- [x] Enhance button design and interactions
- [x] Add hover effects and transitions
- [x] Refine typography (Playfair Display + Lato)
- [x] Improve spacing and layout
- [x] Add icon to delete buttons
- [x] Ensure accessibility (contrast, labels)

**Visual Enhancements:**
- Gold accent color (#c5a059)
- Dark theme (#1a1a1a)
- Professional serif headings
- Icons for all form fields
- Smooth transitions on all interactive elements
- Improved visual hierarchy

**Completion Date:** Day 5-6

---

### 6. Code Refactoring
**Story:** Technical Debt  
**Assigned to:** Fonglam  
**Estimated Hours:** 3h  
**Status:** ✅ Done

**Tasks:**
- [x] Separate localStorage functions
- [x] Improve code organization
- [x] Add code comments
- [x] Remove duplicate code
- [x] Optimize DOM manipulation
- [x] Ensure consistent naming conventions

**Refactoring Done:**
- Created `saveAppointments()` function
- Created `loadAppointments()` function
- Created `addAppointmentToDOM()` function
- Improved variable naming
- Added explanatory comments

**Completion Date:** Day 6

---

### 7. Cross-Browser Testing
**Story:** Quality Assurance  
**Assigned to:** Chang, All Team  
**Estimated Hours:** 4h  
**Status:** ✅ Done

**Tasks:**
- [x] Test on Chrome
- [x] Test on Firefox
- [x] Test on Safari
- [x] Test on Edge
- [x] Test on mobile browsers (Chrome Mobile, Safari iOS)
- [x] Test localStorage across browsers
- [x] Fix browser-specific issues
- [x] Verify responsive design

**Browsers Tested:**
- ✅ Chrome 120+ (Windows, Mac, Android)
- ✅ Firefox 121+
- ✅ Safari 17+ (Mac, iOS)
- ✅ Edge 120+
- ✅ Chrome Mobile (Android)

**Issues Found & Fixed:**
- Safari localStorage permission - FIXED
- Mobile form layout - FIXED
- Time picker styling differences - NOTED (browser default)

**Completion Date:** Day 6-7

---

### 8. Documentation Updates
**Story:** N/A  
**Assigned to:** Jaff, Chang  
**Estimated Hours:** 4h  
**Status:** ✅ Done

**Tasks:**
- [x] Update README with new features
- [x] Document localStorage usage
- [x] Create Sprint 2 backlog
- [x] Prepare Sprint 2 review
- [x] Write Sprint 2 retrospective
- [x] Update product backlog
- [x] Document testing procedures

**Completion Date:** Day 7

---

## Sprint 2 Burndown

| Day | Remaining Hours | Notes |
|-----|----------------|-------|
| Day 1 | 35h | Sprint planning complete |
| Day 2 | 31h | Validation implemented |
| Day 3 | 25h | LocalStorage in progress |
| Day 4 | 19h | Delete function added |
| Day 5 | 13h | UI improvements ongoing |
| Day 6 | 7h | Code refactoring, testing |
| Day 7 | 0h | ✅ Sprint completed |

---

## Daily Standup Notes (Summary)

### Day 2
**Fonglam:** Finished validation, works perfectly  
**Wenxin:** Researching gold theme inspiration  
**Jaff:** Updated project board  
**Chang:** Testing validation, found edge case (whitespace)

**Blocker:** None

---

### Day 4
**Fonglam:** LocalStorage working, starting delete function  
**Wenxin:** Font Awesome integrated, looks professional  
**Jaff:** No blockers, team ahead of schedule  
**Chang:** Impressed with persistence feature

**Blocker:** None

---

### Day 6
**Fonglam:** Code refactored, delete tested thoroughly  
**Wenxin:** Final UI touches, animations smooth  
**Jaff:** Documentation 80% complete  
**Chang:** Cross-browser testing in progress

**Blocker:** Safari localStorage permissions (resolved)

---

## Sprint 2 Achievements

### Completed Features
✅ Form validation preventing empty submissions  
✅ LocalStorage persistence across sessions  
✅ Delete booking with icon button  
✅ Premium gold and dark theme  
✅ Font Awesome icons throughout  
✅ Improved error messages  
✅ Code refactored for maintainability  
✅ Cross-browser compatibility  

### Technical Deliverables
- `index.html` - Updated with icons
- `style.css` - 180+ lines (enhanced)
- `script.js` - 85+ lines (with localStorage)
- Total commits this sprint: 18+

### User Stories Completed
- US4: Input Validation ✅
- US5: Confirmation Messages ✅
- US6: Delete Booking ✅

**Velocity:** 8 story points completed out of 8 committed (100%)

---

## Blockers Encountered

### 1. Safari LocalStorage Permissions
**Date:** Day 6  
**Issue:** Safari blocks localStorage in private browsing  
**Impact:** 1h  
**Resolution:** Added error handling, documented limitation  
**Prevention:** Test cross-browser earlier in sprint

### 2. Delete Button Index Management
**Date:** Day 5  
**Issue:** Array index mismatch after deletions  
**Impact:** 2h  
**Resolution:** Used data attributes instead of index  
**Prevention:** Better upfront design of data structure

**Total Time Lost to Blockers:** 3h

---

## Sprint 2 Enhancements Beyond Scope

**Bonus Features Delivered:**
1. ✅ Premium UI redesign (not originally planned)
2. ✅ Font Awesome integration (enhancement)
3. ✅ Code refactoring (technical debt)
4. ✅ Comprehensive cross-browser testing

These additions were possible because:
- Team worked efficiently
- Clear task breakdown reduced confusion
- Minimal blockers encountered

---

## Sprint 2 Review Preparation

### Demo Checklist
- [x] Validation working
- [x] LocalStorage persistence demonstrated
- [x] Delete function tested
- [x] UI enhancements visible
- [x] Multiple browsers ready
- [x] Test scenarios prepared

### Demo Flow
1. Show improved UI
2. Demonstrate validation (try empty submission)
3. Create multiple bookings
4. Refresh page → Show persistence
5. Delete a booking
6. Refresh again → Verify deletion persisted
7. Show responsive design
8. Show cross-browser compatibility

---

## Definition of Done - Sprint 2

- [x] All committed user stories completed
- [x] Code committed to GitHub
- [x] LocalStorage tested thoroughly
- [x] Cross-browser testing passed
- [x] No critical bugs
- [x] Code refactored and commented
- [x] Documentation updated
- [x] Sprint review ready

**Sprint 2 Status:** ✅ SUCCESSFULLY COMPLETED

---

## Comparison: Sprint 1 vs Sprint 2

| Metric | Sprint 1 | Sprint 2 | Change |
|--------|----------|----------|--------|
| Story Points | 13 | 8 | -5 (adjusted) |
| Completion Rate | 100% | 100% | Stable |
| Lines of Code | 205 | 350+ | +145 |
| Commits | 15 | 18 | +3 |
| Features | 3 | 6 | +3 |
| Time to Blockers | 3.5h | 3h | -0.5h |

---

## Product Maturity Assessment

**After Sprint 2:**
- ✅ MVP functionality complete
- ✅ Data persistence implemented
- ✅ User input validated
- ✅ Professional UI/UX
- ✅ Cross-browser compatible
- ⚠️ Missing: Date selection
- ⚠️ Missing: Edit booking
- ⚠️ Missing: User authentication

**Production Readiness:** 70%  
**Client Satisfaction Expected:** High

---

**Next Steps:** 
- Sprint Review meeting
- Sprint Retrospective
- Final documentation
- Presentation preparation

---

*Sprint 2 Backlog documented by: Jaff (Scrum Master)*  
*Approved by: Chang (Product Owner)*  
*Date: Week 2*