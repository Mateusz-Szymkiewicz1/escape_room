class TitleScreen {
    constructor({progress}){
        this.progress = progress;
    }
    getOptions(resolve) {
        const safeFile = this.progress.getSaveFile();
        return [
            {
                label: "Nowa gra",
                description: "Rozpocznij grę",
                handler: () => {
                    if(window.localStorage.getItem("saveFile")){
                        const eventHandler = new OverworldEvent({
                            type: "decision",
                            handler: () => {
                                this.close();
                                resolve();
                            }
                        });
                        eventHandler.init();
                    }else{
                        this.close();
                        resolve();
                    }
                }
            },
            safeFile ? {
                label: "Kontynuuj grę",
                description: "Wróć do ostaniego zapisu",
                handler: () => {
                    const eventHandler = new OverworldEvent({type: "play_audio", audio: "start", volume: 0.2});
                    eventHandler.init();
                    this.close();
                    resolve(safeFile);
                }
            } : null
        ].filter(v => v);
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TitleScreen");
        this.element.innerHTML = (`
      <h1>Kocia Zemsta</h1>
    `);
    }
    close() {
        this.keyboardMenu.end();
        this.element.remove();
    }
    init(container) {
        return new Promise(resolve => {
            this.createElement();
            container.appendChild(this.element);
            this.keyboardMenu = new KeyboardMenu();
            this.keyboardMenu.init(this.element);
            this.keyboardMenu.setOptions(this.getOptions(resolve))
        })
    }
}