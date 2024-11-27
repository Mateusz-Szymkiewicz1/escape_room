class Cat{
  constructor({onComplete}) {
      this.onComplete = onComplete;
  }
  createElement() {
      this.element = document.createElement("div");
      this.element.classList.add("book")
      this.element.classList.add("door")
      this.element.classList.add("door3")
      this.element.innerHTML = `
        <div>
          <h2>Gra</h2>
          <span>Kot ukradł ostatni klucz!</span><br/>
          <span>Użyj strzałek do sterowania postacią</span><br/>
          <button>Rozpocznij</button>
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
  gra(){
    this.enter.unbind()
    let this2 = this;
    this.element.innerHTML = `
        <canvas id="gameCanvas"></canvas>
        <img id="heart" style="display: none;" src="images/Objects/heart.png">
      `;  
      const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;
        var width = window.innerWidth
      var height = screen.height;
      if(width < 700){
        canvas.width = 200;
        canvas.height = 200;
      }
        let cat = {
            x: 300,
            y: 200,
            width: 50,
            height: 50,
            speed: 3.90
        };
        if(width < 700){
          cat.width = 30
          cat.height = 30
          cat.speed = 2.40
        }
        let player = {
            x: 50,
            y: 50,
            width: 20,
            height: 20,
            speed: 5.25
        };
        if(width < 700){
          player.width = 10
          player.height = 10
          player.speed = 2.625
        }

        const keys = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false
        };

        const catImage = new Image();
        catImage.src = 'images/Objects/cat.png'; // A placeholder cat image

        function drawCat() {
            ctx.drawImage(catImage, cat.x, cat.y, cat.width, cat.height);
        }

        function drawPlayer() {
          const img = document.getElementById("heart");
          if(width < 700){
            ctx.drawImage(img, player.x, player.y,12,12);
          }else{
            ctx.drawImage(img, player.x, player.y,20,20);
          }
        }

        function movePlayer() {
            if (keys.ArrowUp) player.y -= player.speed;
            if (keys.ArrowDown) player.y += player.speed;
            if (keys.ArrowLeft) player.x -= player.speed;
            if (keys.ArrowRight) player.x += player.speed;

            // Prevent player from leaving canvas
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
        }

        function updateCatPosition() {
    const dx = (player.x + player.width / 2) - (cat.x + cat.width / 2);
    const dy = (player.y + player.height / 2) - (cat.y + cat.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    let radius = 150
    if(width < 700){
      radius = 50
    }
    if (distance < radius) {
        const angle = Math.atan2(dy, dx);
        cat.x -= Math.cos(angle) * cat.speed;
        cat.y -= Math.sin(angle) * cat.speed;
    }

    // Wrap around when cat goes out of bounds
    if (cat.x < 0) cat.x = canvas.width/2;
    if (cat.x > canvas.width - cat.width) cat.x = canvas.width/2;
    if (cat.y < 0) cat.y = canvas.height/2;
    if (cat.y > canvas.height - cat.height) cat.y = canvas.height/2;
}


        function checkWin() {
            const dx = (player.x + player.width / 2) - (cat.x + cat.width / 2);
            const dy = (player.y + player.height / 2) - (cat.y + cat.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 20) {
                this2.close()
                const eventHandler4 = new OverworldEvent({
                  type: "textMessage",text: 'Znalazłeś "Klucz Ostateczny"!'
                },);
                eventHandler4.init();
                window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz Ostateczny"));
                const eventHandler = new OverworldEvent({type: "play_audio", audio: "win", volume: 0.1});
                eventHandler.init();
            }
        }

        document.addEventListener('keydown', (event) => {
            if (keys.hasOwnProperty(event.key)) keys[event.key] = true;
        });

        document.addEventListener('keyup', (event) => {
            if (keys.hasOwnProperty(event.key)) keys[event.key] = false;
        });
        function drawBackground() {
          ctx.fillStyle = '#580818';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        function gameLoop() {
          drawBackground();
            drawCat();
            drawPlayer();
            movePlayer();
            updateCatPosition();
            checkWin();
            requestAnimationFrame(gameLoop);
        }

        catImage.onload = () => {
            gameLoop();
        };
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
      this.enter = new KeyPressListener("Enter", () => {
        this.gra();
      });
      document.querySelector('.door3 button').addEventListener('click', function(){
        this2.gra();
      })
  }
}
