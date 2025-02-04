function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const email = document.getElementById("email").value;
    
    alert(`Registration Successful!`);
window.location.href = "index.html";} 
