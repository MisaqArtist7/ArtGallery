
import { Metadata } from "next";
export const metadata: Metadata = { 
    title: "Register", 
    description: "Register for an account"
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}