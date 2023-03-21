const { app, BrowserWindow } = require('electron');

createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
  });
};

//launch the window
app.on('ready', createMainWindow);
