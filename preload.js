  require('electron').ipcRenderer.on('received_state', (event, message) => {
    console.log("received something") // Prints 'whoooooooh!'
  })