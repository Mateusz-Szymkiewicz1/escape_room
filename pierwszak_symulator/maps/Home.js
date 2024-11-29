window.OverworldMaps.Home = {
  id: "Home",
  lowerSrc: "images/maps/homeLower.png",
  upperSrc: "images/maps/homeUpper.png",
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
          direction: "right",
          src: "images/characters/people/hero2.png",
          x: utils.withGrid(12),
          y: utils.withGrid(13),
      }),
      cat: new Person({
        src: "images/characters/people/kitty.png",
        x: utils.withGrid(12),
        y: utils.withGrid(14),
        movePixels: true,
        counter: 0,
        talking: [
          {
            events: [
              {type: "pet"}
            ]
          }
        ]
    }),
    oliwia: new Person({
      src: "images/characters/people/nahh.png",
      x: utils.withGrid(13),
      y: utils.withGrid(14),
      counter: 0,
      direction: "left",
      talking: [
        {
          events: [
            {type: "pet"}
          ]
        }
      ]
  }),
  },
  walls: {
    [utils.asGridCoord(11,15)]: true,
    [utils.asGridCoord(11,13)]: true,
    [utils.asGridCoord(12,12)]: true,
    [utils.asGridCoord(13,12)]: true,
    [utils.asGridCoord(14,12)]: true,
    [utils.asGridCoord(15,12)]: true,
    [utils.asGridCoord(17,12)]: true,
    [utils.asGridCoord(18,13)]: true,
    [utils.asGridCoord(18,14)]: true,
    [utils.asGridCoord(17,15)]: true,
    [utils.asGridCoord(12,16)]: true,
    [utils.asGridCoord(13,16)]: true,
    [utils.asGridCoord(14,16)]: true,
    [utils.asGridCoord(15,16)]: true,
    [utils.asGridCoord(16,16)]: true,
    [utils.asGridCoord(16,11)]: true,
  },
  start_func: function(){
    const quest = new QuestLog({onComplete: () => {}});
    if(window.quests.find(x => x.id == "Ucieczka").progress == 0){
      quest.end_quest("Ucieczka");
  }
  document.querySelector(".pokoj").innerText = "Połaniec"
  }
};