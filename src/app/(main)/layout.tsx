import { Metadata } from "next";
import Header from "@/components/shared/Header/Header";
import '../../app/globals.css'
// Head of website
export const metadata: Metadata = {
  title: "Art Gallery",
  description: "Home page",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function mainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header/>
      <body>{children}</body>
    </html>
  )
}
