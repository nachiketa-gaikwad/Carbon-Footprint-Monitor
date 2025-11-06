// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
}

// Show check marks when inputs are valid
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('email').addEventListener('input', function() {
        const emailCheck = document.getElementById('emailCheck');
        if (this.validity.valid && this.value.length > 0) {
            emailCheck.style.display = 'block';
        } else {
            emailCheck.style.display = 'none';
        }
    });

    document.getElementById('fullname').addEventListener('input', function() {
        const nameCheck = document.getElementById('nameCheck');
        if (this.value.length > 2) {
            nameCheck.style.display = 'block';
        } else {
            nameCheck.style.display = 'none';
        }
    });

    // Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.message === "Register successful") {
            alert("✅ Account Created Successfully!");
            window.location.href = "index.html"; // go to login page
        } else {
            alert(data.error);
        }
    });
});


    // Menu icon click handler
    document.querySelector('.menu-icon').addEventListener('click', function() {
        console.log('Menu clicked');
    });
});