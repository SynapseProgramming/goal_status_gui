  require('electron').ipcRenderer.on('received_state', (event, message) => {
    document.getElementById("goal_state").innerText = message

  })