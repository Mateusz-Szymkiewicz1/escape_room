const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
 
const path = require('path')
const url = require('url')
 
let win
 
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 704, height: 396,autoHideMenuBar: true,})
 
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'pierwszak_symulator/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.on('will-resize', (e,b,d) => {
    e.preventDefault()
  })
}
app.on('ready', createWindow)