import { ANIMATION_CONFIG } from '@/lib/constants'
import Image from 'next/image'

interface AnimatedBannerProps {
  position: 'top' | 'bottom'
  images: string[] // 画像URLの配列
}

export function AnimatedBanner({ position, images }: AnimatedBannerProps) {
  return (
    <div 
      className="banner-container absolute left-0 w-full overflow-hidden bg-white"
      style={{ 
        [position]: 0,
        height: `${ANIMATION_CONFIG.BANNER_HEIGHT}px`,
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <div className="overflow-hidden">
        <div 
          className={`flex ${position === 'top' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
          style={{
            width: `${images.length * (ANIMATION_CONFIG.BANNER_HEIGHT * 1.5 + 32)}px`, // 画像の幅 + margin
          }}
        >
          {/* 実際の画像セット */}
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="banner-image flex-shrink-0 mx-4 opacity-90 hover:opacity-100 relative"
              style={{
                width: `${ANIMATION_CONFIG.BANNER_HEIGHT * 1.5}px`,
                height: `${ANIMATION_CONFIG.BANNER_HEIGHT}px`,
              }}
            >
              <Image
                src={src}
                alt="Banner image"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 