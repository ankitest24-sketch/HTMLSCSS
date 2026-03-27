// Basic JavaScript Template for DOM Interactions and Bootstrap 5 Functionality

// Wait for the DOM to fully load before executing any scripts
document.addEventListener('DOMContentLoaded', function() {
    // Example: Change the background color of the body
    document.body.style.backgroundColor = '#f8f9fa';

    // Example: Add a Bootstrap button click event
    const button = document.createElement('button');
    button.innerText = 'Click Me!';
    button.className = 'btn btn-primary';
    button.onclick = function() {
        alert('Button Clicked!');
    };
    document.body.appendChild(button);
});