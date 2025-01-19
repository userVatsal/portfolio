// Function to show an alert when a project button is clicked
function showAlert(message) {
    alert(message);
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Message sent successfully from ${name}!`);
        // Clear the form after submission
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
