export function validateInputs(content) {
  const activePart = content.querySelector(".active-part");
  if (!activePart) return;

  const inputs = activePart.querySelectorAll(
    ".input-container input[required]"
  );

  const clickOnInput = (inputs) => {
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        if (this.type === "tel") {
          this.addEventListener("input", function () {
            const cleanedValue = this.value.replace(/\D/g, "");

            if (cleanedValue.length <= 10) {
              const formattedValue = cleanedValue.replace(
                /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
                "($1) $2-$3"
              );
              this.value = formattedValue;
            } else {
              this.value = cleanedValue.slice(0, 10);
            }
          });
        }
      });
    });
  };



  clickOnInput(inputs)
  
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
      const inputValue = this.value;
      const isEmpty = inputValue === "";
      const validClass = isEmpty ? "invalid" : "valid";
      const invalidClass = isEmpty ? "valid" : "invalid";

      errorIcon.className = isEmpty ? "bx bx-error-circle" : "bx bx-check";
      inputContainer.classList.add(isEmpty ? "error" : "check");
      inputContainer.classList.remove(isEmpty ? "check" : "error");
      grandparentElement.classList.add(validClass);
      grandparentElement.classList.remove(invalidClass);
      errorMessage.style.display = isEmpty ? "block" : "none";

      errorIcon.style.display = "block";
    });

    
  });
};







