const fail = `const eventHandler3 = new OverworldEvent({type:"play_audio",audio:"hitting",volume:"0.4"},);
          eventHandler3.init();
          const eventHandler2 = new OverworldEvent({type:"play_audio",audio:"death",volume:"0.1"},);
          eventHandler2.init();
          var StartMapPromise = new Promise(function(resolve) {
                window.sceneTransition = new SceneTransition();
                sceneTransition.init(document.querySelector(".game-container"), () => {
                    resolve();
            })
            });
            const eventHandler = new OverworldEvent({type: "changeMap",map: "Room6",x: utils.withGrid(4),y: utils.withGrid(4),direction: "up"},);
            eventHandler.init();
            window.map.startCutscene([
              {type:"textMessage",text: "To nie był najlepszy pomysł..."},
              {type:"textMessage",text: "Spróbujmy jeszcze raz..."},
              {type: "do_code",code: 'window.sceneTransition.fadeOut();delete window.sceneTransition'}
            ]);`

const fall = `window.map.gameObjects.hero.isPlayerControlled = false;document.querySelector("#audio_walk").pause();const eventHandler3 = new OverworldEvent({type:"play_audio",audio:"fall",volume:"0.4"},);
          eventHandler3.init();
          var StartMapPromise = new Promise(function(resolve) {
                window.sceneTransition = new SceneTransition();
                sceneTransition.init(document.querySelector(".game-container"), () => {
                    resolve();
            })
            });
            setTimeout(() => {
              const eventHandler = new OverworldEvent({type: "changeMap",map: "Home",x: utils.withGrid(12),y: utils.withGrid(13),direction: "right"},);
            eventHandler.init();
            window.map.startCutscene([
              {type:"textMessage",text: "Ouch..."},
              {type: "do_code",code: 'window.sceneTransition.fadeOut();delete window.sceneTransition'}
            ]);
              },5000)
            `
window.OverworldMaps.Room7 = {
  id: "Room7",
  lowerSrc: "images/maps/room7Lower.png",
  upperSrc: "images/maps/room7Upper.png",
  gameObjects: {
        placeholder: new Person({
            isPlayerControlled: false,
            src: "images/maps/blank.png",
            x: utils.withGrid(4),
            y: utils.withGrid(8),
            walkable: true,
        }),
      hero: new Person({
          isPlayerControlled: true, 
          useShadow: true,
          direction: "up",
          x: utils.withGrid(4),
          y: utils.withGrid(12),
      }),
      boss: new Person({
        isPlayerControlled: false,
        useShadow: true,
        src: "images/characters/people/boss.png",
        x: utils.withGrid(4),
        y: utils.withGrid(7 ),
        walkable: true
    }),
  },
  walls: {
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(5, 13)]: true,
    [utils.asGridCoord(1, 12)]: true,
    [utils.asGridCoord(2, 12)]: true,
    [utils.asGridCoord(3, 12)]: true,
    [utils.asGridCoord(6, 12)]: true,
    [utils.asGridCoord(7, 12)]: true,
    [utils.asGridCoord(8, 12)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(0, 9)]: true,
    [utils.asGridCoord(0, 10)]: true,
    [utils.asGridCoord(0, 11)]: true,
    [utils.asGridCoord(9, 11)]: true,
    [utils.asGridCoord(9, 10)]: true,
    [utils.asGridCoord(9, 9)]: true,
    [utils.asGridCoord(9, 8)]: true,
    [utils.asGridCoord(9, 7)]: true,
    [utils.asGridCoord(9, 6)]: true,
    [utils.asGridCoord(9, 5)]: true,
    [utils.asGridCoord(9, 4)]: true,
    [utils.asGridCoord(9, 3)]: true,
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(2, 2)]: true,
    [utils.asGridCoord(7, 2)]: true,
    [utils.asGridCoord(8,2)]: true,
    [utils.asGridCoord(4,3)]: true,
    [utils.asGridCoord(5,3)]: true,
  },
  cutsceneSpaces: {
    [utils.asGridCoord(4, 6)]: [
    {
            events: [
            {
              type: "do_code",
              code: fall,
          },
            ]
        }
    ],
    [utils.asGridCoord(3, 6)]: [
      {
              events: [
              {
                type: "do_code",
                code: fall,
            },
              ]
          }
      ],
      [utils.asGridCoord(3, 5)]: [
        {
                events: [
                {
                  type: "do_code",
                  code: fall,
              },
                ]
            }
        ],
        [utils.asGridCoord(3, 3)]: [
          {
                  events: [
                  {
                    type: "do_code",
                    code: fall,
                },
                  ]
              }
          ],
      [utils.asGridCoord(6, 6)]: [
        {
                events: [
                {
                  type: "do_code",
                  code: fall,
              },
                ]
            }
        ],
        [utils.asGridCoord(6, 5)]: [
          {
                  events: [
                  {
                    type: "do_code",
                    code: fall,
                },
                  ]
              }
          ],
          [utils.asGridCoord(6, 3)]: [
            {
                    events: [
                    {
                      type: "do_code",
                      code: fall,
                  },
                    ]
                }
            ],
    },
  start_func: function(){
    document.querySelector('#audio_music').pause()
  const eventHandler5 = new OverworldEvent({type:"play_audio",audio:"boss",volume:0.1});
  eventHandler5.init();
    document.querySelector(".pokoj").innerText = "Sala bossa"
    window.map.startCutscene([
      {type: "textMessage",text: "Boss: Czekałem na ciebie..."},
      {type: "walk",who: "hero", direction: "up"},
      {type: "walk",who: "hero", direction: "up"},
      {type: "textMessage",text: "Boss: Myślałeś że możesz mnie pokonać?"},
      {type: "walk",who: "hero", direction: "up"},
      {type: "walk",who: "hero", direction: "up"},
      {type: "question",text: "Boss: Jakieś ostatnie słowa?", options: [
        {text: "...nieee", reaction: fail},
        {text: "...chciałbym pozdrowić przed śmiercią mamę i tatę", reaction: fail},
        {text: "...to by już nic nie dało", reaction: fail},
        {text: "*popchnij*", reaction: `
          const eventHandler4 = new OverworldEvent({type:"punch",who: "hero", hand:"right",direction:"up"},);
          eventHandler4.init();
          const eventHandler3 = new OverworldEvent({type:"play_audio",audio:"cat",volume:"0.4"},);
          eventHandler3.init();
           var StartMapPromise = new Promise(function(resolve) {
                window.sceneTransition = new SceneTransition();
                sceneTransition.init(document.querySelector(".game-container"), () => {
                    resolve();
                    delete window.map.gameObjects.boss;
                })
            });
          setTimeout(() => {
            const eventHandler5 = new OverworldEvent({type: "do_code",code: 'window.sceneTransition.fadeOut();delete window.sceneTransition'},);
            const eventHandler6 = new OverworldEvent({type: "textMessage",text: 'to było łatwiejsze niż przypuszczałem...'},);
          eventHandler5.init();
          eventHandler6.init();
          document.querySelector('#audio_boss').pause()
          }, 3000)
        `},
        {text: "*błagaj o litość*", reaction: fail},
      ]},
  ])
  }
};