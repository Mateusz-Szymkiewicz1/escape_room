class OverworldEvent{
    constructor(config){
        for(let el in config){
            this[el] = config[el];
        }
    }
    stand(resolve){
        const who = window.map.gameObjects[this.who];
        if(who){
            who.startBehavior({}, {
                type: "stand",
                direction: this.direction,
                time: this.time
            })
            const completeHandler = e => {
                if (e.detail.whoId === this.who) {
                    document.removeEventListener("PersonStandComplete", completeHandler);
                    resolve();
                }
            }
            document.addEventListener("PersonStandComplete", completeHandler)
        }
    }
    walk(resolve){
        const who = window.map.gameObjects[this.who];
        who.startBehavior({}, {
            type: "walk",
            direction: this.direction,
            retry: true
        })
        const completeHandler = e => {
            if(e.detail.whoId === this.who){
                document.removeEventListener("PersonWalkingComplete", completeHandler);
                resolve();
            }
        }
        document.addEventListener("PersonWalkingComplete", completeHandler);
    }
    punch(resolve){
        let who = window.map.gameObjects[this.who];
        if(!who) return
        who.hand = this.hand;
        if(this.who == 'opps'){
            who.direction = 'left'
            this.direction = 'left'
            who.hand = 'left'
            this.hand = 'left'
        }
        if(window.timeout && who.id == 'hero'){
            return;
        }
        const target = utils.nextPosition(who.x, who.y, who.direction);
        const match = Object.values(window.map.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${target.x},${target.y}`
        });
        if(window.current_fight && match.id != 'hero'){
            if(!window.current_fight.original_health){
                window.current_fight.original_health = window.current_fight.health
            }
            const eventHandler = new OverworldEvent({type: "play_audio",audio: "hitting", volume: 0.45, clone: true});
            eventHandler.init();
            window.current_fight.health -= 5;
            window.OverworldMaps.Schron.gameObjects.opps.startBehavior({}, {
                type: "get_hit",
            })
            if(window.current_fight.health < 1){
                window.map.startCutscene([{type: "end_fight"}]);
            }
        }
        who.startBehavior({}, {
            type: "punch",
            direction: this.direction,
            hand: this.hand
        })
        const completeHandler = e => {
            if(e.detail.whoId === this.who){
                document.removeEventListener("PersonPunchingComplete", completeHandler);
                resolve();
            }
        }
        document.addEventListener("PersonPunchingComplete", completeHandler);
        window.timeout = setTimeout(function(){
            utils.emitEvent("PersonPunchingComplete", {whoId: this.id});
            delete window.timeout;
        }, 500)
    }
    duck(resolve){
        const who = window.map.gameObjects[this.who];
        who.startBehavior({}, {
            type: "duck",
            direction: this.direction,
        })
        const completeHandler = e => {
            console.log(e)
            if(e.detail.whoId === this.who){
                document.removeEventListener("PersonDuckingComplete", completeHandler);
                resolve();
            }
        }
        document.addEventListener("PersonDuckingComplete", completeHandler);
    }
    textMessage(resolve){
        if (this.faceHero) {
            const obj = window.map.gameObjects[this.faceHero];
            obj.direction = utils.oppositeDirection(window.map.gameObjects["hero"].direction);
        }
        if(!this.who){
            this.who = null;
        }
        const message = new TextMessage({
            text: this.text,
            npc: this.who,
            onComplete: () => resolve()
        })
        message.init(document.querySelector(".game-container"));
        if (this.who) {
            const obj = window.map.gameObjects[this.who];
            if(obj.pickUp) {
                obj.talking = [];
                if(obj.id == "Klucz_2"){
                    window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz Labiryntu"));
                }else{
                    window.heroInventory.push(window.GameObjects.find(x=> x.id === obj.id));
                }
            }
        }
    }
    question(resolve) {
        if(this.faceHero){
            const obj = window.map.gameObjects[this.faceHero];
            obj.direction = utils.oppositeDirection(window.map.gameObjects["hero"].direction);
        }
        if(!this.who){
            this.who = null;
        }
        const question = new Question({
            text: this.text,
            npc: this.who,
            options: this.options,
            onComplete: async () => resolve()
        })
        question.init(document.querySelector(".game-container"));
    } 
    talk(resolve){
        let this2 = this;
        let has_events = false;
        let randomElement;
        let array = window.NPCs.find(x=> x.id === this.who).talking;
        randomElement = array[Math.floor(Math.random() * array.length)];
        (async function(){
            for await(const ev of randomElement){
                if(ev.once){
                    let index = window.NPCs.find(x=> x.id === this2.who).talking.indexOf(randomElement);
                    window.relations.add_said(this2.who, index)
                }
                const eventHandler = new OverworldEvent(ev);
                await eventHandler.init();
            }})().then(function(){
                resolve();
            });
    } 
    changeMap(resolve) {
        const sceneTransition = new SceneTransition();
        sceneTransition.init(document.querySelector(".game-container"), () => {
            window.map.overworld.startMap(window.OverworldMaps[this.map], {
                x: this.x,
                y: this.y,
                direction: this.direction
            });
            resolve();
            sceneTransition.fadeOut();
        })
    }
    open(resolve) {
        let who = window.map.gameObjects[this.who];
        who.src = this.src;
        if (who.x != window.map.gameObjects["hero"].x || who.y != window.map.gameObjects["hero"].y) {
            if (who.counter === 0) {
                delete window.map.walls[`${who.x},${who.y}`];
            }
            if (who.counter === 1) {
                window.map.walls[`${who.x},${who.y}`] = true;
            }
            who.sprite = new Sprite({
                gameObject: who,
                src: this.src,
            });
        }
        resolve();
    }
    do_code(resolve) {
        eval(this.code);
        resolve();
    }
    pause(resolve) {
        window.map.isPaused = true;
        const menu = new PauseMenu({
            progress: window.map.overworld.progress,
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        menu.init(document.querySelector(".game-container"));
    }
    inventory(resolve){
            window.map.isPaused = true;
            const inventory = new Inventory({
                onComplete: () => {
                    resolve();
                    window.map.isPaused = false;
                    window.map.overworld.startGameLoop();
                }
            }, false);
            inventory.init(document.querySelector(".game-container"));
    } 
   questlog(resolve){
        window.map.isPaused = true;
        const questlog = new QuestLog({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        questlog.init(document.querySelector(".game-container"));
    }    
    book(resolve){
        window.map.isPaused = true;
        const book = new Book({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        }, this.book_id);
        book.init();
    } 
    door1(resolve){
        window.map.isPaused = true;
        const door1 = new Door1({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        door1.init();
    } 
    door2(resolve){
        window.map.isPaused = true;
        const door2 = new Door2({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        door2.init();
    }
    door3(resolve){
        window.map.isPaused = true;
        const door3 = new Door3({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        door3.init();
    }
    door4(resolve){
        window.map.isPaused = true;
        const door4 = new Door4({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        door4.init();
    }
    cat(resolve){
        if(window.heroInventory.find(x => x.id == "Klucz Ostateczny")){
            resolve()
            return;
        }
        window.map.isPaused = true;
        const cat = new Cat({
            onComplete: () => {
                resolve();
                window.map.isPaused = false;
                window.map.overworld.startGameLoop();
            }
        });
        cat.init();
    } 
    play_audio(resolve){
        let audio = undefined;
        if(this.clone){
            audio = document.querySelector("#audio_"+this.audio).cloneNode(true)
        }else{
            audio = document.querySelector("#audio_"+this.audio);
        }
        if(this.speed){
            audio.playbackRate = this.speed;
        } 
        audio.volume = this.volume*window.sfx_volume;
        audio.play();
        resolve();
    } 
    decision(resolve){
        const decision = new DecisionBox({
            onComplete: () => {
                resolve();
                this.handler();
            }
        });
        decision.init(document.querySelector(".game-container"));
    }
    init() {
        return new Promise(resolve => {
            this[this.type](resolve)
        })
    }
}
