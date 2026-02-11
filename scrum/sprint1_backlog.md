# Sprint 1 Backlog

## Sprint 1: Basic Restaurant Booking System

**Sprint Duration:** Week 1 (7 days)  
**Sprint Goal:** Develop a basic working restaurant appointment booking system with core functionality  
**Scrum Master:** Jaff  
**Product Owner:** Chang

---

## Selected User Stories

### US1: Online Restaurant Booking (5 points)
**Priority:** High  
**Status:** ✅ Completed

### US2: Restaurant and Time Selection (5 points)
**Priority:** High  
**Status:** ✅ Completed

### US3: View Current Appointments (3 points)
**Priority:** Medium  
**Status:** ✅ Completed

**Total Story Points Committed:** 13

---

## Sprint Tasks Breakdown

### 1. Project Setup
**Story:** Foundation  
**Assigned to:** Jaff  
**Estimated Hours:** 2h  
**Status:** ✅ Done

**Tasks:**
- [x] Create GitHub repository
- [x] Initialize project structure
- [x] Set up file organization (HTML, CSS, JS)
- [x] Create initial README
- [x] Invite team members to repository

**Completion Date:** Day 1

---

### 2. Design Booking Form UI
**Story:** US1, US2  
**Assigned to:** Wenxin  
**Estimated Hours:** 6h  
**Status:** ✅ Done

**Tasks:**
- [x] Create HTML structure for booking form
- [x] Add input field for guest name
- [x] Create dropdown for restaurant selection
- [x] Add time picker input
- [x] Design submit button
- [x] Add basic CSS styling
- [x] Ensure form is responsive

**Completion Date:** Day 2-3

---

### 3. Implement Restaurant Options
**Story:** US2  
**Assigned to:** Fonglam  
**Estimated Hours:** 2h  
**Status:** ✅ Done

**Tasks:**
- [x] Define restaurant list (4 options)
- [x] Populate dropdown with options
- [x] Set default placeholder text
- [x] Ensure dropdown validation

**Restaurant Options Added:**
1. The Italian Bistro
2. Dragon Seafood
3. Steakhouse Grill
4. Green Garden

**Completion Date:** Day 2

---

### 4. Form Submission Logic
**Story:** US1  
**Assigned to:** Fonglam  
**Estimated Hours:** 4h  
**Status:** ✅ Done

**Tasks:**
- [x] Add event listener for form submission
- [x] Prevent default form behavior
- [x] Capture form data (name, restaurant, time)
- [x] Create booking object from form data
- [x] Clear form after submission
- [x] Test submission workflow

**Completion Date:** Day 3-4

---

### 5. Display Appointment List
**Story:** US3  
**Assigned to:** Fonglam, Wenxin  
**Estimated Hours:** 5h  
**Status:** ✅ Done

**Tasks:**
- [x] Create appointment list container in HTML
- [x] Write function to create list items dynamically
- [x] Format appointment display (name, restaurant, time)
- [x] Append new bookings to list
- [x] Style appointment list items
- [x] Add animation for new entries

**Completion Date:** Day 4-5

---

### 6. Basic Styling and UX
**Story:** All  
**Assigned to:** Wenxin  
**Estimated Hours:** 6h  
**Status:** ✅ Done

**Tasks:**
- [x] Define color scheme
- [x] Choose typography (Google Fonts)
- [x] Style form inputs
- [x] Style buttons with hover effects
- [x] Create container layout
- [x] Add spacing and padding
- [x] Ensure visual hierarchy

**Completion Date:** Day 5-6

---

### 7. Testing and Bug Fixes
**Story:** All  
**Assigned to:** Chang, All team  
**Estimated Hours:** 4h  
**Status:** ✅ Done

**Tasks:**
- [x] Test form submission
- [x] Test with different browsers
- [x] Test on mobile devices
- [x] Fix identified bugs
- [x] Verify all acceptance criteria
- [x] User acceptance testing

**Issues Found & Fixed:**
- Form not clearing after submission - FIXED
- Time format inconsistency - FIXED
- Layout issues on mobile - FIXED

