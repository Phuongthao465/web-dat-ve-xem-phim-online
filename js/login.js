function handleLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ email và mật khẩu!");
        return false;
    }

    // Demo đăng nhập (sau này thay bằng backend)
    if (email === "admin@gmail.com" && password === "123456") {
        alert("Đăng nhập thành công!");
        // window.location.href = "index.html";
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }

    return false; // chặn reload form
}
