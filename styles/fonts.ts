import { Poppins, Inter, Roboto, Lato } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  weight: "700",
  subsets: ['latin'],
  style: "normal"
})

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})