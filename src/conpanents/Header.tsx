import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// Active bo'lgan  linkni pastiga chiqiq chizish
// useLOcation bilan qilinadi
export default function Header() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <header className='flex justify-between items-center py-6 px-4 '>
        <Link className='font-bold' to={'/'}>#VanLife</Link>

        <nav className='flex gap-4'>
            <Link className={`${location === "/about" ? 'underline' : ''}`} to={`/about`}>About</Link>
            <Link className={`${location === '/vans' ? 'underline' : ''}`} to="/vans">Vans</Link>
        </nav>
    </header>
  )
}
