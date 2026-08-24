import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Hotspot Karhutla',
  description: 'Dashboard pemantauan titik hotspot kebakaran hutan dan lahan Indonesia.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="bg-[#0a0e13">
      <body>{children}</body>
    </html>
  )
}
