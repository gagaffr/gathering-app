// app/layout.tsx
export const metadata = {
  title: 'Gathering App',
  description: 'Scan QR untuk dapetin nomor kelompok',
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
