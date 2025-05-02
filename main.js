document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector('form');
    
    // Add an event listener to the form submission
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting
        event.preventDefault();
        
        // Get input values
        const username = document.querySelector('[name="username"]').value;
        const email = document.querySelector('[name="email"]').value;
        const password = document.querySelector('[name="password"]').value;
        
        // Basic validation: Check if fields are empty
        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
        } else {
            // Handle form data (this is just an example, you could send it to a server or process it further)
            alert(`Form submitted!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
            
            // Optionally, clear the form fields after submission
            form.reset();
        }
    });
});
