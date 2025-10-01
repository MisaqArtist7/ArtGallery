import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Painting",
  description: "Explore the world of painting",
};

export default function PaintingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
