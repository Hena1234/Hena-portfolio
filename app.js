const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

const form = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const submittedMsg = document.querySelector(".submitted-message");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // Remove active class from all buttons
      for (let j = 0; j < sectBtn.length; j++) {
        sectBtn[j].classList.remove("active-btn");
      }

      // Add active class to the clicked button
      this.classList.add("active-btn");
    });
  }
  //sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtn.forEach((btn) => {
        btn.classList.remove("active-btn");
      });
      e.target.classList.add("active-btn");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

function handleSubmit(e) {
  e.preventDefault(); // Prevent default form submission behavior
  // Here you can add your code to submit the form data to the server

  // Display the submitted message
  submittedMsg.style.display = "block";
  // Hide the form after submission
  form.style.display = "none";
}

PageTransitions();
submitBtn.addEventListener("click", handleSubmit);
