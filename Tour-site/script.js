// მენიუს ღილაკი მობილურზე
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  });
  
  // ტურის კატეგორიების ფილტრი
  document.getElementById("categoryFilter").addEventListener("change", function () {
    const selected = this.value;
    const cards = document.querySelectorAll("#tourCards .card");
  
    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (selected === "ყველა" || selected === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  


  // მობილური მენიუს ტოგლი
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  });
  
  // ტურის კატეგორიების ფილტრი
  document.getElementById("categoryFilter").addEventListener("change", function () {
    const selected = this.value;
    const cards = document.querySelectorAll("#tourCards .card");
    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      card.style.display = (selected === "ყველა" || selected === category) ? "block" : "none";
    });
  });
  
  // დაჯავშნის ფორმის მარტივი ვალიდაცია და შეტყობინება
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("თქვენი მოთხოვნა წარმატებით გაგზავნილია! მალე დაგიკავშირდებით.");
    this.reset();
  });