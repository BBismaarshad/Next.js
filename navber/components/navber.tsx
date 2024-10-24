import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between px-4 bg-green-800 text-kelly green py-4'>
      <div className="logo font-bold">MY APP</div>
      <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
