import localFont from '@next/font/local';
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
        {children}
      </body>
    </html>
  )
}
