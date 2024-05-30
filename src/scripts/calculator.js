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
    // Helper function to get the value of an input field
    const getValue = (id) => parseFloat(document.querySelector(`#${id}`).value);

    // Get the height and weight values
    let height, weight, lowerWeight, upperWeight, unit;

    // Retrieves and converts height and weight based on the selected unit system (metric or imperial).
    if (this.metric.checked) {
      height = getValue("centimeters");
      weight = getValue("kilograms");
    } else if (this.imperial.checked) {
      height = getValue("feet") * 12 + getValue("inches");
      weight = getValue("stones") * 14 + getValue("pounds");
    } else {
      throw new Error("Please select either metric or imperial");
    }

    // Check if both height and weight have been entered
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      return; // Exit the function if not
    }

    // Get references to the elements we'll be updating
    const lBoxElement = document.querySelector(".calculator__result .l-box");
    const h2Element = document.querySelector(".calculator__result--value h2");
    const pElement = document.querySelector(".calculator__result--value p");
    const detailsElement = document.querySelector(
      ".calculator__result--details"
    );

    // Check which unit system is selected and calculate height and weight accordingly
    if (this.metric.checked) {
      height = getValue("centimeters") / 100;
      weight = getValue("kilograms");
      unit = "kgs";
    } else if (this.imperial.checked) {
      height = (getValue("feet") * 12 + getValue("inches")) * 0.0254;
      weight = (getValue("stones") * 14 + getValue("pounds")) * 0.453592;
      unit = "";
    } else {
      throw new Error("Please select either metric or imperial");
    }

    // Validate the height and weight values
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      throw new Error("Please enter valid height and weight values");
    }

    // Calculate the square of the height
    const heightSquared = height * height;

    // Calculate the lower and upper weight limits for a healthy BMI
    lowerWeight = (18.5 * heightSquared).toFixed(1);
    upperWeight = (24.9 * heightSquared).toFixed(1);

    // If the unit system is imperial, convert the weight limits from kg to lbs
    if (this.imperial.checked) {
      lowerWeight /= 0.453592;
      upperWeight /= 0.453592;
    }

    // Calculate the BMI
    const bmi = weight / heightSquared;

    // Determine the BMI classification
    const classifications = {
      underweight: bmi < 18.5,
      "healthy weight": bmi >= 18.5 && bmi < 25,
      overweight: bmi >= 25 && bmi < 30,
      obese: bmi >= 30,
    };
    const classification = Object.keys(classifications).find(
      (key) => classifications[key]
    );

    // Update the UI with the calculated BMI
    lBoxElement.classList.add("l-switcher");
    h2Element.classList.add("p");
    h2Element.textContent = "So your BMI is...";
    pElement.classList.add("h1");
    pElement.textContent = `${bmi.toFixed(2)}`;

    // Prepare the weight limit strings for display
    let lowerWeightDisplay, upperWeightDisplay;

    if (this.imperial.checked) {
      const lowerWeightStn = Math.floor(lowerWeight / 14);
      const lowerWeightLbs = (lowerWeight % 14).toFixed(1);
      const upperWeightStn = Math.floor(upperWeight / 14);
      const upperWeightLbs = (upperWeight % 14).toFixed(1);

      lowerWeightDisplay = `${lowerWeightStn}st ${lowerWeightLbs}lbs`;
      upperWeightDisplay = `${upperWeightStn}st ${upperWeightLbs}lbs`;
    } else {
      lowerWeightDisplay = `${lowerWeight}${unit}`;
      upperWeightDisplay = `${upperWeight}${unit}`;
    }

    // Update the UI with the BMI classification and weight limits
    detailsElement.innerHTML = `Your BMI suggests you’re ${classification}. Your ideal weight is between <strong>${lowerWeightDisplay}</strong> - <strong>${upperWeightDisplay}</strong>.`;
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
