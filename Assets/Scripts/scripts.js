// Theme Switching Logic
document.addEventListener('DOMContentLoaded', function () {
  // Select the theme switch input
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
  // Add an event listener to the theme switch input
  toggleSwitch.addEventListener('change', switchTheme, false);

  // Function to switch the theme based on the checkbox state
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }    
  }
});

// Form Validation Logic
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

// Function to validate the form on submit
const validate = (e) => {
  e.preventDefault();
 
  // Validate name length
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  // Validate email format
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  // Validate email using a custom function
  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  // Validate message length
  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  // Clear error message and show success message
  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  // Clear form after a delay
  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;
}

// Function to check if an email is valid
const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Add the form validation function to the submit button
submitBtn.addEventListener('click', validate);
