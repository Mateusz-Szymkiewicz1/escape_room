(function () {
        window.sans_mode = false;
        document.querySelector("#audio_talking").src = "audio/talking.mp3";
        window.music_volume = 1;
        window.sfx_volume = 1;
        window.game_color = "#101010";
        window.website_color = "#fff";
        window.scale = 2.5;
        window.zoom = 1;
  const overworld = new Overworld({
    element: document.querySelector(".game-container")
  });
  overworld.init();
})();