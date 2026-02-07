document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const stall = document.getElementById('stallName').value;
    const time = document.getElementById('bookingTime').value;

    if (!name || !stall || !time) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    const list = document.getElementById('appointmentList');
    const listItem = document.createElement('li');
    listItem.classList.add('appointment-item');

    listItem.innerHTML = `
        <strong>${name}</strong> booked <strong>${stall}</strong> at <strong>${time}</strong>
    `;

    list.appendChild(listItem);
    this.reset();
});
