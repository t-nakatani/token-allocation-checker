import { ANIMATION_CONFIG } from '@/lib/constants'

interface AnimatedGridProps {
  position: 'top' | 'bottom'
}

export function AnimatedGrid({ position }: AnimatedGridProps) {
  return (
    <div 
      className="absolute left-0 w-full bg-grid-pattern opacity-10"
      style={{
        [position]: 0,
        height: `${ANIMATION_CONFIG.GRID_HEIGHT}px`,
        backgroundImage: `repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent ${ANIMATION_CONFIG.GRID_SIZE}px),
                         repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent ${ANIMATION_CONFIG.GRID_SIZE}px)`,
        animation: `stream${position === 'top' ? 'Left' : 'Right'} ${ANIMATION_CONFIG.SPEED}s linear infinite`
      }}
    />
  )
} 