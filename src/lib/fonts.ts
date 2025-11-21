import { Space_Grotesk } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  preload: true,
})

// Custom font configurations for better performance
export const fontConfig = {
  className: spaceGrotesk.variable,
  style: spaceGrotesk.style,
}