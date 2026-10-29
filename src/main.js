import * as Phaser from "phaser";
import "./style.css";

class StartScene extends Phaser.Scene {
  create() {
    this.add.text(480, 270, "Phaser is running!", {
      fontSize: "32px",
      color: "#fff0ce"
    }).setOrigin(0.5);
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "app",
  width: 960,
  height: 540,
  backgroundColor: "#111426",
  pixelArt: true,
  scene: [StartScene]
});