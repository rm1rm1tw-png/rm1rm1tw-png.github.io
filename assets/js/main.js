document.addEventListener("DOMContentLoaded", () => {
  // 平滑滾動效果
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 表單送出提示
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("您的訊息已送出，我們將盡快回覆！");
      form.reset();
    });
  }

  // 搜尋功能
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", () => {
      const keyword = searchBox.value.toLowerCase();
      document.querySelectorAll(".product-card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? "block" : "none";
      });
    });
  }
});
