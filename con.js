// script.js

// You can include any additional scripts for form validation or interactivity.
// For example, simple form validation could be added here.

document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (name === '' || email === '') {
        alert('Please fill in both name and email.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Form submitted successfully!');
    }
});
