    AOS.init({ duration: 1000, once: true }); 
// typing effect untuk EstetikStore
const text = "Zelstore";
const span = document.getElementById("storeName");
let i = 0;
let typing = true;

function typeLoop() {
  if (typing) {
    if (i < text.length) {
      span.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeLoop, 150);
    } else {
      typing = false;
      setTimeout(typeLoop, 1000); // jeda sebelum mulai hapus
    }
  } else {
    if (i > 0) {
      span.innerHTML = text.substring(0, i - 1);
      i--;
      setTimeout(typeLoop, 100);
    } else {
      typing = true;
      setTimeout(typeLoop, 500); // jeda sebelum mulai ketik lagi
    }
  }
}

typeLoop();

// scroll ke section produk pas tombol ditekan dengan double click
document.getElementById("btnProducts").addEventListener("dblclick", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

// fungsi kirim ke WA lewat double click produk
function showProductDetails(name, price) {
  const message = `Halo, saya tertarik dengan produk:\n\nNama: ${name}\nHarga: ${price}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "6285183131924"; // ganti nomor WA kamu
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
}

// pasang event double click ke semua produk
document.querySelectorAll(".product").forEach((el) => {
  el.addEventListener("dblclick", () => {
    const name = el.getAttribute("data-name");
    const price = el.getAttribute("data-price");
    showProductDetails(name, price);
  });
});
