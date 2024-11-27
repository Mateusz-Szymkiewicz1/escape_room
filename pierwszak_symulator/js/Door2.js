class Door2{
  constructor({onComplete}) {
      this.onComplete = onComplete;
      this.questions = [
        {question: "W jakim miesiącu się oświadczyłeś?", a: "lipiec", b: "sierpień", c: "czerwiec", correct: "c"},
        {question: "Jaki smak tortu dostałeś od Oliwii?", a: "kinder schokobons", b: "kinder bueno", c: "kinder country", correct: "a"},
        {question: "Co jako pierwsze gotowałeś z Oliwą?", a: "makaron z kurczakiem", b: "makaron ze szpinakiem", c: "makaron ze szpinakiem i kurczakiem", correct: "c"},
        {question: "Co Oliwia zawsze bierze w restauracji?", a: "herbatę", b: "wodę gazowaną", c: "lemoniadę", correct: "a"},
        {question: "W którym roku poznałeś Oliwię?", a: "2018", b: "2017", c: "2019", correct: "c"},
        {question: "Jakie zwierzątko jest 'związane' z wami?", a: "kot", b: "pingwin", c: "pies", correct: "b"},
        {question: "Kiedy zrobiliście pierwsze wspólne zdjęcie z Oliwią?", a: "grudzień 2023", b: "maj 2019", c: "sierpień 2022", correct: "c"},
        {question: "Gdzie się zaczęła wasza bliższa relacja z Oliwią?", a: "na golfie", b: "na Targowicy", c: "pod sklepem", correct: "a"},
        {question: "Gdzie był wasz pierwszy wyjazd?", a: "Kraków", b: "Zakopane", c: "Rzeszów", correct: "b"},
        {question: "Jaki pierwszy film obejrzeliście wspólnie?", a: "Legion samobójców", b: "Więzień Labiryntu", c: "Listy do M", correct: "c"},
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
      <input type="radio" value="a" name="radio"><span>${question.a}</span><br/>
      <input type="radio" value="b" name="radio"><span>${question.b}</span><br/>
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
      type: "textMessage",text: 'Znalazłeś "Klucz Wspomnień"!'
    },);
    eventHandler4.init();
    window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz Wspomnień"));
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
