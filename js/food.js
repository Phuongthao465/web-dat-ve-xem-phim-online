// Ảnh AI minh họa
const foods = [
    { name: "Coke 32oz", price: 37000, img: "images/Coke32oz.jpg" },
    { name: "Combo nhà gấu", price: 249000, img: "images/combonhagau.jpg" },
    { name: "Combo có gấu", price: 119000, img: "images/combocogau.jpg" },
    { name: "Combo gấu", price: 109000, img: "images/combogau.jpg" },
    { name: "Sprite 32oz", price: 37000, img: "images/Sprite32oz.jpg" },
    { name: "Fanta 32oz", price: 37000, img: "images/Fanta32oz.jpg" },
    { name: "Nước cam Teppy", price: 28000, img: "images/nuoccam.jpg" },
    { name: "Nutriboots trái cây", price: 28000, img: "images/Nutriboots.jpg" },
    { name: "Nước suối Dasani", price: 18000, img: "images/nuocsuoi.jpg" },
    { name: "Snack Thái", price: 25000, img: "images/snackthai.jpg" },
    { name: "Khoai Tây Lay's 100g", price: 59000, img: "images/khoaitaylay's100g.jpg" },
    { name: "Poca 54gr", price: 28000, img: "images/Poca54gr.jpg" },
    { name: "Snack Partyz 30gr", price: 20000, img: "images/SnackPartyz.jpg" },
    { name: "Combo Solo", price: 84000, img: "images/combosolo.jpg" },
    { name: "Combo Party", price: 209000, img: "images/comboparty.jpg" },
    { name: "Combo Couple", price: 109000, img: "images/combocouple.jpg" },
    { name: "Combo U22", price: 89000, img: "images/combou22.jpg" }
];

let quantities = Array(foods.length).fill(0);
const list = document.getElementById("foodList");

// Render UI
foods.forEach((item, index) => {
    list.innerHTML += `
        <div class="item">
            <img src="${item.img}" class="food-img">
            <h3>${item.name}</h3>
            <p class="price">${item.price.toLocaleString()} đ</p>

            <div class="qty-box">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-number" id="qty-${index}">0</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
        </div>
    `;
});

// Tăng/Giảm số lượng
function changeQty(i, val) {
    quantities[i] = Math.max(0, quantities[i] + val);
    document.getElementById(`qty-${i}`).textContent = quantities[i];

    const selected = foods
        .map((f, idx) => ({ ...f, qty: quantities[idx] }))
        .filter(item => item.qty > 0);

    localStorage.setItem("selectedFoods", JSON.stringify(selected));
}

function goPayment() {
    window.location.href = "payment.html";
}
