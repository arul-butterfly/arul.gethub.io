// Alert message on form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
