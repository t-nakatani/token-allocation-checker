export const ANIMATION_CONFIG = {
  SPEED: 0.4, // 秒
  GRID_SIZE: 20, // px
  MOVEMENT_DISTANCE: 40, // px
  GRID_HEIGHT: 256 // px (16rem = 16 * 16 = 256px)
} as const

export const ANIMATION_STYLES = `
  @keyframes streamLeft {
    0% { background-position: 0 0; }
    100% { background-position: -${ANIMATION_CONFIG.MOVEMENT_DISTANCE}px 0; }
  }
  @keyframes streamRight {
    0% { background-position: 0 0; }
    100% { background-position: ${ANIMATION_CONFIG.MOVEMENT_DISTANCE}px 0; }
  }
` 