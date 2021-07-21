const {
  app,
  BrowserWindow
} = require('electron')
const rclnodejs = require('rclnodejs')


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

rclnodejs.init().then(() => {
  const node = new rclnodejs.Node('goal_status_gui');
  node.createSubscription('std_msgs/msg/Int32', 'goal_state', (msg) => {
    console.log(`Received message: ${typeof msg}`, msg);
  });
  rclnodejs.spin(node);
});

app.whenReady().then(() => {
  createWindow()

})


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})