var audio = new Audio();
var curr_state = "-1";

require('electron').ipcRenderer.on('received_state', (event, message) => {
  curr_state = message;
  if (message == "0") {
    audio.pause();
    audio.src = "Rick.mp3"
    audio.play();

    document.getElementById("Ricardo_dance").hidden = true;
    document.getElementById("Rick_dance").hidden = false;

  } else if (message == "1") {
    audio.pause();
    audio.src = "Tokyo.mp3"
    audio.play();

    document.getElementById("Ricardo_dance").hidden = false;
    document.getElementById("Rick_dance").hidden = true;

  } else if (message == "2") {

    audio.pause();
    audio.src = "Ricardo.mp3"
    audio.play();

    document.getElementById("circle").style.background = "red";
  }

});

require('electron').ipcRenderer.on('blink_state', (event, message) => {
  if (message == true && curr_state == "1") {
    console.log("blink state is true")

    document.getElementById("circle").hidden = true;
  } else if (message == false && curr_state == "1") {
    console.log("blink state is false")
    document.getElementById("circle").hidden = false;
  } else {
    document.getElementById("circle").hidden = false;
  }

});
