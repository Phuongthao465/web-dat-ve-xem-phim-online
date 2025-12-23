fetch("/api/get_invoices.php?user_id=1")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("invoiceBody");

    data.forEach(i => {
      tbody.innerHTML += `
        <tr>
          <td>${i.movie_name}</td>
          <td>${i.show_time}</td>
          <td>${i.seats}</td>
          <td>${i.total_price}đ</td>
          <td>${i.payment_method}</td>
          <td>${new Date(i.created_at.date).toLocaleString()}</td>
        </tr>
      `;
    });
  });
