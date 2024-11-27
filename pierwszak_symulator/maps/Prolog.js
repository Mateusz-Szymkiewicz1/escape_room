window.OverworldMaps.Prolog = {
  id: "Prolog",
  lowerSrc: "images/maps/prologLower.png",
  upperSrc: "images/maps/blank.png",
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
          y: utils.withGrid(7),
      }),
  },
  cutsceneSpaces: {
          [utils.asGridCoord(4, 2)]: [
          {
              events: [
                  {
                      type: "changeMap",
                      map: "Room1",
                      x: utils.withGrid(4),
                      y: utils.withGrid(17),
                      direction: "up"
                  },
              ]
          }
      ],
      [utils.asGridCoord(5, 2)]: [
        {
            events: [
                {
                    type: "changeMap",
                    map: "Room1",
                    x: utils.withGrid(5),
                    y: utils.withGrid(17),
                    direction: "up"
                },
            ]
        }
    ],
  },
  walls: {
     [utils.asGridCoord(1, 9)]: true,
     [utils.asGridCoord(2, 9)]: true,
     [utils.asGridCoord(3, 9)]: true,
     [utils.asGridCoord(4, 9)]: true,
     [utils.asGridCoord(5, 9)]: true,
     [utils.asGridCoord(6, 9)]: true,
     [utils.asGridCoord(7, 9)]: true,
     [utils.asGridCoord(8, 9)]: true,
     [utils.asGridCoord(0, 3)]: true,
     [utils.asGridCoord(0, 4)]: true,
     [utils.asGridCoord(0, 5)]: true,
     [utils.asGridCoord(0, 6)]: true,
     [utils.asGridCoord(0, 7)]: true,
     [utils.asGridCoord(0, 8)]: true,
     [utils.asGridCoord(1, 2)]: true,
     [utils.asGridCoord(2, 2)]: true,
     [utils.asGridCoord(3, 2)]: true,
     [utils.asGridCoord(6, 2)]: true,
     [utils.asGridCoord(7, 2)]: true,
     [utils.asGridCoord(8, 2)]: true,
     [utils.asGridCoord(9, 3)]: true,
     [utils.asGridCoord(9, 4)]: true,
     [utils.asGridCoord(9, 5)]: true,
     [utils.asGridCoord(9, 6)]: true,
     [utils.asGridCoord(9, 7)]: true,
     [utils.asGridCoord(9, 8)]: true,
     [utils.asGridCoord(1, 3)]: true,
     [utils.asGridCoord(1, 7)]: true,
     [utils.asGridCoord(1, 8)]: true,
     [utils.asGridCoord(2, 3)]: true,
     [utils.asGridCoord(8, 5)]: true,
     [utils.asGridCoord(8, 6)]: true,
     [utils.asGridCoord(8, 7)]: true,
     [utils.asGridCoord(4, 1)]: true,
     [utils.asGridCoord(5, 1)]: true,
  },
  start_func: () => {
    document.querySelector(".pokoj").innerText = "Komnata"
  }
};