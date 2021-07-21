  require('electron').ipcRenderer.on('received_state', (event, message) => {
    var audio = new Audio();

    if (message == "0") {
      document.getElementById("circle").style.background = "green";
    } else if (message == "1") {
      document.getElementById("circle").style.background = "yellow";
      audio.src = "Ricardo.mp3"
      audio.play();
    } else if (message == "2") {
      document.getElementById("circle").style.background = "red";
    }

  })