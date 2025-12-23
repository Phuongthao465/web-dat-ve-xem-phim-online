const data = JSON.parse(localStorage.getItem("bookingData"));
const cinemaName = localStorage.getItem("cinemaName") || "Chưa rõ rạp";
const cinemaAddress = localStorage.getItem("cinemaAddress") || "Đang cập nhật";

/* LẤY DANH SÁCH ĐỒ ĂN */
const foods = JSON.parse(localStorage.getItem("selectedFoods")) || [];

let foodHTML = "";
let foodTotal = 0;

if (foods.length > 0) {
  foodHTML += `<div class="food-section"><h3>🍟 Đồ ăn & Thức uống</h3>`;

  foods.forEach(item => {
    let itemTotal = item.price * item.qty;

    foodHTML += `
      <div class="food-item">
        ${item.name} × ${item.qty} — <strong>${itemTotal.toLocaleString("vi-VN")} đ</strong>
      </div>`;

    foodTotal += itemTotal;
  });

  foodHTML += `<p><strong>Tổng đồ ăn:</strong> ${foodTotal.toLocaleString("vi-VN")} đ</p></div>`;
}

/* HIỂN THỊ TOÀN BỘ THÔNG TIN */
if (data) {
  const finalTotal = data.total + foodTotal;

  document.getElementById("ticketInfo").innerHTML = `
    <p><strong>🎬 Phim:</strong> ${data.movie}</p>
    <p><strong>📅 Ngày chiếu:</strong> ${data.date}</p>
    <p><strong>🕒 Suất chiếu:</strong> ${data.time}</p>
    <p><strong>💺 Ghế:</strong> ${data.seats.join(", ")}</p>
    <p><strong>🏢 Rạp:</strong> ${cinemaName} - ${cinemaAddress}</p>
    <p><strong>🎟️ Tiền vé:</strong> ${data.total.toLocaleString("vi-VN")} đ</p>
    ${foodHTML}
    <p style="margin-top:15px; font-size:18px; color:#ffcc00;">
      <strong>💰 Tổng thanh toán: ${finalTotal.toLocaleString("vi-VN")} đ</strong>
    </p>`;
} else {
  document.getElementById("ticketInfo").innerHTML = `<p>❌ Không tìm thấy thông tin đặt vé!</p>`;
}

function printInvoice() {
  window.print();
}
function goInvoiceHistory() {
  window.location.href = "invoice.html";
}
fetch("/api/save_invoice.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    user_id: 1,
    movie_name,
    show_time,
    seats,
    total_price,
    payment_method: "Momo"
  })
});

