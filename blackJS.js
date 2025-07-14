window.onload = function () {
  const input = document.querySelector("input");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "=") {
        try {
          input.value = eval(input.value);
        } catch (err) {
          input.value = "Error";
        }
      } else if (value === "AC") {
        input.value = "";
      } else {
        input.value += value;
      }
    });
  });
};
