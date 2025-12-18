// Dữ liệu giả lập
const product = {
    title: "Laptop Gaming XYZ",
    description: "Laptop Gaming XYZ với cấu hình mạnh mẽ, RAM 16GB, SSD 512GB, card đồ họa RTX 3060, màn hình 144Hz.",
    price: "25,000,000",
    image: "https://via.placeholder.com/400x300.png?text=Laptop+XYZ"
};

// Hiển thị dữ liệu lên trang
document.getElementById('product-title').innerText = product.title;
document.getElementById('product-description').innerText = product.description;
document.getElementById('product-price').innerText = product.price;
document.getElementById('product-img').src = product.image;

// Nút Buy Now
document.getElementById('buy-btn').addEventListener('click', function() {
    alert(`Bạn đã mua sản phẩm: ${product.title}`);
});
