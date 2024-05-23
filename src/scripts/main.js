import linkToButton from "./link-to-button";

const app = {
  initialize() {
    linkToButton.activate();
  },
};

document.addEventListener("DOMContentLoaded", app.initialize);
