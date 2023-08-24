import { getGlobalData, buttonsShow, stepCounter } from "../global/global.js";
const nextButton = document.querySelector("#nextButton");
const saveButton = document.querySelector("#saveButton");
const prevButton = document.getElementById("prevButton");
const pagerContainer = document.querySelector(".pager-container");


// nextButton.addEventListener("click", nextButtonPage);
// prevButton.addEventListener("click", prevButtonPage)



// function nextButtonPage() {
//   const globalData = getGlobalData();
//   const divContainer = globalData.divContainer;
//   const containerStep = globalData.containerStep;

//   const currentPosition = divContainer.querySelectorAll(".step");
//   const activeIndex = Array.from(currentPosition).findIndex((element) =>
//     element.classList.contains("active-part")
//   );

//   if (activeIndex !== -1) {
//     const activeElement = currentPosition[activeIndex];
//     const nextSibling = currentPosition[activeIndex + 1];

//     if (nextSibling) {
//       activeElement.classList.remove("active-part");
//       activeElement.classList.add("hidden");

//       nextSibling.classList.remove("hidden");
//       nextSibling.classList.add("active-part");

//       const page = stepCounter(divContainer);
//       buttonsShow(page)
//     }
//   }
// }

// function prevButtonPage () {
//   const globalData = getGlobalData();
//   const divContainer = globalData.divContainer;

//   const currentPosition = divContainer.querySelectorAll(".step");
//   const activeIndex = Array.from(currentPosition).findIndex((element) =>
//     element.classList.contains("active-part")
//   );

//   if (activeIndex !== -1) {
//     const activeElement = currentPosition[activeIndex];
//     const prevSibling = currentPosition[activeIndex - 1];

//     if (prevSibling) {
//       activeElement.classList.remove("active-part");
//       activeElement.classList.add("hidden");

//       prevSibling.classList.remove("hidden");
//       prevSibling.classList.add("active-part");

//       const page = stepCounter(divContainer);
//       buttonsShow(page);

//     }
//   }
// };
nextButton.addEventListener("click", () => changePage("next"));
prevButton.addEventListener("click", () => changePage("prev"));
saveButton.addEventListener("click", () => savePageSection())


// const renderButtons = (pagerContainer) => {
//   const prevButton = document.createElement("a");
//   prevButton.setAttribute("class", "form-btns pager");
//   prevButton.setAttribute("id", "prevButton");

//   const prevIcon = document.createElement("i");
//   prevIcon.setAttribute("class", "bx bx-left-arrow-alt arrow");

//   const prevText = document.createElement("span");
//   prevText.textContent = "Anterior";



//   prevButton.appendChild(prevIcon);
//   prevButton.appendChild(prevText);

//   prevButton.style.display = "block";

//   return pagerContainer.appendChild(prevButton);

// }

// renderButtons(pagerContainer)


function changePage(action) {
  const globalData = getGlobalData();
  const divContainer = globalData.divContainer;
  const currentPosition = divContainer.querySelectorAll(".step");

  const activeIndex = Array.from(currentPosition).findIndex((element) =>
    element.classList.contains("active-part")
  );

  if (activeIndex !== -1) {
    const activeElement = currentPosition[activeIndex];

    if (action === "next") {
      const nextIndex = activeIndex + 1;
      const nextElement = currentPosition[nextIndex];

      if (nextElement) {
        activeElement.classList.remove("active-part");
        activeElement.classList.add("hidden");

        nextElement.classList.remove("hidden");
        nextElement.classList.add("active-part");

        const page = stepCounter(divContainer);
        buttonsShow(page);
      }
    } else if (action === "prev") {
      const prevIndex = activeIndex - 1;
      const prevElement = currentPosition[prevIndex];

      if (prevElement) {
        activeElement.classList.remove("active-part");
        activeElement.classList.add("hidden");

        prevElement.classList.remove("hidden");
        prevElement.classList.add("active-part");

        const page = stepCounter(divContainer);
        buttonsShow(page);
      }
    }
  }
}





