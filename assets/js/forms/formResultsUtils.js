// import buttonsFunctions from './btnsFunctions.js'
import { printSectionInfo } from "./sectionInfoPrint.js";
import { validateParts } from './stepCounter.js';


document.addEventListener("DOMContentLoaded", () => {
  const stepPrintCounter = document.querySelector(".step-counter-data");
  const toggleBtns = document.querySelectorAll(".button[data-form]");
  const formSections = document.querySelectorAll(".sections-toggle-form");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const saveButton = document.getElementById("saveButton");
  const dataArray = [
    {
      "data-personal": {
        title: "Datos personales",
        description: "Completa tus datos personales para continuar.",
        /* objeto de datos personales */
      },
    },
    {
      "additional-data": {
        title: "Datos adicionales",
        description: "Proporciona información adicional relevante.",
        /* objeto de datos adicionales */
      },
    },
    {
      "contact-information": {
        title: "Información de contacto",
        description:
          "Ingresa tu información de contacto para mantenernos en contacto.",
        /* objeto de información de contacto */
      },
    },
    {
      "health-information": {
        title: "Información de salud",
        description: "Indica detalles importantes sobre tu estado de salud.",
        /* objeto de información de salud */
      },
    },
    {
      "confirmation-required": {
        title: "Confirmación requerida",
        description: "Confirma ciertos datos antes de continuar.",
        /* objeto de confirmación requerida */
      },
    },
    {
      "position-data": {
        title: "Información de Posición",
        description: "Proporciona detalles sobre tu posición actual o deseada.",
      },
    },
  ];

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", toogleEvent);
  });

  const hiddenForms = (section) => {
    section.classList.remove("active-selected");
  };

  function showNextPart(section) {
    const activePart = section.querySelector(".step.active-part");
    if (activePart) {
      activePart.classList.add("hidden");
      activePart.classList.remove("active-part");
      const nextPart = activePart.nextElementSibling;
      if (nextPart) {
        nextPart.classList.add("active-part");
        nextPart.classList.remove("hidden");
      }
    }
  }

  const btnShow = (part, section) => {
    if (part === 1) {
      const button = nextButton;
      button.style.display = "block";
      nextButton.addEventListener("click",() => {
        showNextPart(section);
        console.log("Click")
      })
    
    }
  };

  function toogleEvent() {
    const toggleId = this.getAttribute("data-form");

    // Validates if the button matches the form id and displays the appropriate title and form.
    const showForm = (toggleId) => {
      formSections.forEach((section) => {
        let formId = section.id;
        hiddenForms(section);
        if (formId === toggleId) {
          section.classList.add("active-selected");

          const firstPartToShow = section.querySelector(".step:first-child");
          console.log(firstPartToShow);

          if (firstPartToShow) {
            firstPartToShow.classList.add("active-part");
            firstPartToShow.classList.remove("hidden");
          }

          const validateNumber = validateParts(section, stepPrintCounter);
          btnShow(validateNumber, section);
          // const activeParts = section.querySelectorAll(".step.active-part");
          // const currentStep =
          //   Array.from(activeParts).indexOf(
          //     section.querySelector(".step.active-part")
          //   ) + 1;
          // // console.log(currentStep);
          // const totalSteps = activeParts.length;
          // // console.log(totalSteps);
          // buttonsFunctions.updateButtonState(currentStep, totalSteps);

          // const nextButton = document.getElementById("nextButton");
          // nextButton.addEventListener("click", () => {
          //   buttonsFunctions.showNextPart(section);
          //   buttonsFunctions.updateButtonState(currentStep, totalSteps);
          // });
        }
      });
    };

    dataArray.forEach((data) => {
      if (toggleId === Object.keys(data)[0]) {
        const properties = data[toggleId];
        const title = properties.title;
        const description = properties.description;
        printSectionInfo(title, description, toggleId);
        showForm(toggleId);
      }
    });
  }
});


























// necesito que traiga el data-type del boton y lo imprima como titulo "done"
// Nevcesito una funcion que valide si ese formulario contiene mas de un grupo, si es asi, imprimero en pasos x de y
// Necesito que verifique si esta en el paso primero , si es asi solo mostras el btn de shuiguiente y si esta en el final el de prev y guardar los de en medio muestra prev y siguiente
// Al final necesito que se muestre el formulario con toda esta informacion.
