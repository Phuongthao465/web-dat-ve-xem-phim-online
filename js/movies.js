const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {
    card.addEventListener("click", () => {

        const name = card.getAttribute("data-movie");
        const img = card.querySelector("img").getAttribute("src");
        const type = card.querySelector(".movie-info").textContent;

        // Lưu dữ liệu sang trang detail
        localStorage.setItem("movieName", name);
        localStorage.setItem("movieImg", img);
        localStorage.setItem("movieType", type);

        // Chuyển trang
        window.location.href = "detail.html";
    });
});
