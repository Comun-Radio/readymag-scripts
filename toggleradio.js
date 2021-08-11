// Script to Toggle Radio and display now playing song title
// needs:
//   jquery (already used by readymag natively)
//   NchanSubscriber (loaded on readymag project Head)

var audio = new Audio("https://consola.comun.radio/radio/8000/radio.mp3");
  var display = false;

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      display = true;
    } else {
      audio.pause();
      display = false;
    }

    return;
  }

// data-id is used to select Readymag objects
  $('div.common-button[data-id="60b4fd14d98f4c005bdc363a"]').click(togglePlay);

  var sub = new NchanSubscriber('https://consola.comun.radio/api/live/nowplaying/comun_radio');
  var nowPlaying;
  var textDisplay;
  
  sub.on("message", function(message, message_metadata) {
    nowPlaying = JSON.parse(message);
    artistDisplay = nowPlaying.now_playing.song.title + "\t".repeat(6);
    $('div[data-id="60b4fd3d2cb1090076878386"] span').text( artistDisplay.toUpperCase().repeat(6) );
  });
  
  sub.start();
