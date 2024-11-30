class EndScreen {
  constructor({onComplete}){
      this.onComplete = onComplete;
  }
  getOptions(pageKey) {
      return [
          {
            label: "Zakończ",
            description: "Zakończ grę",
            handler: () => {
              document.location.reload(true)
            }
        },
    ]
  }
  createElement() {
      this.element = document.createElement("div");
      this.element.classList.add("EndScreen");
      this.element.innerHTML = (`<h2>The end</h2><img src="images/endgame.png">`);
  }
 async close() {
      document.querySelector("canvas").style.filter = "none";
      utils.turn_hud_on();
      this.keyboardMenu.end();
      this.element.remove();
      this.onComplete();
  }
  async init(container) {
    document.querySelector(".pokoj").innerText = ""
      this.createElement();
      this.keyboardMenu = new KeyboardMenu({
          descriptionContainer: container
      })
      this.keyboardMenu.init(this.element);
      this.keyboardMenu.setOptions(this.getOptions("root"));
      document.querySelector("canvas").style.filter = "blur(4px)";
      utils.turn_hud_off();
      container.appendChild(this.element);
  }
}