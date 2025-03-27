function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function changeButtonText(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.textContent = button.textContent === 'Add Customer' ? 'Customer Added' : 'Add Customer';
    }
}
