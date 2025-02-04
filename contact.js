function handleContact(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a success message or handle the data as needed
    alert(`\nYour message has been sent.\n`);
    window.location.href = "index.html";
    // Optionally, you can send the message to your server or perform other actions
    // For example, you could use fetch to send the data to a server endpoint

    // Clear the form
    document.getElementById("contactForm").reset();
}