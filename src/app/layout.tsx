import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const font = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gamer.Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
