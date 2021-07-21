const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')
const rclnodejs = require('rclnodejs')
const path = require('path')


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  rclnodejs.init().then(() => {
    const node = new rclnodejs.Node('goal_status_gui');
    node.createSubscription('std_msgs/msg/Int32', 'goal_state', (msg) => {
      console.log(`Received message: ${typeof msg}`, msg);
      var num = msg.data;
      var string_num = num.toString();
      win.webContents.send('received_state', string_num)
    });
    rclnodejs.spin(node);
  });

}


app.whenReady().then(() => {
  createWindow()
})


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})