// 获取表单元素
const form = document.getElementById('addCustomerForm');

// 添加表单提交事件监听器
form.addEventListener('submit', function(event) {
    // 获取输入字段
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    // 简单的前端验证
    if (name.value.trim() === "" || email.value.trim() === "") {
        event.preventDefault(); // 阻止表单提交
        alert("Please fill in all required fields.");
    }
});
