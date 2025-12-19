const seatContainer = document.getElementById("seatContainer");
const bookedSeats = [6, 7, 15, 23]; // ghế đã đặt
const selectedSeats = new Set();

const totalSeats = 40;
const seatsPerRow = 8;
const lastRow = Math.ceil(totalSeats / seatsPerRow);

// Tạo ghế
for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.textContent = i;

  const row = Math.ceil(i / seatsPerRow);
  if (row === lastRow) seat.classList.add("double");
  if (bookedSeats.includes(i)) seat.classList.add("booked");

  seat.onclick = () => {
    if (seat.classList.contains("booked")) return;
    seat.classList.toggle("selected");
    if (selectedSeats.has(i)) selectedSeats.delete(i);
    else selectedSeats.add(i);
    updateInfo();
  };

  seatContainer.appendChild(seat);
}

// Cập nhật thông tin ghế và tổng tiền
function updateInfo() {
  const seats = [...selectedSeats];
  document.getElementById("selectedInfo").textContent =
    seats.length > 0
      ? `Ghế đã chọn: ${seats.join(", ")}`
      : "Chưa chọn ghế nào";

  let total = 0;
  seats.forEach(s => {
    const row = Math.ceil(s / seatsPerRow);
    total += row === lastRow ? 100000 : 45000;
  });

  document.getElementById("totalPrice").textContent =
    `💰 Tổng tiền: ${total.toLocaleString("vi-VN")} đ`;
  return total;
}

// Khi xác nhận đặt vé
function confirmSeats() {
  if (selectedSeats.size === 0) {
    alert("Vui lòng chọn ít nhất một ghế!");
    return;
  }

  const movie = localStorage.getItem("selectedMovie") || "Phim chưa chọn";
  const date = localStorage.getItem("selectedDate") || "(chưa chọn ngày)";
  const time = localStorage.getItem("showtime") || "(chưa chọn suất)";
  const total = updateInfo();

  const bookingData = {
    movie,
    date,
    time,
    seats: [...selectedSeats],
    total
  };
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  window.location.href = "food.html";
}
