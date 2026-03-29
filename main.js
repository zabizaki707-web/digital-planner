const { app, BrowserWindow } = require('electron');

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your application HTML file or URL
    mainWindow.loadFile('index.html');

    // Open the DevTools (optional).
    // mainWindow.webContents.openDevTools();

    // Handle window close event
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it's common to keep the application open even when all windows are closed.
    // However, this is the necessary line to quit on Windows.
    app.quit();
});

// Create the window when the app is activated.
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
