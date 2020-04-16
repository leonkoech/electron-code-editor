const {app,BrowserWindow}=require('electron')
const fs =require('fs')
app.on('ready',() => {
    mainWindow= new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWindow.loadFile('renderer.html')
})