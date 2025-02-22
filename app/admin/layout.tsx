import { Nav } from "@/components/app/nav"
import { adminFlag } from "@/flags";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const isAdmin = await adminFlag();
  if (!isAdmin) {
    redirect("/404");
  }
  return (
    <section id="admin" className="max-w-screen-lg mx-auto">
      <div className="p-[32px] flex flex-col gap-[16px]">
        <Nav />
      </div>
      {children}
    </section>
  );
}