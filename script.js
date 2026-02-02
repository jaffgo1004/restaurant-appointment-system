document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Preventing page refresh

    // 1. Get the input value
    const name = document.getElementById('userName').value;
    const stall = document.getElementById('stallName').value;
    const time = document.getElementById('bookingTime').value;

    // 2. Create a new list item (UI presentation)
    const list = document.getElementById('appointmentList');
    const listItem = document.createElement('li');
    listItem.classList.add('appointment-item');
    
    listItem.innerHTML = `
        <strong>${name}</strong> booked <strong>${stall}</strong> at <strong>${time}</strong>
    `;

    // 3. Add to page
    list.appendChild(listItem);

    // 4. Clear Form
    this.reset();
});