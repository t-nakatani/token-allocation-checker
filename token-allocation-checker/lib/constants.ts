export const ANIMATION_CONFIG = {
  SCROLL_SPEED: 18, // より遅いスクロール
  BANNER_HEIGHT: 320, // 160pxからさらに2倍の320pxに
} as const

export const ANIMATION_STYLES = `
  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scrollRight {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-scroll-left {
    display: flex;
    animation: scrollLeft ${ANIMATION_CONFIG.SCROLL_SPEED}s linear infinite;
  }

  .animate-scroll-right {
    display: flex;
    animation: scrollRight ${ANIMATION_CONFIG.SCROLL_SPEED}s linear infinite;
  }

  .banner-container:hover .animate-scroll-left,
  .banner-container:hover .animate-scroll-right {
    animation-play-state: paused;
  }

  .banner-image {
    transition: all 0.3s ease;
  }

  .banner-image:hover {
    transform: scale(1.05);
  }
` 