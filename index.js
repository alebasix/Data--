 const flexElement = document.getElementById("flex");

const buttons = document.querySelectorAll("body>div>button");

for (const button of buttons) {
  button.addEventListener("click", (buttons) => {
    flexElement.style.flexDirection = buttons.target.getAttribute("data-flex");
  });
}
