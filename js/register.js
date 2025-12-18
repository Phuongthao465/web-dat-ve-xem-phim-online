function register() {
  const username = document.getElementById("username").value.trim();
  const fullname = document.getElementById("fullname").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const cccd = document.getElementById("cccd").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();
  const agree = document.getElementById("agree").checked;
  const message = document.getElementById("message");

  if (!username || !fullname || !dob || !cccd || !email || !phone || !password || !confirm) {
    message.textContent = "⚠️ Vui lòng nhập đầy đủ thông tin!";
    message.className = "error";
    return;
  }

  if (password !== confirm) {
    message.textContent = "❌ Mật khẩu nhập lại không khớp!";
    message.className = "error";
    return;
  }

  if (!agree) {
    message.textContent = "⚠️ Bạn cần đồng ý với điều khoản trước khi đăng ký!";
    message.className = "error";
    return;
  }

  // 👉 Lấy danh sách tài khoản đã lưu (nếu chưa có thì mảng rỗng)
  let users = JSON.parse(localStorage.getItem("userAccounts")) || [];

  // 👉 Kiểm tra trùng username
  if (users.some(u => u.username === username)) {
    message.textContent = "❌ Tên đăng nhập đã tồn tại!";
    message.className = "error";
    return;
  }

  // 👉 Kiểm tra trùng email
  if (users.some(u => u.email === email)) {
    message.textContent = "❌ Email này đã được sử dụng!";
    message.className = "error";
    return;
  }

  // 👉 Tạo tài khoản mới
  const newUser = { username, fullname, dob, cccd, email, phone, password };

  // 👉 Thêm vào mảng rồi lưu lại
  users.push(newUser);
  localStorage.setItem("userAccounts", JSON.stringify(users));

  message.textContent = "✅ Đăng ký thành công! Hãy đăng nhập ngay.";
  message.className = "success";

  setTimeout(() => window.location.href = "login.html", 1500);
}