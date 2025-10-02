
import { Metadata } from "next";
export const metadata: Metadata = { 
    title: "Register", 
    description: "Register for an account"
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <body>{children}</body>
    </main>
  );
}