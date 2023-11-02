document.addEventListener("DOMContentLoaded", function () {
    // Define validation rules using Validate.js
    const constraints = {
        creditCard: {
            presence: true,
            format: {
                pattern: /^\d{10}$/, // 10 digits pattern
                message: "Please enter a valid 10-digit credit card number.",
            },
        },
        cvv: {
            presence: true,
            format: {
                pattern: /^\d{3}$/, // 3 digits pattern
                message: "Please enter a valid 3-digit CVV number.",
            },
        },
    };

    // Get the form element
    const form = document.getElementById("myForm");

    // Initialize the form validation using Validate.js
    const formValidator = new Validator(form, constraints, function (errors) {
        // Handle validation errors
        const errorMessages = document.getElementById("errorMessages");

        if (errors) {
            errorMessages.innerHTML = errors.map(function (error) {
                return `<p>${error}</p>`;
            }).join("");
        } else {
            errorMessages.innerHTML = "";
        }
    });

    // Listen for form submission
    form.addEventListener("submit", function (event) {
        const errors = formValidator.validate();

        if (errors) {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });
});