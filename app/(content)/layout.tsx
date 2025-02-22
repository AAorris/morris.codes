import { Nav } from "@/components/app/nav"
import './content.css';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-screen-lg mx-auto">
      <Nav />
      {children}
    </main>
  );
}