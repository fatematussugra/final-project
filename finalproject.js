
const form = document.getElementById("applicationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const domainInput = document.getElementById("domain");
const educationInput = document.getElementById("education");
const messageInput = document.getElementById("message");


// ===============================
// NAME
// ONLY ALPHABETS AND SPACES
// ===============================

nameInput.addEventListener("input", function () {

    // Remove numbers and special characters
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");

});


// ===============================
// CONTACT NUMBER
// ONLY NUMBERS
// ===============================

phoneInput.addEventListener("input", function () {

    // Remove alphabets and special characters
    this.value = this.value.replace(/[^0-9]/g, "");

});


// ===============================
// FORM SUBMIT
// ===============================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const domain = domainInput.value;
    const education = educationInput.value.trim();
    const message = messageInput.value.trim();


    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const domainError = document.getElementById("domainError");
    const educationError = document.getElementById("educationError");
    const messageError = document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    domainError.textContent = "";
    educationError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // ===============================
    // NAME VALIDATION
    // ===============================

    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if (name === "") {

        nameError.textContent =
            "Please enter your full name.";

        isValid = false;

    }
    else if (!namePattern.test(name)) {

        nameError.textContent =
            "Name can contain only alphabets and spaces.";

        isValid = false;

    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    }
    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // ===============================
    // PHONE VALIDATION
    // ===============================

    const phonePattern = /^[0-9]{10,15}$/;

    if (phone === "") {

        phoneError.textContent =
            "Please enter your contact number.";

        isValid = false;

    }
    else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Contact number must contain 10 to 15 digits.";

        isValid = false;

    }


    // ===============================
    // DOMAIN VALIDATION
    // ===============================

    if (domain === "") {

        domainError.textContent =
            "Please select a domain.";

        isValid = false;

    }


    // ===============================
    // EDUCATION VALIDATION
    // ===============================

    if (education === "") {

        educationError.textContent =
            "Please enter your education.";

        isValid = false;

    }


    // ===============================
    // MESSAGE VALIDATION
    // ===============================

    if (message === "") {

        messageError.textContent =
            "Please tell us about your interest.";

        isValid = false;

    }
    else if (message.length < 20) {

        messageError.textContent =
            "Please write at least 20 characters.";

        isValid = false;

    }


    // ===============================
    // SUCCESS
    // ===============================

    if (isValid) {

        successMessage.textContent =
            "✓ Your application has been submitted successfully!";

        form.reset();

    }

});

