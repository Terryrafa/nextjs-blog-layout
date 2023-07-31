import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='navbar'>
        <p className='logo'><strong>Raff Code's</strong></p>
        <div>
          <Link href="/">
            <p className='navitem hover:scale-105 duration-300 hover:ease-in-out'>Home</p>
          </Link>
        </div>
    </div>
  )
}
