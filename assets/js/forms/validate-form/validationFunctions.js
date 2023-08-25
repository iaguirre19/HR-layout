export function validateInputs(content) {
  const activePart = content.querySelector(".active-part");
  if (!activePart) return;

  const inputs = activePart.querySelectorAll(
    ".input-container input[required]"
  );

  inputs.forEach((input) => {
    const errorIcon = input.nextElementSibling;
    const inputContainer = input.parentElement;
    const grandparentElement = inputContainer.parentElement;

    let errorMessage = inputContainer.querySelector(".error-message");

    // If errorMessage doesn't exist, create and append it
    if (!errorMessage) {
      errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Este campo es obligatorio"; 
      inputContainer.appendChild(errorMessage);
    }

    input.addEventListener("blur", function () {
      if (this.value === "") {
        errorIcon.className = "bx bx-error-circle";
        errorIcon.style.display = "block";
        inputContainer.classList.add("error");
        inputContainer.classList.remove("check");
        grandparentElement.classList.add("invalid");
        grandparentElement.classList.remove("valid");
        errorMessage.style.display = "block"; 
      } else {
        errorIcon.className = "bx bx-check";
        errorIcon.style.display = "block";
        inputContainer.classList.remove("error");
        inputContainer.classList.add("check");
        grandparentElement.classList.add("valid")
        grandparentElement.classList.remove("invalid");
        errorMessage.style.display = "none";
      }
    });
  });
}







