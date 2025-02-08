import { ANIMATION_CONFIG } from '@/lib/constants'
import Image from 'next/image'

interface AnimatedBackgroundProps {
  images: string[]
}

export function AnimatedBackground({ images }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden flex flex-col h-screen">
      {[...Array(ANIMATION_CONFIG.ROWS)].map((_, index) => (
        <div
          key={index}
          className="background-row relative overflow-hidden flex-1 py-4"
        >
          <div className="overflow-hidden h-full">
            <div
              className={`flex h-full ${
                index < 2 
                  ? `animate-scroll-left-${index}` 
                  : `animate-scroll-right-${index}`
              }`}
              style={{
                width: `${images.length * (100 / ANIMATION_CONFIG.ROWS * 1.2 + 16)}vw`,
              }}
            >
              {images.map((src, imgIndex) => (
                <div
                  key={`${src}-${imgIndex}`}
                  className="background-image flex-shrink-0 mx-2 relative h-full"
                  style={{
                    width: `${100 / ANIMATION_CONFIG.ROWS * 1.2}vw`,
                  }}
                >
                  <Image
                    src={src}
                    alt="Background image"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 