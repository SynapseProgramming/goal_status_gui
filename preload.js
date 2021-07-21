  require('electron').ipcRenderer.on('received_state', (event, message) => {
    console.log("received something") // Prints 'whoooooooh!'
    document.getElementById("goal_state").innerText = message

  })