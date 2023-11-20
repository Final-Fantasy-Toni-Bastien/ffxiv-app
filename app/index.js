const {
    app,
    BrowserWindow,
    ipcMain,
    nativeTheme
} = require('electron'),
    path = require("path")
    // DiscordRPC = require('discord-rpc');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            enableRemoteModule: true

        }
    })



    win.loadFile('./web/index.html'); //Charger le fichier index.html

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    //Rpc discord
    // const clientId = '1123571969208623244';
    // DiscordRPC.register(clientId);

    // const rpc = new DiscordRPC.Client({ transport: 'ipc' });

    // rpc.on('ready', () => {
    //     rpc.setActivity({
    //         details: `En train d'utiliser HBC Pass`,
    //         startTimestamp: new Date(),
    //         largeImageKey: 'blackezlogo',
    //         instance: false,
    //     });
    // });

})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})