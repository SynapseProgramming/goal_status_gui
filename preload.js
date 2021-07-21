var audio = new Audio();


require('electron').ipcRenderer.on('received_state', (event, message) => {

  if (message == "0") {


    document.getElementById("circle").style.background = "green";
  } else if (message == "1") {
    document.getElementById("circle").style.background = "yellow";
    audio.pause();
    audio.currentTime = 0;
    audio.src = "Ricardo.mp3"
    audio.load()
    audio.play();
  } else if (message == "2") {
    document.getElementById("circle").style.background = "red";
  }

})