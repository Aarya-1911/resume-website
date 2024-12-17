document.addEventListener("DOMContentLoaded", function () {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Simple form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");

            if (!name.value || !email.value || !message.value) {
                alert("All fields are required!");
                e.preventDefault();
            }
        });
    }
});
