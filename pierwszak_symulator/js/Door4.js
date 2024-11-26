class Door4{
    constructor({onComplete}) {
        this.onComplete = onComplete;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("book")
        this.element.classList.add("door")
        this.element.classList.add("door4")
        this.element.innerHTML = `
        <h2>Drzwi</h2>
          <div>
            <div><img ${window.heroInventory.find(x => x.id == "Klucz_1") ? 'class="full"' : ""} src="images/Objects/klucz_schron.png"></div>
            <div><img ${window.heroInventory.find(x => x.id == "Klucz_2") ? 'class="full"' : ""} src="images/Objects/klucz_szafka.png"></div>
            <div><img ${window.heroInventory.find(x => x.id == "Klucz_3") ? 'class="full"' : ""} src="images/Objects/klucz_quiz.png"></div>
            <div><img ${window.heroInventory.find(x => x.id == "Klucz_4") ? 'class="full"' : ""} src="images/Objects/klucz_quiz2.png"></div>
            <div><img ${window.heroInventory.find(x => x.id == "Klucz_5") ? 'class="full"' : ""} src="images/Objects/klucz_kot.png"></div>
          </div>
        `;
    }
    close() {
        document.querySelector(".game-container > canvas").style.filter = "none";
        utils.turn_hud_on();
        this.element.remove();
        this.esc.unbind();
        this.onComplete();
    }     
   async init() {
        this.createElement();
        document.querySelector(".game-container > canvas").style.filter = "blur(4px)";
        utils.turn_hud_off();
        document.querySelector(".game-container").appendChild(this.element);
        let this2 = this;
        this.esc = new KeyPressListener("Escape", () => {
            this.close();
        });
    }
  }
  