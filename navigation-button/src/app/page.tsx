"use client";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>my page</h1>
      {/* <Link href="/about">go to about page</Link>
      <br />
      <Link href="/contact">go to contact page</Link> */}
      <button
        onClick={() => router.push("/about")}
        className="bg-orange-50 rounded-xl text-black pb-5 h-5 w-20 text-sm"
      >
        {" "}
        about 
      </button>

      <br />
      <button
        onClick={() => router.push("/contact")}
        className="bg-orange-50 rounded-xl text-black pb-5 h-5 w-20 text-sm"
      >
      contact 
      </button>
    </div>
  );
}
