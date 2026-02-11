# Restaurant Appointment System

A web-based restaurant reservation system that enables customers to book dining appointments online efficiently and conveniently.

---

## 📋 Table of Contents
- [Team Members and Roles](#team-members-and-roles)
- [Problem Statement](#problem-statement)
- [Product Vision and Scope](#product-vision-and-scope)
- [System Overview](#system-overview)
- [User Stories](#user-stories)
- [Features Implemented](#features-implemented)
- [How to Run the System](#how-to-run-the-system)
- [Technology Stack](#technology-stack)
- [Scrum Process Summary](#scrum-process-summary)
- [Sprint Overview](#sprint-overview)
- [GitHub Usage](#github-usage)
- [Individual Contributions](#individual-contributions)
- [Future Enhancements](#future-enhancements)

---

## 👥 Team Members and Roles

| Name | Role | Responsibilities |
|------|------|-----------------|
| **Chang** | Product Owner | Defined product vision, prioritized backlog, validated features with user perspective |
| **Jaff** | Scrum Master | Facilitated sprint ceremonies, removed blockers, ensured Scrum practices |
| **Wenxin** | Developer | Frontend development, UI/UX design, styling implementation |
| **Fonglam** | Developer | Business logic, form validation, data handling |

---

## 🎯 Problem Statement

**Client Scenario:**
Modern restaurants face challenges with traditional phone-based reservation systems:
- Long wait times during peak hours
- Booking errors due to miscommunication
- Limited visibility of available time slots
- Inefficient staff time management

**Business Need:**
Restaurants need a digital solution that allows customers to:
- Book tables 24/7 without calling
- Select preferred dining times
- Receive instant confirmation
- Reduce no-shows through better booking tracking

**Target Users:**
- Customers seeking convenient online booking
- Restaurant staff managing reservations
- Restaurant managers tracking booking patterns

---

## 🌟 Product Vision and Scope

**Vision Statement:**
"To provide a seamless, user-friendly online reservation system that eliminates booking friction and enhances the dining experience."

**Scope:**
- ✅ Online appointment booking interface
- ✅ Restaurant selection from predefined options
- ✅ Time slot selection
- ✅ Real-time booking display
- ✅ Input validation
- ✅ Responsive design for mobile and desktop

**Out of Scope (Future Releases):**
- User authentication
- Payment processing
- Email/SMS confirmations
- Table availability checking
- Booking modifications

---

## 📱 System Overview

The Restaurant Appointment System is a lightweight web application built with vanilla JavaScript, HTML5, and CSS3. It provides an intuitive interface for customers to book restaurant tables by selecting their preferred restaurant and time slot.

**Key Components:**
1. **Booking Form** - Captures guest name, restaurant choice, and preferred time
2. **Validation System** - Ensures all required fields are completed
3. **Display Panel** - Shows all current reservations in real-time
4. **Persistent Storage** - Uses localStorage to maintain bookings across sessions

---

## 📖 User Stories

### Epic: Restaurant Booking System

| ID | User Story | Priority | Story Points | Status |
|----|-----------|----------|--------------|--------|
| **US1** | As a **customer**, I want to **book a restaurant appointment online** so that **I do not need to call the restaurant** | High | 5 | ✅ Complete |
| **US2** | As a **customer**, I want to **select a food stall and booking time** so that **I can plan my visit accordingly** | High | 5 | ✅ Complete |
| **US3** | As a **restaurant staff**, I want to **view all current appointments** so that **I can prepare for incoming guests** | Medium | 3 | ✅ Complete |
| **US4** | As a **system**, I want to **validate input fields** so that **incomplete bookings are prevented** | Medium | 3 | ✅ Complete |
| **US5** | As a **user**, I want to **receive clear confirmation messages** so that **I know my booking is successful** | Low | 2 | ✅ Complete |
| **US6** | As a **customer**, I want to **delete my booking** so that **I can cancel if plans change** | Low | 3 | ✅ Complete |

**Acceptance Criteria Examples:**

**US1 - Online Booking:**
- Given I am on the booking page
- When I fill in my name, select a restaurant, and choose a time
- Then my booking should be recorded and displayed

**US4 - Input Validation:**
- Given I am filling the booking form
- When I try to submit with empty fields
- Then I should see an error message
- And the booking should not be created

---

## ✨ Features Implemented

### Sprint 1 Features
1. ✅ **Booking Form Interface**
   - Guest name input field
   - Restaurant dropdown selection (4 options)
   - Time picker for preferred booking time
   - Submit button with icon

2. ✅ **Appointment Display**
   - Real-time list of all bookings
   - Formatted display showing guest, restaurant, and time
   - Smooth animation on new bookings

3. ✅ **Basic Functionality**
   - Form submission handling
   - Dynamic list rendering
   - Form reset after submission

### Sprint 2 Features
4. ✅ **Input Validation**
   - Required field validation
   - Alert messages for incomplete forms
   - Prevention of empty submissions

5. ✅ **Enhanced UI/UX**
   - Premium gold and dark theme
   - Font Awesome icons throughout
   - Responsive layout
   - Smooth transitions and animations

6. ✅ **Data Persistence**
   - LocalStorage integration
   - Bookings saved across browser sessions
   - Automatic data loading on page load

7. ✅ **Delete Functionality**
   - Delete button for each booking
   - Confirmation before deletion
   - Automatic localStorage update

---

## 🚀 How to Run the System

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Steps to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jaffgo1004/restaurant-appointment-system.git
   cd restaurant-appointment-system
   ```

2. **Open the Application**
   - Simply double-click `index.html`
   - OR right-click `index.html` → Open with → Your Browser
   - OR use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Use the System**
   - Enter your name
   - Select a restaurant from the dropdown
   - Choose your preferred time
   - Click "Confirm Reservation"
   - View your booking in the list below

### Testing the Features
- **Test Validation:** Try submitting empty form → should see alert
- **Test Persistence:** Book appointment → refresh page → booking should remain
- **Test Deletion:** Click delete button → booking should be removed

---

## 🛠 Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | HTML5 | Structure and semantic markup |
| **Styling** | CSS3 | Premium UI design, animations |
| **Logic** | Vanilla JavaScript (ES6) | Form handling, validation, DOM manipulation |
| **Icons** | Font Awesome 6.0 | Professional iconography |
| **Fonts** | Google Fonts (Lato, Playfair Display) | Typography |
| **Storage** | LocalStorage API | Client-side data persistence |
| **Version Control** | Git & GitHub | Collaboration and code management |

**Why Vanilla JavaScript?**
- Lightweight and fast
- No build process required
- Easy deployment
- Educational value for fundamentals

---

## 📊 Scrum Process Summary

### Methodology
Our team followed **Scrum** framework with two-week sprints to deliver incremental value.

### Scrum Artifacts
1. **Product Backlog** - Maintained in `product_backlog.md`
2. **Sprint Backlogs** - Documented in `sprint1_backlog.md` and `sprint2_backlog.md`
3. **Increment** - Working software delivered at end of each sprint

### Scrum Events
1. **Sprint Planning** - Held at the start of each sprint (2 sessions)
2. **Daily Standups** - 3x per week via WhatsApp (async)
3. **Sprint Review** - End of each sprint to demo features
4. **Sprint Retrospective** - Team reflection after each sprint

### Tools Used
- **GitHub Projects** - Sprint board and task tracking
- **GitHub Issues** - User stories and bug tracking
- **WhatsApp Group** - Daily communication
- **Git Branches** - Feature development isolation

---

## 🏃‍♂️ Sprint Overview

### Sprint 1 (Week 1)
**Sprint Goal:** Develop a basic working restaurant booking system

**Duration:** 7 days

**Completed User Stories:** US1, US2, US3

**Key Deliverables:**
- Booking form interface
- Appointment list display
- Form submission logic
- Basic styling

**Velocity:** 13 story points completed

**Review Outcome:** Successfully delivered minimum viable product. Stakeholders satisfied with core functionality.

**Retrospective Highlights:**
- ✅ Good initial task breakdown
- ✅ Clear role definition
- ⚠️ Need better testing strategy
- 🔄 Action: Implement validation in Sprint 2

📄 [Full Sprint 1 Review](sprint1_review.md)

---

### Sprint 2 (Week 2)
**Sprint Goal:** Enhance usability, reliability, and user experience

**Duration:** 7 days

**Completed User Stories:** US4, US5, US6

**Key Deliverables:**
- Input validation
- Data persistence (localStorage)
- Delete appointment feature
- Premium UI redesign
- Responsive layout improvements

**Velocity:** 8 story points completed

**Review Outcome:** All planned features implemented. System now production-ready for basic use cases.

**Retrospective Highlights:**
- ✅ Better coordination on GitHub
- ✅ Effective use of branches
- ✅ Improved testing practices
- 🔄 Action: Consider user authentication for future

📄 [Full Sprint 2 Review](sprint2_review.md) | [Sprint 2 Retrospective](sprint2_retrospective.md)

---

## 🔧 GitHub Usage

### Version Control Practices

**Commit History:**
- 25+ commits from all team members
- Meaningful commit messages following convention
- Example: `feat(html): integrate Font Awesome and refactor form structure`

**Branching Strategy:**
- `main` - Production-ready code
- `feature/*` - Individual feature development
- `fix/*` - Bug fixes

**Example Branches:**
- `feature/delete-appointment`
- `feature/localStorage-integration`
- `fix/form-validation`

**Pull Requests:**
- All features merged via Pull Requests
- Code reviews by at least one team member
- PR templates used for consistency

**Issues Tracking:**
- User stories created as GitHub Issues
- Labels: `enhancement`, `bug`, `documentation`
- Milestone tracking for sprint goals

**Project Board:**
- Columns: Backlog, Sprint Backlog, In Progress, Review, Done
- Cards linked to Issues
- Visual sprint progress tracking

### Collaboration Evidence
📂 View our repository: [restaurant-appointment-system](https://github.com/jaffgo1004/restaurant-appointment-system)

- ✅ Commit history showing all members
- ✅ Branch and merge activity
- ✅ Issue tracking and closure
- ✅ Project board snapshots
- ✅ Pull request discussions

---

## 👨‍💻 Individual Contributions

### Chang (Product Owner)
**Responsibilities:**
- Created and prioritized product backlog
- Defined acceptance criteria for user stories
- Conducted sprint reviews with team
- Validated final product against requirements
- Tested system functionality

**Evidence:**
- Initial commit with project structure
- Created `product_backlog.md`
- Documented user stories
- Tested all features end-to-end

---

### Jaff (Scrum Master)
**Responsibilities:**
- Facilitated all Scrum ceremonies
- Maintained sprint documentation
- Removed blockers during development
- Ensured team followed Scrum practices
- Managed GitHub repository and project board

**Evidence:**
- Created sprint backlog files
- Documented sprint reviews and retrospectives
- Set up GitHub Projects board
- Coordinated team communication
- 8+ commits related to documentation and setup

---

### Wenxin (Frontend Developer)
**Responsibilities:**
- Designed and implemented UI/UX
- Created responsive CSS layouts
- Integrated Font Awesome icons
- Implemented premium styling theme
- Ensured cross-browser compatibility

**Evidence:**
- Developed `style.css` (150+ lines)
- Implemented responsive design
- Created `index.html` structure
- 10+ commits on frontend files
- UI iterations based on feedback

---

### Fonglam (Backend Developer)
**Responsibilities:**
- Implemented form validation logic
- Developed localStorage integration
- Created delete appointment functionality
- Handled DOM manipulation
- Debugged JavaScript issues

**Evidence:**
- Developed `script.js` logic
- Implemented validation functions
- Added localStorage persistence
- 12+ commits on JavaScript files
- Code reviews on pull requests

---

### Team Collaboration
**All members contributed to:**
- Sprint planning and retrospectives
- Testing and bug fixing
- Documentation reviews
- README.md compilation
- Presentation preparation

---

## 🔮 Future Enhancements

### Planned for Future Sprints

**High Priority:**
1. **User Authentication**
   - Customer login/registration
   - Booking history per user
   - Profile management

2. **Date Selection**
   - Calendar picker
   - Multi-day booking view
   - Date validation (no past dates)

3. **Email Notifications**
   - Booking confirmation emails
   - Reminder emails 24 hours before
   - Cancellation confirmations

**Medium Priority:**
4. **Table Availability**
   - Real-time seat availability
   - Party size selection
   - Table capacity management

5. **Admin Dashboard**
   - Staff interface for managing bookings
   - Booking analytics
   - Customer management

6. **Edit Booking**
   - Modify existing reservations
   - Change time/restaurant
   - Update guest information

**Low Priority:**
7. **Multi-language Support**
8. **Dark Mode Toggle**
9. **Export to Calendar (iCal)**
10. **SMS Notifications**

---

## 📄 Documentation

- [Product Backlog](product_backlog.md)
- [Sprint 1 Backlog](sprint1_backlog.md)
- [Sprint 1 Review](sprint1_review.md)
- [Sprint 2 Backlog](sprint2_backlog.md)
- [Sprint 2 Review](sprint2_review.md)
- [Sprint 2 Retrospective](sprint2_retrospective.md)

---

## 📧 Contact

For questions or feedback, please contact:
- **Instructor:** Azlina binti Adnan (azlinaadnan@raffles-university.edu.my)
- **Team Repository:** https://github.com/jaffgo1004/restaurant-appointment-system

---

## 📜 License

This project was developed as an academic assignment for BAI21113 Software Engineering course at Raffles University, January 2026 Semester.

---

## 🙏 Acknowledgments

- Lecturer Azlina binti Adnan for guidance
- Scrum.org for Scrum framework resources
- Font Awesome and Google Fonts for design assets
- GitHub for collaboration platform

---

**Project Status:** ✅ Completed and Delivered

**Final Grade Target:** Excellent (80-100%)

**Last Updated:** February 11, 2026