import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>About</h1>
     
      <Link href={"about/informationtechnology"} className="bg-white text-black rounded-md text-sm pl-4 pr-4 mt-3 mb-3">Information Technology</Link>
      <br />
      <Link href={"/"}> Home</Link>
    </div>
  )
}

export default page