**Completion Date:** Day 6-7

---

### 8. Documentation
**Story:** N/A  
**Assigned to:** Jaff, Chang  
**Estimated Hours:** 3h  
**Status:** ✅ Done

**Tasks:**
- [x] Update README with project info
- [x] Document how to run the system
- [x] Create Sprint 1 backlog document
- [x] Prepare for Sprint Review
- [x] Write Sprint Review notes

**Completion Date:** Day 7

---

## Sprint 1 Burndown

| Day | Remaining Hours | Notes |
|-----|----------------|-------|
| Day 1 | 32h | Sprint started, setup complete |
| Day 2 | 24h | Form UI in progress |
| Day 3 | 16h | Form logic implemented |
| Day 4 | 12h | Display functionality added |
| Day 5 | 8h | Styling improvements |
| Day 6 | 4h | Testing phase |
| Day 7 | 0h | ✅ Sprint completed |

---

## Daily Standup Notes (Summary)

### Day 2
**Wenxin:** Working on form UI, need restaurant list from Fonglam  
**Fonglam:** Will provide restaurant options today  
**Jaff:** Repository set up, tracking progress  
**Chang:** Reviewing initial mockups

### Day 4
**Wenxin:** Form styling complete, working with Fonglam on integration  
**Fonglam:** Form submission working, starting display logic  
**Jaff:** No blockers, team on track  
**Chang:** Testing form, looks good

### Day 6
**Wenxin:** Final styling touches  
**Fonglam:** Display list working perfectly  
**Jaff:** Preparing sprint review  
**Chang:** UAT in progress, finding minor bugs

---

## Sprint 1 Achievements

### Completed Features
✅ Functional booking form with 3 input fields  
✅ Restaurant dropdown with 4 options  
✅ Time selection using HTML5 time picker  
✅ Real-time appointment display  
✅ Form reset after submission  
✅ Clean, professional UI  
✅ Responsive design

### Technical Deliverables
- `index.html` - 60 lines
- `style.css` - 120 lines
- `script.js` - 25 lines
- Total commits: 15+

### User Stories Completed
- US1: Online Restaurant Booking ✅
- US2: Restaurant and Time Selection ✅
- US3: View Current Appointments ✅

**Velocity:** 13 story points completed out of 13 committed (100%)

---

## Blockers Encountered

1. **Initial Git Setup** (Day 1)
   - Issue: Team members unfamiliar with Git
   - Resolution: Jaff provided Git tutorial
   - Time Lost: 1h

2. **Form Integration** (Day 3)
   - Issue: HTML and JS not connecting properly
   - Resolution: Fixed file paths
   - Time Lost: 0.5h

3. **Mobile Responsiveness** (Day 5)
   - Issue: Form too wide on mobile
   - Resolution: Wenxin added media queries
   - Time Lost: 2h

**Total Time Lost to Blockers:** 3.5h

---

## Sprint 1 Review Preparation

### Demo Checklist
- [x] Working booking system
- [x] All team members familiar with code
- [x] Test data prepared
- [x] Known issues documented
- [x] Future improvements identified

### Demo Flow
1. Show empty system
2. Fill booking form
3. Submit booking
4. Show booking appears in list
5. Demonstrate multiple bookings
6. Show responsive design

---

## Retrospective Preparation

**What to Discuss:**
- What went well
- What could improve
- Action items for Sprint 2

**Initial Observations:**
- ✅ Good task breakdown
- ✅ Clear communication
- ⚠️ Need better validation
- ⚠️ Should add data persistence

---

## Definition of Done - Sprint 1

- [x] All committed user stories completed
- [x] Code committed to GitHub main branch
- [x] Manual testing completed
- [x] No critical bugs
- [x] Documentation updated
- [x] Sprint review completed
- [x] Working demo prepared

**Sprint 1 Status:** ✅ SUCCESSFULLY COMPLETED

---

**Next Sprint:** Sprint 2 will focus on validation, persistence, and UX improvements