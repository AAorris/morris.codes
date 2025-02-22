import { Nav } from "@/components/app/nav"

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section id="admin" className="max-w-screen-lg mx-auto">
      <div className="p-[32px] flex flex-col gap-[16px]">
        <Nav />
      </div>
      {children}
    </section>
  );
}