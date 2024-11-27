window.OverworldMaps.Room6 = {
  id: "Room6",
  lowerSrc: "images/maps/room6Lower.png",
  upperSrc: "images/maps/room6Upper.png",
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
        talking: [{events: [{type: "door4"},]},],
    }), 
    drzwi2: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(5),
      y: utils.withGrid(3),
      counter: 0,
      talking: [{events: [{type: "door4"},]},],
  }), 
  kot: new Person({
    isPlayerControlled: false,
    src: "images/maps/blank.png",
    x: utils.withGrid(2),
    y: utils.withGrid(3),
    counter: 0,
    talking: [{events: [{type: "cat"},]},],
}), 
  },
  walls: {
    [utils.asGridCoord(4, 9)]: true,
    [utils.asGridCoord(5, 9)]: true,
    [utils.asGridCoord(1, 8)]: true,
    [utils.asGridCoord(2, 8)]: true,
    [utils.asGridCoord(3, 8)]: true,
    [utils.asGridCoord(6, 8)]: true,
    [utils.asGridCoord(7, 8)]: true,
    [utils.asGridCoord(8, 8)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(1, 3)]: true,
    [utils.asGridCoord(2, 3)]: true,
    [utils.asGridCoord(3, 3)]: true,
    [utils.asGridCoord(6, 3)]: true,
    [utils.asGridCoord(7, 3)]: true,
    [utils.asGridCoord(8, 3)]: true,
    [utils.asGridCoord(9, 4)]: true,
    [utils.asGridCoord(9, 5)]: true,
    [utils.asGridCoord(9, 6)]: true,
    [utils.asGridCoord(9, 7)]: true,
  },
  start_func: function(){
    const quest = new QuestLog({onComplete: () => {}});
    if(window.quests.find(x => x.id == "Wspomnienia").progress == 0){
      quest.end_quest("Wspomnienia");
  }
  document.querySelector(".pokoj").innerText = "Sala cierpliwości"
  }
};