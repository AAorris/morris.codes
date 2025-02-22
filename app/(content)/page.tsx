import { Bell, ToggleRight, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="subNav">
        <h1>Timeline</h1>
      </div>
      <article className="border">
        <header>
          <User />
          <h2>About</h2>
        </header>
        <p>
          I'm Aaron Morris. I live in Canada with my wife and two kids. I work
          for <a href="https://vercel.com">Vercel</a> as a Full Stack Engineer.
        </p>
      </article>
      <article className="border">
        <header>
          <ToggleRight />
          <h2>Flags SDK</h2>
          <time dateTime="2025-02-20">Feb 2025</time>
        </header>
        <p>
          I helped ship the <a href="https://flags-sdk.dev">Flags SDK</a>
        </p>
      </article>
      <article className="border">
        <time dateTime="2025-02-09">Feb 2025</time>
        <Image
          priority
          src="https://av4h4gua5d07fb3t.public.blob.vercel-storage.com/life/2025-02-09-grGBz3jYVRscdBEqCSebOlvwXf02Am.jpg"
          alt="Kiddos"
          width={3430}
          height={1575}
          quality={10}
        />
      </article>
      <article className="border">
        <header>
          <Bell />
          <h2>Notifications on the Vercel Dashboard</h2>
          <time dateTime="2022-12-16">Dec 2022</time>
        </header>
        <p>
          I shipped notifications on the Vercel dashboard.{" "}
          <a href="https://vercel.com/blog/building-a-powerful-notification-system-for-vercel-with-knock-app">
            Read about it
          </a>
        </p>
      </article>
      <article className="border">
        <time dateTime="2020-06-20">Jun 2020</time>
        <Image
          src="https://av4h4gua5d07fb3t.public.blob.vercel-storage.com/life/2020-06-20-bride-wide-7JUd4AJOCR5AHkacGuzI5oELM2YvYw"
          width={4192}
          height={1868}
          alt="Married"
          quality={10}
        />
      </article>
      <footer className="px-[32px] py-[80px]">
        <p>
          Connect with me on
          <span className="flex flex-wrap gap-[8px]">
            <a href="https://www.linkedin.com/in/AAorris">LinkedIn</a>
            <a href="https://x.com/AAorris">X</a>
            <a href="https://github.com/AAorris">GitHub</a>
          </span>
        </p>
      </footer>
    </>
  );
}
