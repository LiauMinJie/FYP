// Sidebar Toggle Script
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// 这是一个示例，假设你需要切换一些内容，或者展示/隐藏的功能。
// 假设你有一些按钮或控件来切换页面内容，可以在这里加功能代码。

// 例如，点击按钮时更改按钮的文本
function changeButtonText(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.textContent = button.textContent === 'Add Customer' ? 'Customer Added' : 'Add Customer';
    }
}
