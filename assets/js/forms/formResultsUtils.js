// import buttonsFunctions from './btnsFunctions.js'
import { displayHeaderInfo } from "./headerLeftDisplay.js";
// import { validateParts } from './stepCounter.js';


document.addEventListener("DOMContentLoaded", () => {
  // const stepPrintCounter = document.querySelector(".step-counter-data");
  const toggleBtns = document.querySelectorAll(".button[data-form]");

  let divContainer;

  
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
  // ===== Display the form on the left depending on wich one is clicked. (EVENT)
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", toogleEvent);
  });

  const hiddenForms = (section) => {
    section.classList.remove("active-selected");
  };

  //  =================Displays the following part of the form==================
  // function showNextPart(section) {
  //   const activePart = section.querySelector(".step.active-part");
  //   if (activePart) {
  //     activePart.classList.add("hidden");
  //     activePart.classList.remove("active-part");
  //     const nextPart = activePart.nextElementSibling;
  //     if (nextPart) {
  //       nextPart.classList.add("active-part");
  //       nextPart.classList.remove("hidden");
  //     }
  //   }
  // }

  // ===== Displays the following part of the form depending on the tab you are on======
  // const btnShow = (part, section) => {
  //   if (part === 1) {
  //     const button = nextButton;
  //     button.style.display = "block";
  //     nextButton.addEventListener("click", () => {
  //       showNextPart(section);
  //       console.log("Click");
  //     });
  //   }
  // };

  // const btnEvents = (prevButton, nextButton, saveButton) => {
  //   const btnsContainer = document.querySelector(".pager-container");
  //   const typeOfButton = btnsContainer.querySelector("#prevButton"); // Cambio aquí
  //   console.log(typeOfButton);
  // };

  function toogleEvent() {
    const toggleId = this.getAttribute("data-form");

      const formData = showFormContainerMatch(toggleId, dataArray);
      divContainer = formData
      const containerStep = stepCounter(divContainer);
      buttonsEvents(containerStep, divContainer)
    
  }
});

const showFormContainerMatch = (idToggle, dataArray) => {
  const formSections = document.querySelectorAll(".sections-toggle-form");

  let selectedSection = null;

  formSections.forEach((section) => {
    if (idToggle === section.id) {
      section.classList.add("active-selected");
      selectedSection = section;
      displayHeaderInfo(idToggle, dataArray);
    } else {
      section.classList.remove("active-selected");
    }
  });

  if (selectedSection !== null) {
    return selectedSection;
  }
};

const stepCounter = (sectionContainer) => {
  const stepCounterContainer = document.querySelector(".steps-container");
  const stepPrintCounter = document.querySelector(".step-counter-data");
  const stepsInContainer = sectionContainer.querySelectorAll(".step");
  const numberOfSteps = stepsInContainer.length;

  let currentStep = -1;
  let currentContainer 

  for (let index = 0; index < stepsInContainer.length; index++) {
    if (stepsInContainer[index].classList.contains("active-part")) {
      currentStep = index + 1;
      currentContainer = stepsInContainer[index];
      break; 
    }
  }

  let theCurrentStepIs = "";

  if (currentStep !== -1) {
    if (currentStep === 1 && currentStep === numberOfSteps) {
      theCurrentStepIs = "singleStep";
    } else if (currentStep === 1) {
      theCurrentStepIs = "firstStep";
    } else if (currentStep === numberOfSteps) {
      theCurrentStepIs = "lastStep";
    } else {
      theCurrentStepIs = "intermediateStep";
    }

    // console.log(theCurrentStepIs)
    stepCounterContainer.style.display = "grid";
    stepPrintCounter.textContent = `${currentStep} of ${numberOfSteps}`;
  }

  return  theCurrentStepIs;
};

