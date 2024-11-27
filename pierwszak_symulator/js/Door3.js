class Door3{
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
          <span>Użyj strzałek do sterowania postacią</span><br/>
          <span>Musisz przetrwać 30s</span><br/>
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
      if(this.interval){
        clearInterval(this.interval)
      }
      if(this.timeout){
        clearTimeout(this.timeout)
      }
  }   
  game(){
    this.enter.unbind()
    let this2 = this;
    this.element.innerHTML = `
        <span class="timer"></span>
        <canvas id="gameCanvas"></canvas>
        <img id="heart" style="display: none;" src="images/Objects/heart.png">
      `;
      this2.timeout = setTimeout(() => {
        this2.close()
        const eventHandler = new OverworldEvent({type: "play_audio", audio: "win", volume: 0.1});
        eventHandler.init();
        const eventHandler2 = new OverworldEvent({
          type: "changeMap",
          map: "Room5",
          x: utils.withGrid(6),
          y: utils.withGrid(8),
          direction: "up"
        },);
        eventHandler2.init();
        clearInterval(this2.interval)
      }, 30*1000)
      const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");
      let sekundy = 30;
      document.querySelector('.timer').innerText = sekundy;
      this2.interval = setInterval(() => {
        sekundy--;
        document.querySelector('.timer').innerText = sekundy;
      },1000)
      canvas.width = 400;
      canvas.height = 400;
      var width = window.innerWidth
      var height = screen.height;
      if(width < 700){
        canvas.width = 200;
        canvas.height = 200;
      }

      // Player setup
      const player = {
          x: canvas.width / 2,
          y: canvas.height / 2,
          size: 14,
          color: "red",
          speed: 4
      };
      if(width < 700){
        player.size = 6
        player.speed = 2
      }
      // Obstacles setup
      const obstacles = [];
      let obstacleSize = 35;
      let obstacleSpeed = 6;
      let spawnInterval = 300; // New obstacle every second
      let lastSpawnTime = 0;
      if(width < 700){
        obstacleSize = 10;
        obstacleSpeed = 3;
      }

      // Input tracking
      const keys = {
          ArrowUp: false,
          ArrowDown: false,
          ArrowLeft: false,
          ArrowRight: false
      };
      // Update loop
      function update(deltaTime) {
          // Player movement
          if (keys.ArrowUp && player.y > 0) player.y -= player.speed;
          if (keys.ArrowDown && player.y < canvas.height - player.size) player.y += player.speed;
          if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
          if (keys.ArrowRight && player.x < canvas.width - player.size) player.x += player.speed;

          // Update obstacles
          for (let i = 0; i < obstacles.length; i++) {
              const obstacle = obstacles[i];

              // Update obstacle position
              if (obstacle.type === "vertical") {
                  obstacle.y += obstacle.speed;
                  if (obstacle.y > canvas.height) {
                      obstacles.splice(i, 1); // Remove if off-screen
                      i--;
                      continue;
                  }
              }
              if (obstacle.type === "horizontal") {
                obstacle.x += obstacle.speed;
            
                // Remove obstacle if it goes completely off-screen
                if (obstacle.x < -obstacle.size || obstacle.x > canvas.width) {
                    obstacles.splice(i, 1);
                    i--;
                }
            }

              // Check collisions
              if (
                  player.x < obstacle.x + obstacle.size &&
                  player.x + player.size > obstacle.x &&
                  player.y < obstacle.y + obstacle.size &&
                  player.y + player.size > obstacle.y
              ) {
                  endGame();
              }
          }

          // Spawn new obstacles
          if (performance.now() - lastSpawnTime > spawnInterval) {
              spawnObstacle();
              lastSpawnTime = performance.now();
          }
      }

      // Draw loop
      function draw() {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw player
          ctx.fillStyle = player.color;
          const img = document.getElementById("heart");
          if(width < 700){
            ctx.drawImage(img, player.x, player.y,14,14);
          }else{
            ctx.drawImage(img, player.x, player.y);
          }

          // Draw obstacles
          ctx.fillStyle = "white";
          for (const obstacle of obstacles) {
              ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
          }
      }

      // Spawn obstacle
      function spawnObstacle() {
          const isHorizontal = Math.random() < 0.5; // 50% chance for horizontal vs vertical
          if (isHorizontal) {
              const y = Math.random() * (canvas.height - obstacleSize);
              const speed = obstacleSpeed
              obstacles.push({ x: 0, y, size: obstacleSize, speed, type: "horizontal" });
          } else {
              const x = Math.random() * (canvas.width - obstacleSize);
              obstacles.push({ x, y: 0, size: obstacleSize, speed: obstacleSpeed, type: "vertical" });
          }
      }

      // End game
      function endGame() {
        clearTimeout(this2.timeout)
         this2.close()
         const eventHandler = new OverworldEvent({type: "play_audio", audio: "wrong", volume: 0.1});
          eventHandler.init();
          const eventHandler2 = new OverworldEvent({type: "textMessage", text: "Przegrana... Spróbuj jeszcze raz"});
          eventHandler2.init();
      }

      // Main game loop
      let lastTime = 0;
      function gameLoop(timestamp) {
          const deltaTime = timestamp - lastTime;
          lastTime = timestamp;

          update(deltaTime);
          draw();

          requestAnimationFrame(gameLoop);
      
}

// Input listeners
window.addEventListener("keydown", (e) => {
    if (keys[e.key] !== undefined) keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
    if (keys[e.key] !== undefined) keys[e.key] = false;
});

// Start the game
requestAnimationFrame(gameLoop);

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
        this.game();
      });
      document.querySelector(".door3 button").addEventListener("click", function(){
        this2.game()
      })
  }
}
