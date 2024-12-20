window.OverworldMaps.Room4 = {
  id: "Room4",
  lowerSrc: "images/maps/room4Lower.png",
  upperSrc: "images/maps/room3Upper.png",
  gameObjects: {
        placeholder: new Person({
            isPlayerControlled: false,
            src: "images/maps/blank.png",
            x: utils.withGrid(4),
            y: utils.withGrid(7),
            walkable: true,
        }),
      hero: new Person({
          isPlayerControlled: true, 
          useShadow: true,
          direction: "up",
          x: utils.withGrid(4),
          y: utils.withGrid(8),
      }),
      drzwi1: new Person({
        isPlayerControlled: false,
        src: "images/maps/blank.png",
        x: utils.withGrid(4),
        y: utils.withGrid(3),
        counter: 0,
        talking: [{events: [{type: "door3"},]},],
    }), 
    drzwi2: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(5),
      y: utils.withGrid(3),
      counter: 0,
      talking: [{events: [{type: "door3"},]},],
  }),
  },
  walls: {
    [utils.asGridCoord(4, 9)]: true,
    [utils.asGridCoord(5, 9)]: true,
    [utils.asGridCoord(2, 8)]: true,
    [utils.asGridCoord(3, 8)]: true,
    [utils.asGridCoord(6, 8)]: true,
    [utils.asGridCoord(7, 8)]: true,
    [utils.asGridCoord(1, 4)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(1, 7)]: true,
    [utils.asGridCoord(2, 3)]: true,
    [utils.asGridCoord(3, 3)]: true,
    [utils.asGridCoord(6, 3)]: true,
    [utils.asGridCoord(7, 3)]: true,
    [utils.asGridCoord(8, 7)]: true,
    [utils.asGridCoord(8, 6)]: true,
    [utils.asGridCoord(8, 5)]: true,
    [utils.asGridCoord(8, 4)]: true,
    [utils.asGridCoord(2, 7)]: true,
    [utils.asGridCoord(3, 7)]: true,
    [utils.asGridCoord(6, 7)]: true,
    [utils.asGridCoord(7, 7)]: true,
  },
  start_func: function(){
    const eventHandler5 = new OverworldEvent({type:"play_audio",audio:"music",volume:0.1});
  eventHandler5.init();
    const quest = new QuestLog({onComplete: () => {}});
    if(window.quests.find(x => x.id == "Quiz").progress == 0){
        quest.end_quest("Quiz");
    }     
    document.querySelector(".pokoj").innerText = "Komnata serca"
  }
};