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


app.whenReady().then(() => {
  createWindow()
  rclnodejs.init().then(() => {
    const node = new rclnodejs.Node('publisher_example_node');
    const publisher = node.createPublisher('std_msgs/msg/String', 'topic');
    publisher.publish(`Hello ROS 2 from rclnodejs`);
    node.spin();
  });
})


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})