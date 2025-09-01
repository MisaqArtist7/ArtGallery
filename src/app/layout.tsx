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
        <symbol id="leftArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-7 h-7"> <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /> </symbol>
        <symbol id="share" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.047 13.907c-3.827 0-6.929-3.102-6.929-6.929s3.102-6.929 6.929-6.929c3.827 0 6.929 3.102 6.929 6.929v0c-0.020 3.819-3.11 6.909-6.927 6.929h-0.002zM25.047 2.474c-2.46 0-4.454 1.994-4.454 4.454s1.994 4.454 4.454 4.454c2.46 0 4.454-1.994 4.454-4.454v0c-0.017-2.453-2.001-4.437-4.452-4.454h-0.002z"></path><path d="M5.998 26.759c-3.313 0-5.998-2.685-5.998-5.998s2.685-5.998 5.998-5.998c3.313 0 5.998 2.685 5.998 5.998v0c-0.003 3.312-2.687 5.995-5.998 5.998h-0zM5.998 17.237c-1.946 0-3.524 1.578-3.524 3.524s1.578 3.524 3.524 3.524c1.946 0 3.524-1.578 3.524-3.524v0c-0.003-1.945-1.579-3.521-3.523-3.524h-0z"></path><path d="M23.621 32c-2.788 0-5.048-2.26-5.048-5.048s2.26-5.048 5.048-5.048c2.788 0 5.048 2.26 5.048 5.048v0c-0.003 2.787-2.261 5.045-5.048 5.048h-0zM23.621 24.379c-1.421 0-2.573 1.152-2.573 2.573s1.152 2.573 2.573 2.573c1.421 0 2.573-1.152 2.573-2.573v0c-0.003-1.42-1.153-2.571-2.573-2.573h-0z"></path><path d="M9.822 23.814l0.919-2.298 9.526 3.81-0.919 2.298-9.526-3.81z"></path><path d="M9.144 16.383l10.478-6.672 1.329 2.087-10.478 6.672-1.329-2.087z"></path></symbol>
      </svg>
      <body>{children}</body>
    </html>
  )
}