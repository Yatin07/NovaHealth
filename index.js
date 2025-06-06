function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('errorMessage');
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Reset error message
  errorMessage.innerHTML = '';

  // Email validation
  if (!email.match(emailPattern)) {
      errorMessage.innerHTML = 'Please enter a valid email address.';
      return false;
  }

  // Password validation (at least 6 characters)
  if (password.length < 6) {
      errorMessage.innerHTML = 'Password must be at least 6 characters long.';
      return false;
  }

  window.location.href = 'homepage.html';  // Change 'homepage.html' to your homepage URL
  return false; // Prevent form submission to server (for this example)
  
}