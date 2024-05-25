const calculator = {
  // DOM ELEMENTS
  switch: document.querySelector(".calculator__switch"),
  metric: null,
  imperial: null,

  // FUNCTIONS
  doSomething(e) {
    e.preventDefault();

    const metricInputs = document.querySelectorAll(".js-metric");
    const imperialInputs = document.querySelectorAll(".js-imperial");

    if (this.metric.checked) {
      metricInputs.forEach((input) => (input.style.display = "block"));
      imperialInputs.forEach((input) => (input.style.display = "none"));
      console.log("Metric units selected!");
    } else if (this.imperial.checked) {
      metricInputs.forEach((input) => (input.style.display = "none"));
      imperialInputs.forEach((input) => (input.style.display = "block"));
      console.log("Imperial units selected!");
    }
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.switch) return;
    this.metric = this.switch.querySelector("#metric");
    this.imperial = this.switch.querySelector("#imperial");

    this.metric.addEventListener("change", (e) => {
      this.doSomething(e);
    });

    this.imperial.addEventListener("change", (e) => {
      this.doSomething(e);
    });
  },

  // INITIAL SETUP
  initialSetup() {
    const imperialInputs = document.querySelectorAll(".js-imperial");
    imperialInputs.forEach((input) => (input.style.display = "none"));
  },

  // PRIMARY
  activate() {
    this.initialSetup();
    this.eventListeners();
  },
};

export default calculator;
