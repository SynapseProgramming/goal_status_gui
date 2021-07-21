const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')
const rclnodejs = require('rclnodejs')
const path = require('path')


var current_state = "-1";


function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  rclnodejs.init().then(() => {
    const node = new rclnodejs.Node('goal_status_gui');

    let timer = node.createTimer(1000, () => {
      console.log('One second escaped!');

      console.log('Cancel this timer.');
      timer.cancel();

      if (timer.isCanceled()) {
        console.log('The timer has been canceled successfully.');
      }

      console.log('Reset the timer.');
      timer.reset();
      console.log(
        'The next call will be ' + timer.timeUntilNextCall() + 'ms later.'
      );

    });


    node.createSubscription('std_msgs/msg/Int32', 'goal_state', (msg) => {
      //  console.log(`Received message: ${typeof msg}`, msg);
      var num = msg.data;
      var string_num = num.toString();
      if (string_num != current_state) {
        current_state = string_num;
        win.webContents.send('received_state', string_num)
      }
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