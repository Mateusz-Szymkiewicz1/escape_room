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
        if (this.element) this.element.remove();
        if (this.esc) this.esc.unbind();
        this.onComplete();
    }     
   async init() {
        if(window.heroInventory.length == 4){
          const eventHandler = new OverworldEvent({type: "textMessage", text: "Brakuje jeszcze jednego klucza!"});
          eventHandler.init();
        }else if(window.heroInventory < 4){
          const eventHandler = new OverworldEvent({type: "textMessage", text: `Brakuje ${5-window.heroInventory.length} kluczy!`});
          eventHandler.init();
        }else{
          this.close()
          const eventHandler = new OverworldEvent({type: "play_audio", audio: "win", volume: 0.1});
          eventHandler.init();
          const eventHandler2 = new OverworldEvent({
            type: "changeMap",
            map: "Room7",
            x: utils.withGrid(4),
            y: utils.withGrid(8),
            direction: "up"
          },);
          eventHandler2.init();
          return;
        }
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
  