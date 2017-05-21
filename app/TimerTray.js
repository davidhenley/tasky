const { Tray } = require('electron');

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;
    this.on('click', this.onClick.bind(this));
  }

  onClick(event, bounds) {
    const { x, y } = bounds;
    const { width, height } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === 'darwin' ? y : y - height;
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height,
        width
      });
      this.mainWindow.show();
    }
  }
}

module.exports = TimerTray;