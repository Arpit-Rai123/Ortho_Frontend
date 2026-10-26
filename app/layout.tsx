import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono, Noto_Sans_Bengali, Noto_Sans_Devanagari, Noto_Sans_Gujarati, Noto_Sans_Gurmukhi, Noto_Sans_Kannada, Noto_Sans_Malayalam, Noto_Sans_Oriya, Noto_Sans_Tamil, Noto_Sans_Telugu } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
// One Noto Sans family per script (the generic Noto Sans family has no Indic subsets besides Devanagari).
// Assamese uses the Bengali script; Hindi and Marathi use Devanagari.
const notoBengali = Noto_Sans_Bengali({ subsets: ['bengali', 'latin'], variable: '--font-noto-bengali', display: 'swap' })
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ['devanagari', 'latin'], variable: '--font-noto-devanagari', display: 'swap' })
const notoGujarati = Noto_Sans_Gujarati({ subsets: ['gujarati', 'latin'], variable: '--font-noto-gujarati', display: 'swap' })
const notoGurmukhi = Noto_Sans_Gurmukhi({ subsets: ['gurmukhi', 'latin'], variable: '--font-noto-gurmukhi', display: 'swap' })
const notoKannada = Noto_Sans_Kannada({ subsets: ['kannada', 'latin'], variable: '--font-noto-kannada', display: 'swap' })
const notoMalayalam = Noto_Sans_Malayalam({ subsets: ['malayalam', 'latin'], variable: '--font-noto-malayalam', display: 'swap' })
const notoOriya = Noto_Sans_Oriya({ subsets: ['oriya', 'latin'], variable: '--font-noto-oriya', display: 'swap' })
const notoTamil = Noto_Sans_Tamil({ subsets: ['tamil', 'latin'], variable: '--font-noto-tamil', display: 'swap' })
const notoTelugu = Noto_Sans_Telugu({ subsets: ['telugu', 'latin'], variable: '--font-noto-telugu', display: 'swap' })
const scriptFontVars = [notoBengali, notoDevanagari, notoGujarati, notoGurmukhi, notoKannada, notoMalayalam, notoOriya, notoTamil, notoTelugu].map((f) => f.variable).join(' ')

export const metadata: Metadata = {
  title: 'Swasthya AI — OA Risk Screening',
  description: 'A calm, explainable screening demo for early osteoarthritis risk markers.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f5f7', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`bg-background ${geist.variable} ${geistMono.variable} ${scriptFontVars}`}><body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
