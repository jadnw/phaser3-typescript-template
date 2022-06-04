import { Scale, Types, AUTO } from 'phaser'

const config: Types.Core.GameConfig = {
  title: 'Jay The Coder',
  type: AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    mode: Scale.ScaleModes.ENVELOP,
    width: 1920,
    height: 1080,
    autoCenter: Scale.CENTER_BOTH,
  },
}

export default config