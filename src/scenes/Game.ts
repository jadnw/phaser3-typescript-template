export default class GameScene extends Phaser.Scene {
  logo!: Phaser.GameObjects.Image
  constructor() {
    super('GameScene')
  }

  preload() {
    this.load.image('phaser', 'assets/phaser-3.png')
  }

  create() {
    this.logo = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'phaser')
    this.tweens.add({
      targets: this.logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }
}
