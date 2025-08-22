export const metadata = {
  title: "Painting",
  description: "Explore the world of painting",
};

export default function PaintingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="painting-layout">
      {children}
    </div>
  );
}
