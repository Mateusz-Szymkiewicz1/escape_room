window.OverworldMaps.Room5 = {
  id: "Room5",
  lowerSrc: "images/maps/room5Lower.png",
  upperSrc: "images/maps/room5Upper.png",
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
          x: utils.withGrid(6),
          y: utils.withGrid(8),
      }),
      drzwi1: new Person({
        isPlayerControlled: false,
        src: "images/maps/blank.png",
        x: utils.withGrid(6),
        y: utils.withGrid(3),
        counter: 0,
        talking: [{events: [{type: "do_code", code: `if(!window.stol1 || !window.stol2 || !window.stol3 || !window.stol4){const eventHandler = new OverworldEvent({type: "textMessage",text:"Odpowiedz na wszystkie pytania"},);eventHandler.init();}else{if(window.stol1 == "amet" && window.stol2 == "amet" && window.stol3 == "amet" &&window.stol4 == "amet"){const eventHandler = new OverworldEvent({type: "changeMap",map: "Room6",x: utils.withGrid(4),y: utils.withGrid(8),direction: "up"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"door_open",volume:"0.1"},);eventHandler2.init();const eventHandler3 = new OverworldEvent({type: "play_audio",audio:"win",volume:"0.1"},);eventHandler3.init();const eventHandler4 = new OverworldEvent({type: "textMessage",text: 'Znalazłeś "Klucz_4"!'},);eventHandler4.init();window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz_4"));}else{const eventHandler = new OverworldEvent({type: "textMessage",text:"Nie wszystkie opdowiedzi są poprawne"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"wrong",volume:"0.1"},);eventHandler2.init();window.stol1="";window.stol2="";window.stol3="";window.stol4="";}}`},]},],
    }), 
    drzwi2: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(7),
      y: utils.withGrid(3),
      counter: 0,
      talking: [{events: [{type: "do_code", code: `if(!window.stol1 || !window.stol2 || !window.stol3 || !window.stol4){const eventHandler = new OverworldEvent({type: "textMessage",text:"Odpowiedz na wszystkie pytania"},);eventHandler.init();}else{if(window.stol1 == "amet" && window.stol2 == "amet" && window.stol3 == "amet" &&window.stol4 == "amet"){const eventHandler = new OverworldEvent({type: "changeMap",map: "Room6",x: utils.withGrid(5),y: utils.withGrid(8),direction: "up"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"door_open",volume:"0.1"},);eventHandler2.init();const eventHandler3 = new OverworldEvent({type: "play_audio",audio:"win",volume:"0.1"},);eventHandler3.init();}else{const eventHandler = new OverworldEvent({type: "textMessage",text:"Nie wszystkie opdowiedzi są poprawne"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"wrong",volume:"0.1"},);eventHandler2.init();window.stol1="";window.stol2="";window.stol3="";window.stol4="";}}`},]},],
  }), 
    stol1: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(3),
      y: utils.withGrid(5),
      counter: 0,
      talking: [{events: [
        {type: "question", text: "Lorem ipsum dolor sit...?", 
          options: [
            {text: "...amet", reaction: 'window.stol1 = "amet"', req: "!window.stol1"},
            {text: "...ameno", reaction: 'window.stol1 = "ameno"', req: "!window.stol1"},
            {text: "Zamknij"},
          ]
        },]},],
    }),
    stol2: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(5),
      y: utils.withGrid(5),
      counter: 0,
      talking: [{events: [
        {type: "question", text: "Lorem ipsum dolor sit...?", 
          options: [
            {text: "...amet", reaction: 'window.stol2 = "amet"', req: "!window.stol2"},
            {text: "...ameno", reaction: 'window.stol2 = "ameno"', req: "!window.stol2"},
            {text: "Zamknij"},
          ]
        },]},],
    }),
    stol3: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(8),
      y: utils.withGrid(5),
      counter: 0,
      talking: [{events: [
        {type: "question", text: "Lorem ipsum dolor sit...?", 
          options: [
            {text: "...amet", reaction: 'window.stol3 = "amet"', req: "!window.stol3"},
            {text: "...ameno", reaction: 'window.stol3 = "ameno"', req: "!window.stol3"},
            {text: "Zamknij"},
          ]
        },]},],
    }),
    stol4: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(10),
      y: utils.withGrid(5),
      counter: 0,
      talking: [{events: [
        {type: "question", text: "Lorem ipsum dolor sit...?", 
          options: [
            {text: "...amet", reaction: 'window.stol4 = "amet"', req: "!window.stol4"},
            {text: "...ameno", reaction: 'window.stol4 = "ameno"', req: "!window.stol4"},
            {text: "Zamknij"},
          ]
        },]},],
    }),
  },
  walls: {
    [utils.asGridCoord(6, 9)]: true,
    [utils.asGridCoord(7, 9)]: true,
    [utils.asGridCoord(2, 8)]: true,
    [utils.asGridCoord(3, 8)]: true,
    [utils.asGridCoord(4, 8)]: true,
    [utils.asGridCoord(5, 8)]: true,
    [utils.asGridCoord(8, 8)]: true,
    [utils.asGridCoord(9, 8)]: true,
    [utils.asGridCoord(10, 8)]: true,
    [utils.asGridCoord(11, 8)]: true,
    [utils.asGridCoord(1, 7)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(1, 4)]: true,
    [utils.asGridCoord(12, 4)]: true,
    [utils.asGridCoord(12, 5)]: true,
    [utils.asGridCoord(12, 6)]: true,
    [utils.asGridCoord(12, 7)]: true,
    [utils.asGridCoord(2, 3)]: true,
    [utils.asGridCoord(4, 3)]: true,
    [utils.asGridCoord(5, 3)]: true,
    [utils.asGridCoord(8, 3)]: true,
    [utils.asGridCoord(9, 3)]: true,
    [utils.asGridCoord(10, 3)]: true,
    [utils.asGridCoord(11, 3)]: true,
  },
  start_func: function(){
    const quest = new QuestLog({onComplete: () => {}});
    if(!window.quests.find(x => x.id == "Wspomnienia")){
        quest.add_quest({id: "Wspomnienia",desc: "Przypisz odpowiednie daty",});
    }
  }
};