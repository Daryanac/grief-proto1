function handleForm(formId, inputId, successId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const success = document.getElementById(successId);

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = input.value.trim();

        if (!email.endsWith(".edu")) {
            alert("Please enter a valid .edu email address.");
            return;
        }

        // Save locally for prototype demo
        const waitlist = JSON.parse(localStorage.getItem("waitlist")) || [];
        waitlist.push({
            email: email,
            timestamp: new Date().toISOString()
        });

        localStorage.setItem("waitlist", JSON.stringify(waitlist));

        input.value = "";
        success.classList.remove("hidden");
    });
}

handleForm("waitlistForm", "email", "successMessage");
handleForm("ctaForm", "ctaEmail", "ctaSuccess");
