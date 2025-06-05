import type { Metadata } from 'next'
import './globals.css'
import { populationZeroBB} from './fonts'

export const metadata: Metadata = {
  title: 'Zero Hour NFT',
  description: 'Apocalypse World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={populationZeroBB.className}>
        {children}
      </body>
    </html>
  )
}
