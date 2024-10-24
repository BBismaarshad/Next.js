import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My page</h1>
      <Link href={"about"} className="bg-white text-black rounded-md text-sm pl-4 pr-4 mt-3 mb-3 ">About</Link> <br />
      <Link href={"contact"} className="bg-white text-black rounded-md text-sm pl-4 pr-4 mt-3 mb-3">Contact</Link>
      
      
    </div>
  );
}
