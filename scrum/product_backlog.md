# Product Backlog

## Restaurant Appointment System - Product Backlog

**Product Owner:** Chang  
**Last Updated:** February 11, 2026

---

## Product Vision
To provide a seamless, user-friendly online reservation system that eliminates booking friction and enhances the dining experience for both customers and restaurant staff.

---

## User Stories (Prioritized)

### High Priority (Must Have)

#### US1: Online Restaurant Booking
**As a** customer  
**I want to** book a restaurant appointment online  
**So that** I do not need to call the restaurant and can make reservations 24/7

**Priority:** High  
**Story Points:** 5  
**Status:** ✅ Completed (Sprint 1)

**Acceptance Criteria:**
- [ ] Customer can enter their name in a text field
- [ ] System displays a form with all required fields
- [ ] Booking is saved when form is submitted
- [ ] Customer sees confirmation after booking

---

#### US2: Restaurant and Time Selection
**As a** customer  
**I want to** select a food stall and booking time  
**So that** I can plan my visit according to my preferences

**Priority:** High  
**Story Points:** 5  
**Status:** ✅ Completed (Sprint 1)

**Acceptance Criteria:**
- [ ] System displays list of available restaurants
- [ ] Customer can select preferred restaurant from dropdown
- [ ] Customer can choose time using time picker
- [ ] Selected time is in valid format (HH:MM)

---

### Medium Priority (Should Have)

#### US3: View Current Appointments
**As a** restaurant staff member  
**I want to** view all current appointments  
**So that** I can prepare for incoming guests and manage restaurant capacity

**Priority:** Medium  
**Story Points:** 3  
**Status:** ✅ Completed (Sprint 1)

**Acceptance Criteria:**
- [ ] System displays all bookings in a list
- [ ] Each booking shows guest name, restaurant, and time
- [ ] List updates automatically when new booking is made
- [ ] Bookings are displayed in chronological order

---

#### US4: Input Validation
**As a** system  
**I want to** validate input fields before saving  
**So that** incomplete or invalid bookings are prevented

**Priority:** Medium  
**Story Points:** 3  
**Status:** ✅ Completed (Sprint 2)

**Acceptance Criteria:**
- [ ] System checks all fields are filled before submission
- [ ] System shows error message for empty fields
- [ ] Form cannot be submitted with missing data
- [ ] Validation works for all required fields (name, restaurant, time)

---

#### US6: Delete Booking
**As a** customer  
**I want to** delete my booking  
**So that** I can cancel my reservation if my plans change

**Priority:** Medium  
**Story Points:** 3  
**Status:** ✅ Completed (Sprint 2)

**Acceptance Criteria:**
- [ ] Each booking has a delete button
- [ ] Clicking delete removes the booking from the list
- [ ] Deleted booking is removed from storage
- [ ] User receives confirmation before deletion

---

### Low Priority (Nice to Have)

#### US5: Confirmation Messages
**As a** user  
**I want to** receive clear confirmation messages  
**So that** I know my booking was successful and understand system responses

**Priority:** Low  
**Story Points:** 2  
**Status:** ✅ Completed (Sprint 2)

**Acceptance Criteria:**
- [ ] Success message shown after booking
- [ ] Error messages are clear and helpful
- [ ] Form resets after successful submission
- [ ] Visual feedback for user actions

---

## Future Backlog Items (Not Implemented)

#### US7: User Authentication
**As a** customer  
**I want to** create an account and log in  
**So that** I can view my booking history and manage my profile

**Priority:** Medium  
**Story Points:** 8  
**Status:** 🔄 Backlog

---

#### US8: Edit Booking
**As a** customer  
**I want to** edit my existing booking  
**So that** I can change time or restaurant without canceling

**Priority:** Medium  
**Story Points:** 5  
**Status:** 🔄 Backlog

---

#### US9: Date Selection
**As a** customer  
**I want to** select a specific date for my booking  
**So that** I can make advance reservations

**Priority:** High  
**Story Points:** 5  
**Status:** 🔄 Backlog

---

#### US10: Email Confirmation
**As a** customer  
**I want to** receive email confirmation of my booking  
**So that** I have a record and reminder

**Priority:** Medium  
**Story Points:** 8  
**Status:** 🔄 Backlog

---

#### US11: Table Availability Check
**As a** customer  
**I want to** see available time slots  
**So that** I don't book when restaurant is full

**Priority:** High  
**Story Points:** 8  
**Status:** 🔄 Backlog

---

#### US12: Party Size Selection
**As a** customer  
**I want to** specify number of guests  
**So that** restaurant can prepare appropriate table

**Priority:** Medium  
**Story Points:** 3  
**Status:** 🔄 Backlog

---

## Backlog Metrics

### Sprint 1
- **Committed:** 13 story points (US1, US2, US3)
- **Completed:** 13 story points
- **Velocity:** 13 points

### Sprint 2
- **Committed:** 8 story points (US4, US5, US6)
- **Completed:** 8 story points
- **Velocity:** 8 points

### Total Delivered
- **User Stories:** 6 completed
- **Story Points:** 21 points across 2 sprints
- **Features:** 7 major features implemented

---

## Definition of Done

A user story is considered "Done" when:
1. ✅ Code is written and committed to GitHub
2. ✅ Feature works as described in acceptance criteria
3. ✅ Code is reviewed by at least one team member
4. ✅ Manual testing is completed
5. ✅ No critical bugs remaining
6. ✅ Documentation is updated
7. ✅ Feature is deployed to main branch

---

## Prioritization Method

**MoSCoW Method:**
- **Must Have:** US1, US2, US9, US11 (Core booking functionality)
- **Should Have:** US3, US4, US6 (Important for usability)
- **Could Have:** US5, US8, US12 (Enhanced experience)
- **Won't Have (this release):** US7, US10 (Future features)

---

## Notes
- Product backlog is reviewed and updated at the start of each sprint
- Story points estimated using Planning Poker
- Priorities may change based on stakeholder feedback
- New user stories can be added as requirements evolve