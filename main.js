const { app, BrowserWindow, Menu, globalShortcut } = require('electron');

// Set environment you're in
process.env.NODE_ENV = 'development';

// Set what it means to be in Dev Mode
const isDev = process.env.NODE_ENV !== 'production';

// Set platform you're in
const isMac = process.platform === 'darwin'; // Note: isMac is used a lot as MacOS is very different from Linux & Win

// Instantiate windows here in case we want to use them more than once
//TODO: - can it be done with const?
let mainWindow;
let aboutWindow;

// Create a window
createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: isDev ? 800 : 500,
    height: 600,
    icon: `${__dirname}/assets/icons/icon1.png`,
    resizable: isDev,
    backgroundColor: 'white', //initially set for devTools - keeps background white instead of black
    webPreferences: {
      //for console error "require is not defined"
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Load a local file with file protocol
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
};

createAboutWindow = () => {
  aboutWindow = new BrowserWindow({
    title: 'AboutImageShrink',
    width: 300,
    height: 300,
    icon: `${__dirname}/assets/icons/icon1.png`,
    resizable: false,
    backgroundColor: 'white',
  });

  // Load a local file with file protocol
  aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
};

// Launch the window
app.on('ready', () => {
  createMainWindow();

  //Create menu template
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  // Global key shortcuts - these shortcuts are covered in dev menu but this is where you would put global shorcuts
  // globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload());
  // globalShortcut.register(isMac ? 'Command+Alt+I' : 'Ctrl+Shift+I', () =>
  //   mainWindow.toggleDevTools()
  // );

  // "Garbage Collection" - mainWindow variable = null when window closes
  mainWindow.on('closed', () => (mainWindow = null));
});

// Create file menu for the window - note: this will remove default menu and shortcut keys
// Default menue here: https://www.electronjs.org/docs/latest/api/menu
const menu = [
  // Menu items
  ...(isMac ? [{ label: app.name, submenu: [{ label: 'About', click: createAboutWindow }] }] : []),
  ...(!isMac
    ? [{ label: 'Details', submenu: [{ label: 'About', click: createAboutWindow }] }]
    : []),
  { role: 'fileMenu' }, // Standard file menu
  ...(isDev
    ? [
        {
          label: 'Developer',
          submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' }, // line
            { role: 'toggledevtools' },
          ],
        },
      ]
    : []),
];

// Quit the app when all windows are closed - for Windows or Linux
// If you want the same fucntion for MacOS remove 'if (!isMac)'
app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

// Open a window if none are open
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

// NOTE:
// Custom menu structure:
// label: 'File', //top level item
// submenu: [
//   {
//     label: 'Quit',
//     accelerator: 'isMac' ? 'Command+W' : 'Ctrl+W', //shortcut key for macOs : other two
//     accelerator: 'CmdOrCtrl+W', //shortcut key cross platform
//     click: () => app.quit(),
//   },
// ],
