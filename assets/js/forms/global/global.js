// globals.js

let globalData = {
  divContainer: null,
  containerStep: null,
};

export function updateGlobalData(divContainer, containerStep) {
  globalData.divContainer = divContainer;
  globalData.containerStep = containerStep;
}

export function getGlobalData() {
  return globalData;
}

// export const buttonsShow = (partNumber) => {
//   const nextButton = document.querySelector("#nextButton");
//   const prevButton = document.getElementById("prevButton");
//   const saveButton = document.getElementById("saveButton");

//   if (partNumber === "singleStep") {
//     nextButton.style.display = "none";
//     saveButton.style.display = "block";
//   } else if (partNumber === "firstStep") {
//     saveButton.style.display = "none";
//     nextButton.style.display = "block";
//   } else if (partNumber === "lastStep") {
//     nextButton.style.display = "none";
//     prevButton.style.display = "block";
//     saveButton.style.display = "block";
//   }
// };


export const buttonsShow = (partNumber) => {
  const nextButton = document.querySelector("#nextButton");
  const prevButton = document.getElementById("prevButton");
  const saveButton = document.getElementById("saveButton");

  const styleMap = {
    singleStep: { next: { opacity: 0, zIndex: -1 }, prev: { opacity: 0, zIndex: -1 }, save: { opacity: 1, zIndex: 2 } },
    firstStep: { next: { opacity: 1, zIndex: 2 }, prev: { opacity: 0, zIndex: -1 }, save: { opacity: 0, zIndex: -1 } },
    intermediateStep: { next: { opacity: 1, zIndex: 2 }, prev: { opacity: 1, zIndex: 2 }, save: { opacity: 0, zIndex: -1 } },
    lastStep: { next: { opacity: 0, zIndex: -1 }, prev: { opacity: 1, zIndex: 2 }, save: { opacity: 1, zIndex: 2 } },
  };

  const styles = styleMap[partNumber];

  nextButton.style.opacity = styles.next.opacity;
  nextButton.style.zIndex = styles.next.zIndex;

  prevButton.style.opacity = styles.prev.opacity;
  prevButton.style.zIndex = styles.prev.zIndex;

  saveButton.style.opacity = styles.save.opacity;
  saveButton.style.zIndex = styles.save.zIndex;
};















export const stepCounter = (sectionContainer) => {
  const stepCounterContainer = document.querySelector(".steps-container");
  const stepPrintCounter = document.querySelector(".step-counter-data");
  const stepsInContainer = sectionContainer.querySelectorAll(".step");
  const numberOfSteps = stepsInContainer.length;

  let currentStep = -1;
  let currentContainer;

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
    stepCounterContainer.style.display = "grid";
    stepPrintCounter.textContent = `${currentStep} of ${numberOfSteps}`;
  }

  return theCurrentStepIs;
};