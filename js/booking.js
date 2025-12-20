// 🔹 Danh sách ngày
const dateContainer = document.getElementById("dateContainer");
const today = new Date();
const days = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

for (let i = 0; i < 7; i++) {
  const d = new Date();
  d.setDate(today.getDate() + i);
  const day = d.getDate().toString().padStart(2,'0');
  const month = (d.getMonth()+1).toString().padStart(2,'0');
  const dayOfWeek = (i===0)?"H.nay":days[d.getDay()];

  const dateEl = document.createElement("div");
  dateEl.classList.add("date");
  if(i===0) dateEl.classList.add("active");
  dateEl.innerHTML = `<b>${day}/${month}</b><br>${dayOfWeek}`;
  dateEl.onclick = ()=>{
    document.querySelectorAll(".date").forEach(el=>el.classList.remove("active"));
    dateEl.classList.add("active");
  };
  dateContainer.appendChild(dateEl);
}

// 🔹 Suất chiếu
const times = ["15:50","16:20","17:20","18:00","18:30","19:00","20:10","21:10","22:20"];
const lotteTimes = ["15:30","16:45","18:15","19:45","21:00"];
const galaxyTimes = ["14:50","16:20","18:00","20:00","22:00"];

function createTimeButtons(containerId, timesArray, cinemaName, cinemaAddress){
  const container = document.getElementById(containerId);
  timesArray.forEach(time=>{
    const btn = document.createElement("div");
    btn.classList.add("time");
    btn.textContent = time;

    btn.onclick = ()=>{
      document.querySelectorAll(".time").forEach(t=>t.classList.remove("selected"));
      btn.classList.add("selected");
      localStorage.setItem("showtime", time);
      localStorage.setItem("cinemaName", cinemaName);
      localStorage.setItem("cinemaAddress", cinemaAddress);
    };

    container.appendChild(btn);
  });
}

createTimeButtons("cinestarTimes", times, "CineStar Huế", "25 Hai Bà Trưng, TP. Huế");
createTimeButtons("lotteTimes", lotteTimes, "Lotte Cinema Huế", "Big C Huế, TP. Huế");
createTimeButtons("galaxyTimes", galaxyTimes, "Galaxy Aeon Huế", "Aeon Mall Huế");

function confirmBooking(){
  const selectedTime = localStorage.getItem("showtime");
  const selectedDate = document.querySelector(".date.active b")?.textContent;

  if(!selectedTime || !selectedDate){
    alert("Vui lòng chọn ngày, rạp và suất chiếu!");
    return;
  }

  localStorage.setItem("selectedDate", selectedDate);
  window.location.href = "booking-seats.html";
}
