declare var MAIN_WINDOW_WEBPACK_ENTRY: string;
import { app, BrowserWindow, ipcMain, IpcMainEvent } from "electron";
import fs from "fs";
import readChunk from "read-chunk";
import fileType from "file-type";
import { execFile } from "child_process";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let closeFlg = false;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    closeFlg = true;
  });

  if (process.env.NODE_ENV === "development") {
    let installExtension = require("electron-devtools-installer");
    installExtension
      .default(installExtension.VUEJS_DEVTOOLS)
      .then((name: string) => console.log(`Added Extension:  ${name}`))
      .catch((err: string) => {
        console.log("Unable to install `vue-devtools`: \n", err);
      });
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (closeFlg) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on("getFiles", (event: IpcMainEvent, dirPath: string) => {
  if (dirPath === null || dirPath === undefined || dirPath === "~/") {
    const userHome =
      process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
    if (userHome) {
      dirPath = userHome;
    } else {
      dirPath = "/";
    }
  }
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;

    const fileList = [];
    for (const file of files) {
      const filePath = `${dirPath}/${file}`;

      try {
        const isFile = fs.statSync(filePath).isFile();
        let type = "";
        let data = "";
        if (isFile) {
          const chunk = readChunk.sync(filePath, 0, fileType.minimumBytes);
          if (chunk !== undefined) {
            const filetype = fileType(chunk);
            if (filetype !== undefined) {
              type = filetype.mime.toString();
              console.log(type);
              if (type.match(/jpeg|jpg|png|gif|bmp"/)) {
                const binary = fs.readFileSync(filePath);
                data = new Buffer(binary).toString("base64");
              }
            }
          }
        }

        fileList.push({
          path: filePath,
          displayName: file,
          isFile: isFile,
          fileType: type,
          data: data
        });
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
    }

    event.sender.send("receiveFiles", fileList);
  });

  ipcMain.on("openFile", (event: IpcMainEvent, filePath: string) => {
    // TODO implements open file function
  });
});
