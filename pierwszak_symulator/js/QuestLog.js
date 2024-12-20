class QuestLog{
    constructor({onComplete}){
        this.onComplete = onComplete;
    }
    createElement(){
        this.element = document.createElement("div");
        this.element.classList.add("QuestLog")
        this.element.innerHTML = `<h2>Questy</h2>`;
    }
    add_quest(quest){
        quest.progress = 0;
        if(!quest.reward){
            quest.reward = "";
        }
        if(!quest.exp){
            quest.exp = "";
        }
        window.quests.push(quest);
        const popup = document.createElement("div");
        popup.className = 'hud QuestPopup quest_added';
        const eventHandler = new OverworldEvent({type: "play_audio", audio: "quest", volume: 0.2});
        eventHandler.init();
        popup.innerHTML = `<h2>Nowy Quest!</h2><span>${quest.desc}</span>`;
        if(document.querySelector(".QuestPopup")){
            popup.style.bottom = "27vh";
        }
        document.querySelector(".game-container").appendChild(popup);
        const timeout = setTimeout(function(){
            popup.style.opacity = "0";
            popup.style.pointerEvents = "none";
        }, 5000)
        const timeout2 = setTimeout(function(){
            popup.remove();
            if(document.querySelector(".QuestPopup")){
                document.querySelector(".QuestPopup").style.bottom = "6px";
            }
        }, 5100);
        popup.addEventListener("click", function(){
            clearTimeout(timeout);
            clearTimeout(timeout2);
            popup.style.opacity = "0";
            popup.style.pointerEvents = "none";
            setTimeout(function(){
                popup.remove();
                if(document.querySelector(".QuestPopup")){
                document.querySelector(".QuestPopup").style.bottom = "6px";
                }
            }, 200)
        })
    }  
    end_quest(id){
        let quest = {};
        window.quests.forEach(e => {
            if(e.id == id){
                quest = e;
                e.progress = 1;
            }
        })
        const popup = document.createElement("div");
        popup.className = 'hud QuestPopup quest_ended';
        const eventHandler = new OverworldEvent({type: "play_audio", audio: "quest_completed", volume: 0.2});
        eventHandler.init();
        if(quest.reward){
            popup.innerHTML = `<h2>Wykonano Questa!</h2><span>${quest.desc}<br />Nagroda : ${quest.reward}</span>`;
        }else{
            popup.innerHTML = `<h2>Wykonano Questa!</h2><span>${quest.desc}</span>`;
        }
        if(document.querySelector(".QuestPopup")){
            popup.style.bottom = "60px";
        }
        document.querySelector(".game-container").appendChild(popup);
        const timeout = setTimeout(function(){
            popup.style.opacity = "0";
            popup.style.pointerEvents = "none";
        }, 5000)
        const timeout2 = setTimeout(function(){
            popup.remove();
            if(document.querySelector(".QuestPopup")){
                document.querySelector(".QuestPopup").style.bottom = "6px";
            }
        }, 5100);
        popup.addEventListener("click", function(){
            clearTimeout(timeout);
            clearTimeout(timeout2);
            popup.style.opacity = "0";
            popup.style.pointerEvents = "none";
            setTimeout(function(){
                popup.remove();
                if(document.querySelector(".QuestPopup")){
                    document.querySelector(".QuestPopup").style.bottom = "6px";
                }
            }, 200)
        })
    }  
    check(){
        this.element = document.querySelector(".QuestLog");
        this.element.innerHTML = `<h2>Questy</h2>`;
        let counter = 0;
        window.quests.forEach(e => {
            let reward = "";
            let exp = ""
            if(e.reward){
                reward = e.reward+"G";
            }
            if(e.exp){
                exp = e.exp+"EXP";
            }
            if(e.progress == 0){
                counter++;
                if(e.deletable){
                    this.element.innerHTML = this.element.innerHTML+`<div class="quest"><h3><span><span class="id">${e.id}</span></span></h3><span>${e.desc}</span></div>`;
                }else{
                    this.element.innerHTML = this.element.innerHTML+`<div class="quest"><h3><span><span class="id">${e.id}</span></h3><span>${e.desc}</span></div>`;
                }
            }
        })
        if(counter == 0){
            this.element.innerHTML = this.element.innerHTML+`<h4>Pusto ;(</h4>`;
        }
    }
    close() {
        document.querySelector("canvas").style.filter = "none";
        utils.turn_hud_on();
        document.querySelector(".quest_button").innerText = '!';
        var old_element = document.querySelector(".quest_button");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        document.querySelector(".quest_button").addEventListener("click", function(){
           if(!window.Overworld.map.isCutscenePlaying){
                window.Overworld.map.startCutscene([{type: "questlog"}]);
           }
        })
       this.element.remove();
       this.esc.unbind();
       this.q.unbind();
       this.onComplete();
    }     
   async init(container) {
       if(document.querySelector(".desc")){
            document.querySelector(".desc").remove();
        }
        document.querySelector(".quest_button").innerText = 'x';
        document.querySelector(".quest_button").style.paddingTop = "0px";
        document.querySelector(".quest_button").style.height = "21px";
        let this2 = this;
        this.createElement();
        document.querySelector("canvas").style.filter = "blur(4px)";
        utils.turn_hud_off();
        container.appendChild(this.element);
        this.element.setAttribute("tabindex", "0");
         this.element.focus();
        this.check();
        utils.wait(200);
        this.esc = new KeyPressListener("Escape", () => {
            this2.close();
        });
        this.q = new KeyPressListener("KeyQ", () => {
           this2.close();
        });
        var old_element = document.querySelector(".quest_button");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        document.querySelector(".quest_button").addEventListener("click", function quest_close(){
           this2.close();
        })
    }
}