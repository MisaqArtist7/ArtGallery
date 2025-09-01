import "./globals.css";
export const metadata = {
    title: "404 Not Found",
    description: "Page not found",
    icons: {
      icon: "/favicon.png",
      apple: "/apple-icon.png"
    }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <svg className="hidden">
        <symbol id="leftArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </symbol>
      </svg>
      <body>{children}</body>
    </html>
  )
}