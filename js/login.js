function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Lấy danh sách tài khoản
    const users = JSON.parse(localStorage.getItem("userAccounts")) || [];

    if (users.length === 0) {
        message.textContent = "❌ Chưa có tài khoản nào! Hãy đăng ký trước.";
        message.className = "error";
        return;
    }

    // Tìm user trùng username & password
    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (foundUser) {
        message.textContent = "✅ Đăng nhập thành công!";
        message.className = "success";

        // Lưu tài khoản đang đăng nhập
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        setTimeout(() => {
            window.location.href = "movies.html";
        }, 1200);

    } else {
        message.textContent = "❌ Sai tên đăng nhập hoặc mật khẩu!";
        message.className = "error";
    }
}
