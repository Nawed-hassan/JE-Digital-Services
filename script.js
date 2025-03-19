document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);

        fetch("https://formspree.io/f/mblgdllo", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                this.reset();
            } else {
                alert("Something went wrong. Try again.");
            }
        })
        .catch(error => alert("Error: " + error.message));
    });
});
