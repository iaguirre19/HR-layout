// document.addEventListener("DOMContentLoaded", function () {
//   const activeSection = document.querySelector(
//     ".personal-data.sections-toggle-form.active"
//   );
//   const steps = activeSection.querySelectorAll(".step");
//   const stepCounter = document.getElementById("step-counter");

//   const updateStepCounter = () => {
//     const activeIndex =
//       Array.from(steps).indexOf(activeSection.querySelector(".step.active")) +
//       1;
//     const totalSteps = steps.length;
//     stepCounter.textContent = `${activeIndex} de ${totalSteps}`;
//   };

//   updateStepCounter();

//   steps.forEach((step) => {
//     step.addEventListener("transitionend", updateStepCounter);
//   });
// });


// export const validateParts = (sectionContainer, stepContainer) => {
//   let currentStep = 0;

//   const elementsChildren = sectionContainer.querySelectorAll(".step");
//   const totalChildren = elementsChildren.length;

//   console.log(totalChildren);

//   elementsChildren.forEach((step, index) => {

//     if (index === 0 && step.classList.contains("active-part")) {
//       currentStep = 1;
//       console.log(`Este es el primer div que está activo: ${currentStep}`);
//       return (stepContainer.textContent = `${currentStep} de ${totalChildren}`);
//     }
//     // console.log(`Índice: ${index} de la seccion: ${sectionName}`);
//   });
// };




export const validateParts = (sectionContainer, stepContainer) => {
  const elementsChildren = sectionContainer.querySelectorAll(".step");
  const totalChildren = elementsChildren.length;

  console.log(totalChildren);

  let firstActiveIndex = -1; // Inicializamos en -1 para verificar si se ha encontrado un elemento activo

  elementsChildren.forEach((step, index) => {
    const adjustedIndex = index + 1;

    if (adjustedIndex === 1 && step.classList.contains("active-part")) {
      stepContainer.textContent = `${adjustedIndex} de ${totalChildren}`;
      firstActiveIndex = adjustedIndex; // Almacenamos el índice del primer elemento activo
    }

    if (adjustedIndex === 2 && step.classList.contains("active-part")) {
      const prevButton = document.querySelector("#prevButton");
      // Realiza acciones para el segundo elemento
    }
  });

  return firstActiveIndex; // Devolvemos el índice del primer elemento activo
};



