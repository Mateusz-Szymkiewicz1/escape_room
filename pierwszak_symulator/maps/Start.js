window.OverworldMaps.Start = {
  id: "Start",
  lowerSrc: "images/maps/start.png",
  upperSrc: "images/maps/blank.png",
  gameObjects: {
      hero: new Person({
        src: "images/maps/blank.png",
          isPlayerControlled: false, 
          useShadow: true,
          direction: "up",
          x: utils.withGrid(6),
          y: utils.withGrid(6),
      }),
  },
};