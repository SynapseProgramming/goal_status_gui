var audio = new Audio();


require('electron').ipcRenderer.on('received_state', (event, message) => {

  if (message == "0") {
    audio.pause();
    audio.src = "Rick.mp3"
    audio.play();
    document.getElementById("circle").style.background = "green";

  } else if (message == "1") {
    document.getElementById("circle").style.background = "yellow";
    audio.pause();
    audio.src = "Tokyo.mp3"
    audio.play();

  } else if (message == "2") {

    audio.pause();
    audio.src = "Ricardo.mp3"
    audio.play();

    document.getElementById("circle").style.background = "red";
  }

})