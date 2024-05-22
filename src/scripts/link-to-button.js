// https://practical-accessibility.today/chapters/buttons-vs-links/

const linkToButton = {
  // DOM ELEMENTS
  btn: document.querySelector('a[role="button"]'),

  // FUNCTIONS
  doSomething() {
    e.preventDefault();
    console.log(e.key);
  },

  eventListeners() {
    if (!this.btn) return;
    this.btn.addEventListener("click", () => {
      // this.doSomething();
    });

    this.btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // this.doSomething();
      }
    });

    this.btn.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        // this.doSomething();
      }
    });
  },

  // PRIMARY
  activate() {
    this.eventListeners();
  },
};

export default linkToButton;
