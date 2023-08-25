// Esta función limpia todos los campos de entrada en la página.
function clearAllInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.type !== "radio" && input.type !== "checkbox") {
      input.value = "";
    } else {
      input.checked = false;
    }
  });
}

// Llama a la función clearAllInputs cuando la página se recarga.
window.addEventListener("load", clearAllInputs);
