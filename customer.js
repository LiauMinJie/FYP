const form = document.getElementById('addCustomerForm');

form.addEventListener('submit', function(event) {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    if (name.value.trim() === "" || email.value.trim() === "") {
        event.preventDefault();
        alert("Please fill in all required fields.");
    }
});
