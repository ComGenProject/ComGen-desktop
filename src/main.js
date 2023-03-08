//import electron
const { app, BrowserWindow } = require('electron');

//create window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,//hide the menuBar
        icon: __dirname + '/img/CommandGenIcon.jpg',//set the icon
    });

    win.loadFile('src/index.html'); //load the html

    win.webContents.openDevTools()//open the debugger
};

//display window when ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//close app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});