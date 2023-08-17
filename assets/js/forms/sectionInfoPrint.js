// export function countFormGroups(formId) {
//   const form = document.getElementById(formId);
//   if (form) {
//     const formGroups = form.querySelectorAll(".step");
//     const totalGroups = formGroups.length;
//     if (currentGroup >= 1 && currentGroup <= totalGroups) {
//       return `${currentGroup} de ${totalGroups}`;
//     }
//   }
//   return "";
// }

export const printSectionInfo = (title, description, toogleid) => {
    const titleContainer = document.querySelector(".title-form-h2");
    const titleDescription = document.querySelector(".title-form-description");
    const stepCounterPrint = document.querySelector(".step-counter");
    console.log(stepCounter(toogleid))    
    titleDescription.textContent = description
    titleContainer.textContent = title;
};

const stepCounter = (toggleid) => {
  const formSections = document.querySelectorAll(".sections-toggle-form");

  formSections.forEach((section, index) => {
    let sectionId = section.id;

    if (sectionId === toggleid) {
      const numberOfParts = section.childElementCount;
      console.log(numberOfParts)
    }
  });
};









