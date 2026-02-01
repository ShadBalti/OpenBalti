import Image from "next/image"
import { getOptimalImageQuality } from "@/lib/performance-utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  objectFit?: "cover" | "contain" | "fill"
  blurDataURL?: string
}

/**
 * Optimized image component with adaptive quality and lazy loading
 * Automatically handles responsive sizing and Core Web Vitals optimization
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = "",
  sizes,
  objectFit = "cover",
  blurDataURL,
}: OptimizedImageProps) {
  const quality = getOptimalImageQuality()

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      className={className}
      sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 1000px"}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      loading={priority ? "eager" : "lazy"}
      style={{
        objectFit,
      }}
    />
  )
}

export default OptimizedImage
