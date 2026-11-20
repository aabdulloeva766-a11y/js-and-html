const dishes = ["plov", "samsa", "lagman"];

const menu = document.querySelector(".menu");

menu.innerHTML = dishes.map((dish) => `<li>${dish}</li>`).join("");