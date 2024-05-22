const emailChecker = {
  // DOM ELEMENTS
  form: document.querySelector(".form__email"),
  btn: null,
  input: null,
  errorMsg: null,

  // FUNCTIONS
  checkValidEmail() {
    if (!this.input || !this.errorMsg) return;
    const email = this.input.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      this.errorMsg.textContent = "Oops! Please add your email";
      this.errorMsg.classList.add("error-message");
    } else if (!emailRegex.test(email)) {
      this.errorMsg.textContent = "Oops! Please check your email";
      this.errorMsg.classList.add("error-message");
    } else {
      this.errorMsg.textContent = "";
      this.errorMsg.classList.remove("error-message");
      console.log("Email:", email);
    }
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.form) return;
    this.btn = this.form.querySelector("button");
    this.input = this.form.querySelector("input");
    this.errorMsg = document.createElement("p");
    this.form.appendChild(this.errorMsg);

    if (this.btn) {
      this.btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.checkValidEmail();
      });
    }
  },

  // ACTIVATE
  activate() {
    this.eventListeners();
  },
};

export default emailChecker;
