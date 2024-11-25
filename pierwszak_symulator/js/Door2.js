class Door2{
  constructor({onComplete}) {
      this.onComplete = onComplete;
      this.questions = [
        {question: "lorem ipsum dolor sit?", a: "amet", b: "amen", c: "amer", correct: "a"},
        {question: "lorem ipsum dolor sit 2?", a: "amet", b: "amen", c: "amer", correct: "a"},
        {question: "lorem ipsum dolor sit 2?", a: "amet", b: "amen", c: "amer", correct: "a"},
        {question: "lorem ipsum dolor sit 2?", a: "amet", b: "amen", c: "amer", correct: "a"},
        {question: "lorem ipsum dolor sit 2?", a: "amet", b: "amen", c: "amer", correct: "a"},
      ]
      this.answers = []
      this.current_question = 0
  }
  createElement() {
      this.element = document.createElement("div");
      this.element.classList.add("book")
      this.element.classList.add("door")
      this.element.classList.add("door2")
      this.element.innerHTML = `
        <div>
          <h2>Quiz: </h2>
          <div class="question"></div>
          <button>Zatwierdź</button>
        </div>
      `;
  }
  showQuestion(){
    let question = this.questions[this.current_question];
    document.querySelector(".door2 div div").innerHTML = `
      <p>${question.question}</p>
      <input type="radio" value="a" name="radio"><span>${question.a}</span>
      <input type="radio" value="b" name="radio"><span>${question.b}</span>
      <input type="radio" value="c" name="radio"><span>${question.c}</span>
    `
  }
  close() {
      document.querySelector("canvas").style.filter = "none";
      utils.turn_hud_on();
      this.element.remove();
      this.esc.unbind();
      this.onComplete();
  }    
  check(){
    for(let i = 0; i < this.questions.length;i++){
      if(this.answers[i] != this.questions[i].correct){
        this.close()
        const eventHandler = new OverworldEvent({type: "play_audio", audio: "wrong", volume: 0.1});
        eventHandler.init();
        const eventHandler2 = new OverworldEvent({type: "textMessage", text: "Któraś z odpowiedzi nie była prawidłowa..."});
        eventHandler2.init();
        return;
      }
    }
    this.close()
    const eventHandler4 = new OverworldEvent({
      type: "textMessage",text: 'Znalazłeś "Klucz_3"!'
    },);
    eventHandler4.init();
    window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz_3"));
    const eventHandler = new OverworldEvent({type: "play_audio", audio: "win", volume: 0.1});
    eventHandler.init();
    const eventHandler2 = new OverworldEvent({
      type: "changeMap",
      map: "Room4",
      x: utils.withGrid(4),
      y: utils.withGrid(8),
      direction: "up"
    },);
    eventHandler2.init();
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
      this.showQuestion()
      document.querySelector(".door2 button").addEventListener("click", function(){
        if(!document.querySelector("input[name='radio']:checked")){
          return;
        }
        this2.answers.push(document.querySelector("input[name='radio']:checked").value)
        if(this2.current_question == this2.questions.length-1){
          this2.check()
          return;
        }
        this2.current_question++;
        this2.showQuestion()
      })
  }
}
