
const menuButton = document.querySelector(".btn");

menuButton.addEventListener("click", function () {
  console.log("Welcome to 8 Meter International Tea Shop!");
});

const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    const name = item.querySelector("h3").textContent;
    const price = item.querySelector("strong").textContent;

    alert("You selected: " + name + "\nPrice: " + price);
  });
});
