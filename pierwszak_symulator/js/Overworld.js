class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }
    startGameLoop() {
        const step = () => {
            window.Overworld = this;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const cameraPerson = this.map.gameObjects.hero;
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })
            this.map.drawLowerImage(this.ctx, cameraPerson);
            Object.values(this.map.gameObjects).sort((a, b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })
            this.map.drawUpperImage(this.ctx, cameraPerson);
            if (!this.map.isPaused) {
                requestAnimationFrame(() => {
                    step();
                })
            }
        }
        step();
    }
    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene()
        })
        new KeyPressListener("Escape", () => {
            if (!this.map.isCutscenePlaying) {
                this.map.startCutscene([{type: "pause"}]);
            }
        })
        new KeyPressListener("KeyE", () => {
            if (!this.map.isCutscenePlaying) {
                this.map.startCutscene([{type: "inventory",}]);
            }
        })
        new KeyPressListener("KeyJ", () => {
            if (!this.map.isCutscenePlaying) {
                const eventHandler = new OverworldEvent({type: "punch", hand: "right", who: "hero", direction: window.map.gameObjects["hero"].direction});
                eventHandler.init();
            }
        })
        new KeyPressListener("KeyH", () => {
            if (!this.map.isCutscenePlaying) {
                const eventHandler = new OverworldEvent({type: "punch", hand: "left", who: "hero", direction: window.map.gameObjects["hero"].direction});
                eventHandler.init();
            }
        })
        new KeyPressListener("KeyB", () => {
            if (!this.map.isCutscenePlaying) {
                const eventHandler = new OverworldEvent({type: "duck", who: "hero", direction: window.map.gameObjects["hero"].direction});
                eventHandler.init();
            }
        })
    }
    bindHeroPositionCheck() {
        document.addEventListener("PersonWalkingComplete", e => {
            if (e.detail.whoId === "hero") {
                this.map.checkForFootstepCutscene();
            }
        })
    }
    startMap(mapConfig, heroInitialState = null) {
        this.map = new OverworldMap(mapConfig);
        window.map = this.map;
        this.map.overworld = this;
        this.map.mountObjects();
        if(heroInitialState){
            const {hero} = this.map.gameObjects;
            this.map.removeWall(hero.x, hero.y);
            hero.x = heroInitialState.x;
            hero.y = heroInitialState.y;
            hero.direction = heroInitialState.direction;
            this.map.addWall(hero.x, hero.y);
        }
        this.progress.mapId = mapConfig.id;
        if(window.OverworldMaps[this.progress.mapId].start_func){
            window.OverworldMaps[this.progress.mapId].start_func();
        }
        this.progress.startingHeroX = this.map.gameObjects.hero.x;
        this.progress.startingHeroY = this.map.gameObjects.hero.y;
        this.progress.startingHeroDirection = this.map.gameObjects.hero.direction;
    }
    async init() {
        window.page_hover = true;
        const this2 = this;
        document.querySelector(".game-container").addEventListener("contextmenu", function(event){
            event.preventDefault();
        });
        this.progress = new Progress();
        this.titleScreen = new TitleScreen({
            progress: this.progress
        });
        const useSaveFile = await this.titleScreen.init(document.querySelector(".game-container"));
        let initialHeroState = null;
        if(useSaveFile){
            this.progress.load();
            initialHeroState = {
                x: this.progress.startingHeroX,
                y: this.progress.startingHeroY,
                direction: this.progress.startingHeroDirection,
            }
            window.heroInventory = this.progress.heroInventory;
            window.current_level = this.progress.current_level;
            window.quests = this.progress.quests;
            window.relations = new Relations();
            this.progress.load_relations();
            window.relations.load_relations();
            window.heroInventory.forEach(e =>{
                window.heroInventory[window.heroInventory.indexOf(e)] = window.GameObjects.find(x => x.id === e.id);
                if(e.deleted){
                    window.GameObjects.find(x => x.id === e.id).deleted = true;
                }
                if(e.amount || e.amount == 0){
                    window.GameObjects.find(x => x.id === e.id).amount = e.amount;
                }
                if(e.tile){
                    window.GameObjects.find(x => x.id === e.id).tile = e.tile;
                }
            });
            var StartMapPromise = new Promise(function(resolve) {
                const sceneTransition = new SceneTransition();
                sceneTransition.init(document.querySelector(".game-container"), () => {
                    this2.startMap(window.OverworldMaps[this2.progress.mapId], initialHeroState);
                    sceneTransition.fadeOut();
                    resolve();
                })
            });
            const quest_button = document.createElement("div");
            quest_button.className = 'hud quest_button';
            quest_button.innerText = "!";
            document.querySelector(".game-container").append(quest_button);
            quest_button.addEventListener("click", function(){
                if(!window.map.isCutscenePlaying){
                    window.map.startCutscene([{type: "questlog"}]);
                }
            })
            const quest_press = new KeyPressListener("KeyQ", () => {
                if(!window.map.isCutscenePlaying && !document.querySelector(".QuestLog")){
                    window.map.startCutscene([{type: "questlog"}]);
                }
            });
        } else {
            if(window.localStorage.getItem("saveFile") != null){
                window.localStorage.removeItem("saveFile");
            }
            window.heroInventory = [];
            window.quests = [];
            window.relations = new Relations();
            relations.init();
            var StartMapPromise = new Promise(function(resolve) {
                window.sceneTransition = new SceneTransition();
                sceneTransition.init(document.querySelector(".game-container"), () => {
                    this2.startMap(window.OverworldMaps.Prolog, initialHeroState);
                    resolve();
                })
            });
            StartMapPromise.then(async function(){
                await this2.map.startCutscene([
                    {type: "textMessage",text: "..."},
                    {type: "do_code",code: `window.sceneTransition.fadeOut();delete window.sceneTransition`},
                    {type: "textMessage",text: "Użyj strzałek/AWSD aby się poruszać"},
                    {type: "textMessage",text: "oraz Enter do interakcji"},
                ])
            }).then(function(){
                const quest = new QuestLog({onComplete: () => {}});
                quest.add_quest({id: "Ucieczka",desc: "Wyjście musi być gdzieś na wprost. duh.",});
                const quest_button = document.createElement("div");
                quest_button.className = 'hud quest_button';
                quest_button.innerText = "!";
                document.querySelector(".game-container").append(quest_button);
                quest_button.addEventListener("click", function(){
                    if(!window.map.isCutscenePlaying){
                        window.map.startCutscene([{type: "questlog"}]);
                    }
                })
                const quest_press = new KeyPressListener("KeyQ", () => {
                    if(!window.map.isCutscenePlaying && !document.querySelector(".QuestLog")){
                        window.map.startCutscene([{type: "questlog"}]);
                    }
                });
            })
        }
        StartMapPromise.then(function(value){
            this2.bindActionInput();
            this2.bindHeroPositionCheck();
            this2.directionInput = new DirectionInput();
            this2.directionInput.init();
            this2.startGameLoop();
            document.addEventListener('mouseleave', e=>{
                if(!window.map.isPaused){
                    if (!window.map.isCutscenePlaying) {
                        window.map.startCutscene([{type: "pause"}]);
                    }
                    window.page_hover = false;
                }
            })
            document.addEventListener('mouseenter', e=>{
                window.page_hover = true;
            })
        })
    }
}