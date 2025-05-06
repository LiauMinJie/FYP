document.addEventListener("DOMContentLoaded", () => {
    loadCustomers();

    document.getElementById("addForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        fetch("add_customer.php", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, phone, address })
        })
        .then(() => {
            this.reset();
            loadCustomers();
        });
    });
});

function loadCustomers() {
    fetch("get_customers.php")
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector("#customerTable tbody");
            tbody.innerHTML = "";
            data.forEach(c => {
                tbody.innerHTML += `
                    <tr>
                        <td>${c.name}</td>
                        <td>${c.email}</td>
                        <td>${c.phone}</td>
                        <td>${c.address}</td>
                        <td>
                            <button onclick="editCustomer(${c.id}, '${c.name}', '${c.email}', '${c.phone}', '${c.address}')">Edit</button>
                            <button onclick="deleteCustomer(${c.id})">Delete</button>
                        </td>
                    </tr>`;
            });
        });
}

function deleteCustomer(id) {
    if (confirm("Delete this customer?")) {
        fetch(`delete_customer.php?id=${id}`)
            .then(() => loadCustomers());
    }
}

function editCustomer(id, name, email, phone, address) {
    const newName = prompt("Edit Name:", name);
    const newEmail = prompt("Edit Email:", email);
    const newPhone = prompt("Edit Phone:", phone);
    const newAddress = prompt("Edit Address:", address);

    fetch("update_customer.php", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id, name: newName, email: newEmail, phone: newPhone, address: newAddress })
    })
    .then(() => loadCustomers());
}
