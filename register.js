function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const email = document.getElementById("email").value;

    // Display a success message or handle the data as needed
    alert(`Registration Successful!`);

    // Optionally, you can redirect to another page or clear the form
     window.location.href = "index.html"; // Uncomment to redirect
    // document.getElementById("registrationForm").reset(); // Uncomment to reset the form
}