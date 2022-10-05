import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <Link href="/">
            <a>Post</a>
          </Link>
        </div>
      </section>
    </nav>
  )
}
