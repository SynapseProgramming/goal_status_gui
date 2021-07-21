  require('electron').ipcRenderer.on('received_state', (event, message) => {
    if (message == "0") {
      document.getElementById("circle").style.background = "green";
    } else if (message == "1") {
      document.getElementById("circle").style.background = "yellow";
    } else if (message == "2") {
      document.getElementById("circle").style.background = "red";
    }

  })