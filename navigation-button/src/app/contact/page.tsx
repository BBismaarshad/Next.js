"use client";
import React from "react";
// import Link from 'next/link'
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Us</h1>
      {/* <Link href="/">home page</Link> */}
      <button
        onClick={() => router.push("/")}
        className="bg-orange-50 rounded-xl text-black pb-5 h-5 w-20 text-sm"
      >
        Home page
      </button>
    </div>
  );
};

export default page;
