class Door1{
  constructor({onComplete}) {
      this.onComplete = onComplete;
  }
  createElement() {
      this.element = document.createElement("div");
      this.element.classList.add("book")
      this.element.classList.add("door")
      this.element.classList.add("door1")
      this.element.innerHTML = `
      <div>
        <h2>Hasło: </h2>
        <input type="text"><button>Zatwierdź</button>
        </div>
      `;
  } 
  close() {
      document.querySelector("canvas").style.filter = "none";
      utils.turn_hud_on();
      this.element.remove();
      this.esc.unbind();
      this.enter.unbind();
      this.onComplete();
  }    
  check(){
    let this2 = this;
    let odp = document.querySelector('.door1 input').value
        if(odp.toLowerCase() == "anteros"){
          const eventHandler4 = new OverworldEvent({
            type: "textMessage",text: 'Znalazłeś "Klucz_1"!'
          },);
          eventHandler4.init();
          window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz_1"));
          const eventHandler = new OverworldEvent({
            type: "changeMap",
            map: "Room2",
            x: utils.withGrid(23),
            y: utils.withGrid(21),
            direction: "up"
          },);
          eventHandler.init();
          const eventHandler2 = new OverworldEvent({type: "play_audio", audio: "door_open", volume: 0.1});
          eventHandler2.init();
          const eventHandler3 = new OverworldEvent({type: "play_audio", audio: "win", volume: 0.1});
          eventHandler3.init();
          this2.close()
        }else if(odp.length > 0){
          const eventHandler = new OverworldEvent({type: "play_audio", audio: "wrong", volume: 0.1});
          eventHandler.init();
          document.querySelector(".door1 input").style.color = "red";
          document.querySelector(".door1 input").style.animation = "shake 1s ease";
          setTimeout(function(){
              document.querySelector(".door1 input").style.color = "#fff";
              document.querySelector(".door1 input").style.animation = "";  
          }, 1200)
        }
  }   
 async init() {
      this.createElement();
      document.querySelector("canvas").style.filter = "blur(4px)";
      utils.turn_hud_off();
      document.querySelector(".game-container").appendChild(this.element);
      let this2 = this;
      this.esc = new KeyPressListener("Escape", () => {
          this.close();
      });
      this.enter = new KeyPressListener("Enter", () => {
        this2.check()
      });
      document.querySelector('.door1 button').addEventListener('click', function(){
        this2.check()
      })
  }
}
