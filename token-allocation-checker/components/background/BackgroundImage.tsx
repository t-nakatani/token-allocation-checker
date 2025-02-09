import Image from 'next/image'
import Link from 'next/link'

interface BackgroundImageProps {
  src: string
  rowIndex: number
  rowCount: number
  href: string
}

export function BackgroundImage({ src, rowIndex, rowCount, href }: BackgroundImageProps) {
  return (
    <Link 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="background-image flex-shrink-0 mx-2 relative h-full hover:cursor-pointer"
      style={{
        width: `${100 / rowCount * 1.2}vw`,
      }}
    >
      <Image
        src={src}
        alt="Background image"
        fill
        style={{ objectFit: 'contain' }}
        priority={rowIndex === 0}
      />
    </Link>
  )
}
