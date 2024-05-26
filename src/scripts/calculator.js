const calculator = {
  // DOM ELEMENTS
  switch: null,
  metric: null,
  imperial: null,
  metricInputs: null,
  imperialInputs: null,
  calculatorInputs: null,

  // FUNCTIONS
  calculateBMI() {
    let height, weight;

    if (this.metric.checked) {
      height = parseFloat(document.querySelector("#centimeters").value) / 100;
      weight = parseFloat(document.querySelector("#kilograms").value);
    } else if (this.imperial.checked) {
      const feet = parseFloat(document.querySelector("#feet").value);
      const inches = parseFloat(document.querySelector("#inches").value);
      height = (feet * 12 + inches) * 0.0254;

      const stones = parseFloat(document.querySelector("#stones").value);
      const pounds = parseFloat(document.querySelector("#pounds").value);
      weight = (stones * 14 + pounds) * 0.453592;
    }

    if (isNaN(height) || isNaN(weight)) {
      console.log("Please enter valid height and weight values");
      return;
    }

    const bmi = weight / (height * height);
    console.log("BMI: ", bmi);
  },

  handleMetric() {
    this.metricInputs.forEach((input) => (input.style.display = "block"));
    this.imperialInputs.forEach((input) => (input.style.display = "none"));
    this.calculatorContainer.style.removeProperty("--switcher-target-width");
  },

  handleImperial() {
    this.metricInputs.forEach((input) => (input.style.display = "none"));
    this.imperialInputs.forEach((input) => (input.style.display = "block"));
    this.calculatorContainer.style.setProperty(
      "--switcher-target-width",
      "calc(var(--item-size-min) * 2)"
    );
  },

  toggleUnits(e) {
    e.preventDefault();
    if (this.metric.checked) {
      this.handleMetric();
    } else if (this.imperial.checked) {
      this.handleImperial();
    }
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.switch) return;

    this.metric.addEventListener("change", this.toggleUnits.bind(this));
    this.imperial.addEventListener("change", this.toggleUnits.bind(this));

    this.calculatorInputs.forEach((input) => {
      input.addEventListener("input", this.calculateBMI.bind(this));
    });
  },

  // INITIAL SETUP
  initialSetup() {
    this.switch = document.querySelector(".calculator__switch");
    this.metric = this.switch.querySelector("#metric");
    this.imperial = this.switch.querySelector("#imperial");
    this.metricInputs = document.querySelectorAll(".js-metric");
    this.imperialInputs = document.querySelectorAll(".js-imperial");
    this.calculatorInputs = document.querySelectorAll(
      ".calculator__inputs input[type='number']"
    );
    this.calculatorContainer = document.querySelector(".calculator__inputs");

    this.imperialSwitch = document.querySelector("#imperial-switch");

    // Show the imperial checkbox
    this.imperialSwitch.style.display = "flex";
    this.imperialInputs.forEach((input) => (input.style.display = "none"));

    this.heightInput = document.querySelector("#height");
    this.weightInput = document.querySelector("#weight");
  },

  // PRIMARY
  activate() {
    this.initialSetup();
    this.eventListeners();
  },
};

export default calculator;
