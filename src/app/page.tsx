import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="">Contact Me</Link>
        </li>
      </ul>
    </main>
  );
}
