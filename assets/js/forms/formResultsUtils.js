// import { countFormGroups } from "./stepFormCounter.js";


// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".button[data-form]");
//   const titleH2 = document.querySelector(".title-form-h2");
//   const forms = document.querySelectorAll(".hidden-form");

//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const formId = this.getAttribute("data-form");
//       const formTitle = button.querySelector("span").textContent;

//       const formCounterTitle =  ("form-" + formId)
      
//       console.log(formCounterTitle)
//       const countGroup = countFormGroups(formCounterTitle);
      
//       console.log(countGroup)
      
//       // Ocultar todos los formularios antes de mostrar el nuevo
//       hideAllForms();

//       // Mostrar el nuevo formulario y actualizar el título
//       showForm(formId, formTitle);
      
//     });
//   });




//   function showForm(formId, formTitle) {
//     const formToShow = document.getElementById("form-" + formId);
//     formToShow.classList.remove("hidden-form");
//     titleH2.textContent = formTitle;
//   }

//    function hideAllForms() {
//      forms.forEach((form) => {
//        form.classList.add("hidden-form");
//      });
//    }
// });




import { printSectionInfo } from "./sectionInfoPrint.js";


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll(".button[data-form]");
  const formSections = document.querySelectorAll('.sections-toggle-form');
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

  

  function toogleEvent() {
    const toggleId = this.getAttribute("data-form");

    const showForm = (toggleId) => {
      formSections.forEach((section) => {
        let formId = section.id;
        section.classList.remove("active");
        if (formId === toggleId) {
          section.classList.add("active"); // Corrección aquí
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

      // formSections.forEach((section) => {
      //   if(toggleId === section.id){
      //     console.log(section)
      //   }
      // })



      
    });
  }
});


























// necesito que traiga el data-type del boton y lo imprima como titulo "done"
// Nevcesito una funcion que valide si ese formulario contiene mas de un grupo, si es asi, imprimero en pasos x de y
// Necesito que verifique si esta en el paso primero , si es asi solo mostras el btn de shuiguiente y si esta en el final el de prev y guardar los de en medio muestra prev y siguiente
// Al final necesito que se muestre el formulario con toda esta informacion.
