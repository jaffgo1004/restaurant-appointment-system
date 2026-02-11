// Restaurant Appointment System - Enhanced JavaScript
// Features: LocalStorage persistence, delete functionality, comprehensive validation

// Load appointments from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();
});

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('userName').value.trim();
    const stall = document.getElementById('stallName').value;
    const time = document.getElementById('bookingTime').value;

    // Validate all fields are filled
    if (!name || !stall || !time) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Create appointment object
    const appointment = {
        id: Date.now(), // Unique ID for each appointment
        name: name,
        stall: stall,
        time: time,
        timestamp: new Date().toISOString()
    };

    // Add to display
    addAppointmentToDOM(appointment);

    // Save to localStorage
    saveAppointment(appointment);

    // Reset form
    this.reset();
});

// Add appointment to DOM
function addAppointmentToDOM(appointment) {
    const list = document.getElementById('appointmentList');
    const listItem = document.createElement('li');
    listItem.classList.add('appointment-item');
    listItem.setAttribute('data-id', appointment.id);

    listItem.innerHTML = `
        <span class="appointment-info">
            <strong>${appointment.name}</strong> booked <strong>${appointment.stall}</strong> at <strong>${appointment.time}</strong>
        </span>
        <button class="delete-btn" onclick="deleteAppointment(${appointment.id})" title="Delete appointment">
            <i class="fas fa-trash"></i>
        </button>
    `;

    list.appendChild(listItem);
}

// Save appointment to localStorage
function saveAppointment(appointment) {
    try {
        // Get existing appointments or initialize empty array
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        
        // Add new appointment
        appointments.push(appointment);
        
        // Save back to localStorage
        localStorage.setItem('appointments', JSON.stringify(appointments));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        alert('Unable to save appointment. Please check browser settings.');
    }
}

// Load all appointments from localStorage
function loadAppointments() {
    try {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        
        // Display each appointment
        appointments.forEach(appointment => {
            addAppointmentToDOM(appointment);
        });
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
}

// Delete appointment
function deleteAppointment(id) {
    try {
        // Remove from DOM
        const listItem = document.querySelector(`[data-id="${id}"]`);
        if (listItem) {
            listItem.remove();
        }

        // Remove from localStorage
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments = appointments.filter(apt => apt.id !== id);
        localStorage.setItem('appointments', JSON.stringify(appointments));
    } catch (error) {
        console.error('Error deleting appointment:', error);
        alert('Unable to delete appointment.');
    }
}

// Optional: Clear all appointments (for testing)
function clearAllAppointments() {
    if (confirm('Are you sure you want to delete all appointments?')) {
        localStorage.removeItem('appointments');
        document.getElementById('appointmentList').innerHTML = '';
    }
}