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
        talking: [{events: [{type: "do_code", code: `if(!window.stol1 || !window.stol2 || !window.stol3 || !window.stol4){const eventHandler = new OverworldEvent({type: "textMessage",text:"Odpowiedz na wszystkie pytania"},);eventHandler.init();}else{if(window.stol1 == "wypadek" && window.stol2 == "sam" && window.stol3 == "dzieci" &&window.stol4 == "mess"){const eventHandler = new OverworldEvent({type: "changeMap",map: "Room6",x: utils.withGrid(4),y: utils.withGrid(8),direction: "up"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"door_open",volume:"0.1"},);eventHandler2.init();const eventHandler3 = new OverworldEvent({type: "play_audio",audio:"win",volume:"0.1"},);eventHandler3.init();const eventHandler4 = new OverworldEvent({type: "textMessage",text: 'Znalazłeś "Klucz Pamięci"!'},);eventHandler4.init();window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz Pamięci"));}else{const eventHandler = new OverworldEvent({type: "textMessage",text:"Nie wszystkie opdowiedzi są poprawne"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"wrong",volume:"0.1"},);eventHandler2.init();window.stol1="";window.stol2="";window.stol3="";window.stol4="";}}`},]},],
    }), 
    drzwi2: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(7),
      y: utils.withGrid(3),
      counter: 0,
      talking: [{events: [{type: "do_code", code: `if(!window.stol1 || !window.stol2 || !window.stol3 || !window.stol4){const eventHandler = new OverworldEvent({type: "textMessage",text:"Odpowiedz na wszystkie pytania"},);eventHandler.init();}else{if(window.stol1 == "wypadek" && window.stol2 == "sam" && window.stol3 == "dzieci" &&window.stol4 == "mess"){const eventHandler = new OverworldEvent({type: "changeMap",map: "Room6",x: utils.withGrid(5),y: utils.withGrid(8),direction: "up"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"door_open",volume:"0.1"},);eventHandler2.init();const eventHandler3 = new OverworldEvent({type: "play_audio",audio:"win",volume:"0.1"},);eventHandler3.init();const eventHandler4 = new OverworldEvent({type: "textMessage",text: 'Znalazłeś "Klucz Pamięci"!'},);eventHandler4.init();window.heroInventory.push(window.GameObjects.find(x=> x.id === "Klucz Pamięci"));}else{const eventHandler = new OverworldEvent({type: "textMessage",text:"Nie wszystkie opdowiedzi są poprawne"},);eventHandler.init();const eventHandler2 = new OverworldEvent({type: "play_audio",audio:"wrong",volume:"0.1"},);eventHandler2.init();window.stol1="";window.stol2="";window.stol3="";window.stol4="";}}`},]},],
  }), 
    stol1: new Person({
      isPlayerControlled: false,
      src: "images/maps/blank.png",
      x: utils.withGrid(3),
      y: utils.withGrid(5),
      counter: 0,
      talking: [{events: [
        {type: "question", text: "Byliście na obiedzie z Twoimi rodzicami. Bardzo długo czekaliście na posiłki, ale w końcu dotarły. Po skończonym spotkaniu zamówiliście ubera który...", 
          options: [
            {text: "...spowodował wypadek", reaction: 'window.stol1 = "wypadek"', req: "!window.stol1"},
            {text: "...jechał okrężnymi drogami", reaction: 'window.stol1 = "drogi"', req: "!window.stol1"},
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
        {type: "question", text: "Oliwia przyjechała do Ciebie spać, bo u niej w domu był remont. Twoja mama zrobiła przemeblowanie Twojego pokoju, ....., a deski pękły pod .... ciężarem.", 
          options: [
            {text: "...położyliście się z Oliwią na łóżku... ...Waszym...", reaction: 'window.stol2 = "razem"', req: "!window.stol2"},
            {text: "...położyłeś się na łóżku... ...Twoim...", reaction: 'window.stol2 = "sam"', req: "!window.stol2"},
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
        {type: "question", text: "Oliwia na twoje urodziny zrobiła ci niespodziankę. Zabrała cię na strzelnicę, gdzie prawie nie udało się skorzystać z atrakcji. Wcześniej wzięła cię pod .... i powiedziała że cię tam zostawi.", 
          options: [
            {text: "...Szpital psychiatrii dla dorosłych", reaction: 'window.stol3 = "dorosli"', req: "!window.stol3"},
            {text: "...Szpital psychiatrii dziecięcej", reaction: 'window.stol3 = "dzieci"', req: "!window.stol3"},
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
        {type: "question", text: "... w Połańcu, spotkałeś Oliwię pod Biedronką. Poprosiłeś ją o prawo jazdy, którego ona Ci nie dała, więc zabrałeś jej pierścionek, po czym oświadczyłeś się Oliwii ledwo ją znając. Potem obiecałeś Oliwii klucze do Passata...", 
          options: [
            {text: "Była impreza... ...a ona kazała ci to napisać na messengerze", reaction: 'window.stol4 = "mess"', req: "!window.stol4"},
            {text: "Byłeś na wyjściu z kolegami... ...a ona kazała ci nagrać głosówkę gdzie to potwierdzasz", reaction: 'window.stol4 = "glosowka"', req: "!window.stol4"},
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
    document.querySelector(".pokoj").innerText = "Komnata pamięci"
  }
};