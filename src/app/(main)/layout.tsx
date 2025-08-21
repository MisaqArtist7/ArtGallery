import { ReactNode } from "react";
import Header from "@/components/shared/header/Header";
import '../../app/globals.css'
// Head of website
export const metadata = {
  title: "Art Gallery",
  description: "Home page",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Header/>
      <body>{children}</body>
    </html>
  )
}
