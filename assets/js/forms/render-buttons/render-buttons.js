import { getGlobalData, buttonsShow, stepCounter, storeFormData } from "../global/global.js";
// import { printContent } from "../print-form/printingForm.js";
import { validateInputs } from "../validate-form/validationFunctions.js";
import { validateAndToggleSibling } from "../validate-toggle/validateToggle.js";



const nextButton = document.querySelector("#nextButton");
const saveButton = document.querySelector("#saveButton");
const prevButton = document.getElementById("prevButton");
const printButton = document.querySelector(".print-button");

nextButton.addEventListener("click", () => changePage("next"));
prevButton.addEventListener("click", () => changePage("prev"));
saveButton.addEventListener("click", () => savePageSection())
printButton.addEventListener("click", () => printButtonModal())


function markAsComplete(element) {
  element.classList.add("complete");
}

function changePage(action) {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const activeIndex = Array.from(currentPosition).findIndex((element) =>
    element.classList.contains("active-part")
  );

  if (activeIndex !== -1) {
    const activeElement = currentPosition[activeIndex];

    if (action === "next") {
      const invalidChild = activeElement.querySelector(".invalid");

      if (invalidChild) {
        console.log("Invalid input found in active element", invalidChild);

        const invalidInputs = activeElement.querySelectorAll(
          ".input-container input.invalid:not(.valid)"
        );
        invalidInputs.forEach((input) => console.log("Invalid input:", input));
      } else {
        const nextInputs = activeElement.querySelectorAll(
          ".input-container input[required]"
        );

        const allFieldsValid = [...nextInputs].every(
          (input) => input.value !== ""
        );

        if (allFieldsValid) {
          markAsComplete(activeElement);

          const nextIndex = activeIndex + 1;
          const nextElement = currentPosition[nextIndex];

          if (nextElement) {
            activeElement.classList.replace("active-part", "hidden");
            nextElement.classList.replace("hidden", "active-part");

            buttonsShow(stepCounter(divContainer));
            validateInputs(divContainer);
          }
        } else {
          console.log("Not all fields are valid");
        }
      }
    } else if (action === "prev") {
      const prevIndex = activeIndex - 1;
      const prevElement = currentPosition[prevIndex];

      if (prevElement) {
        activeElement.classList.replace("active-part", "hidden");
        prevElement.classList.replace("hidden", "active-part");

        buttonsShow(stepCounter(divContainer));
      }
    }
  }
}

function checkSiblingsComplete(element) {
  const siblings = Array.from(element.parentElement.children);

  if (siblings.every((sibling) => sibling.classList.contains("complete"))) {
    const toggleContainer = getGlobalData().containerToggle;
    toggleContainer.classList.add("step-completion");

    const idTo = toggleContainer.getAttribute("id");


    if (idTo === "lastToggle") {
      const modalElement = document.querySelector(".main-page-modal");
      modalElement.style.opacity = "1";
      modalElement.style.zIndex = "20";
      modalElement.style.transition = "opacity 0.3s ease-in-out"; 

      storeFormData();
    }
  }
}

function validateAndMarkAsComplete(element) {
  const requiredInputs = element.querySelectorAll(
    ".input-container input[required]"
  );
  const allFieldsValid = [...requiredInputs].every(
    (input) => input.value !== ""
  );

  if (allFieldsValid) {
    markAsComplete(element);
    checkSiblingsComplete(element); 
  } else {
    console.log("Not all fields are valid");
  }
}

function savePageSection() {
  const divContainer = getGlobalData().divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");
  const lastPosition = currentPosition[currentPosition.length - 1];

  validateAndMarkAsComplete(lastPosition);
  validateAndToggleSibling();
}


function printButtonModal() {
  const data = getGlobalData();
  console.log(data.formData);
  printContent();
}
