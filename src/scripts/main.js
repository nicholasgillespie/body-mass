import calculator from "./calculator";
// import linkToButton from "./link-to-button";

const app = {
  initialize() {
    // linkToButton.activate();
    calculator.activate();
  },
};

document.addEventListener("DOMContentLoaded", app.initialize);
