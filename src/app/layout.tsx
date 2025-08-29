import "./globals.css";
export const metadata = {
    title: "404 Not Found",
    description: "Page not found",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}