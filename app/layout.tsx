import './globals.css'

export const metadata = {
  title: 'Career Discovery Platform',
  description: 'Discover your ideal career path',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
