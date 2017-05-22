const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false
    });

    this.loadURL(url);
    this.on('blur', () => this.hide());
  }
}

module.exports = MainWindow;
