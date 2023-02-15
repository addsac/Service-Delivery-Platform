'use client'

import localFont from '@next/font/local'
import { RecoilRoot } from 'recoil'
import './globals.css'

const myFont = localFont({
  src: './font/SF-Compact.ttf',
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={myFont.className}>
      <head />
      
      <body>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  )
}
