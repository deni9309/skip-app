export function loadImage(skipSize: number | null) {
  if (!skipSize) return '/images/4.jpg'

  return skipSize === 4
    ? '/images/4.jpg'
    : skipSize > 4 && skipSize <= 14
    ? '/images/5-14.jpg'
    : skipSize > 14 && skipSize < 20
    ? '/images/16.jpg'
    : '/images/20-40.jpg'
}
