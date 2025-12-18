const images = [
  'images/chi-nga-em-nang.jpg',
  'images/cuoi-vo-cho-cha.jpg',
  'images/mua-do-2.jpg',
  'images/truy-tim-long-dien-huong.jpg'
];

function changeBackground() {
    const img = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.background-overlay').style.backgroundImage = `url(${img})`;
    document.querySelector('.background-blur').style.backgroundImage = `url(${img})`;
}

// Chạy ngay và đổi mỗi 4 giây
changeBackground();
setInterval(changeBackground, 4000);