class Progress {
    constructor() {
        this.mapId = "Prolog";
        this.heroInventory = [];
        this.quests = [];
        this.gold = 0;
        this.saveFileKey = "saveFile";
        this.buffs = [];
    }
    save() {
        this.save_relations();
        this.heroX = window.Overworld.map.gameObjects.hero.x;
        while(this.heroX%16 != 0){
            this.heroX--;
        }
        this.heroY = window.Overworld.map.gameObjects.hero.y;
        while(this.heroY%16 != 0){
            this.heroY--;
        }
        this.heroDirection = window.Overworld.map.gameObjects.hero.direction;
        this.buffs = [];
        if(document.querySelector(".buff")){
            document.querySelectorAll(".buff").forEach(el => {
                let obj = {type: el.dataset.type,time: el.dataset.time,};
                this.buffs.push(obj);
            })
        }
        window.localStorage.setItem(this.saveFileKey, JSON.stringify({
            mapId: this.mapId,
            startingHeroX: this.heroX,
            startingHeroY: this.heroY,
            startingHeroDirection: this.heroDirection,
            heroInventory: window.heroInventory,
            health: window.health,
            exp: window.exp,
            current_level: window.current_level,
            quests: window.quests,
            gold: window.gold,
            buffs: this.buffs,
            fights: window.fights,
        }, ["mapId","startingHeroX","startingHeroY","startingHeroDirection","heroInventory","id","deleted","amount","tile","src","health","exp","current_level", "quests", "desc", "progress", "deletable", "gold", "type", "time","buffs", "fights", "name", "minutes"]))
    }
    getSaveFile() {
        const file = window.localStorage.getItem(this.saveFileKey);
        return file ? JSON.parse(file) : null
    }
    save_preferences(){
        window.localStorage.setItem("preferences", JSON.stringify({
               scale: window.scale,
               zoom: window.zoom,
               website_color: window.website_color,
               game_color: window.game_color,
                sfx_volume: window.sfx_volume,
             music_volume: window.music_volume,
             sans_mode: window.sans_mode,
        }))
    }
    save_relations(){
        window.localStorage.setItem("relations", JSON.stringify({
               relations: window.relations_obj
        }))
    } 
    load_relations(){
        const file = window.localStorage.getItem("relations");
        const file2 = JSON.parse(file);
        if(file2){
           window.relations_obj = file2.relations; 
        }
    } 
    load() {
        const file = this.getSaveFile();
        if(file){
            this.mapId = file.mapId;
            this.startingHeroX = file.startingHeroX;
            this.startingHeroY = file.startingHeroY;
            this.startingHeroDirection = file.startingHeroDirection;
            this.heroInventory = file.heroInventory;
            this.health = file.health;
            this.exp = file.exp;
            this.current_level = file.current_level;
            this.quests = file.quests;
            this.gold = file.gold;
            this.buffs = file.buffs;
            this.fights = file.fights;
        }
    }
}