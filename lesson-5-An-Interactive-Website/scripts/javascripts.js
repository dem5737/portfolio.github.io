function updateGreeting() {
  const greetingInput = document
    .getElementById("greetingInput")
    .value.trim();
  if (greetingInput !== "") {
    document.getElementById("greeting").innerText =
      greetingInput;
  }
}

function updateParagraph() {
  const paragraphInput = document
    .getElementById("paragraphInput")
    .value.trim();
  if (paragraphInput !== "") {
    const firstParagraph = document.querySelector(
      "main p:first-of-type"
    );
    if (firstParagraph) {
      firstParagraph.innerText = paragraphInput;
    }
  }
}

function changeBackgroundColor() {
  const colorSelect =
    document.getElementById("color-select");
  const selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
}

function applyChanges() {
  updateGreeting();
  updateParagraph();
  changeBackgroundColor();
}