const buttonsEvents = (partNumber, container) => {
  console.log(partNumber)
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const saveButton = document.getElementById("saveButton");


  if(partNumber === "singleStep"){
    nextButton.style.display = "none";
    saveButton.style.display = "block";
  }else if(partNumber === "firstStep" ){
    saveButton.style.display = "none";
    nextButton.style.display = "block";
    nextButton.addEventListener("click",() => {
      // ======================= continue with this step =========================
      console.log(`Hola click en el boton next`);
    }); 
    console.log('se activara el boton de next')
  }else if(partNumber === "lastStep"){
    nextButton.style.display = "none";
    prevButton.style.display = "block"
    saveButton.style.display = "block";
    
  }
}

//  function showNextPart(section) {
//   const activePart = section.querySelector(".step.active-part");
//   if (activePart) {
//     activePart.classList.add("hidden");
//     activePart.classList.remove("active-part");
//     const nextPart = activePart.nextElementSibling;
//     if (nextPart) {
//       nextPart.classList.add("active-part");
//       nextPart.classList.remove("hidden");
//     }
//   }
// }




























// const stepCounter = (sectionContainer) => {
//   const stepCounterContainer = document.querySelector(".steps-container");
//   const stepPrintCounter = document.querySelector(".step-counter-data");
//   const stepsInContainer = sectionContainer.querySelectorAll(".step");
//   const numberOfSteps = stepsInContainer.length;

//   let currentStep = -1;

//   stepsInContainer.forEach((stepSection, index) => {
//     if (stepSection.classList.contains("active-part")) {
//       currentStep = index + 1;
//       console.log(currentStep)
//     }
//   });
  

//   let theCurrentStepIs = ""; 
//   if (currentStep !== -1) {
//     if (currentStep === 1 && currentStep === numberOfSteps) {
//       theCurrentStepIs = "ultimo de uno"

//     } else if (currentStep === 1){
//       theCurrentStepIs = "primero"
//     } else if (currentStep === numberOfSteps) {
//       theCurrentStepIs = "ultima pagina"
//     } else {
//       theCurrentStepIs =  `Es el numero ${currentStep}`
      
//     }
    

//     stepCounterContainer.style.display = "grid";
//     stepPrintCounter.textContent = `${currentStep} of ${numberOfSteps}`; 
//   }
// };

























// stepsInContainer.forEach((stepSection, index) => {
//   if (stepSection.classList.contains("active-part")) {
//     // ...
//   }
// });






// sections.classList.add('.hidden')
    // const firstChildToDisplay = sect.querySelector(".step:first-child");
    // firstChildToDisplay.classList.remove('hidden', 'active-part');

// const showForm = (toggleId) => {
//   formSections.forEach((section) => {
//     let formId = section.id;
//     hiddenForms(section);
//     if (formId === toggleId) {
//       section.classList.add("active-selected");

//       const firstPartToShow = section.querySelector(".step:first-child");
//       const lastPartShowed = section.querySelector(".step:last-child");

//       if (firstPartToShow) {
//         firstPartToShow.classList.add("active-part");
//         firstPartToShow.classList.remove("hidden");
//       }

//       if (lastPartShowed) {
//       }

//       const validateNumber = validateParts(section, stepPrintCounter);
//       btnShow(validateNumber, section);
//       // const activeParts = section.querySelectorAll(".step.active-part");
//       // const currentStep =
//       //   Array.from(activeParts).indexOf(
//       //     section.querySelector(".step.active-part")
//       //   ) + 1;
//       // // console.log(currentStep);
//       // const totalSteps = activeParts.length;
//       // // console.log(totalSteps);
//       // buttonsFunctions.updateButtonState(currentStep, totalSteps);

//       // const nextButton = document.getElementById("nextButton");
//       // nextButton.addEventListener("click", () => {
//       //   buttonsFunctions.showNextPart(section);
//       //   buttonsFunctions.updateButtonState(currentStep, totalSteps);
//       // });
//     }
//   });
// };
























// necesito que traiga el data-type del boton y lo imprima como titulo "done"
// Nevcesito una funcion que valide si ese formulario contiene mas de un grupo, si es asi, imprimero en pasos x de y
// Necesito que verifique si esta en el paso primero , si es asi solo mostras el btn de shuiguiente y si esta en el final el de prev y guardar los de en medio muestra prev y siguiente
// Al final necesito que se muestre el formulario con toda esta informacion.
