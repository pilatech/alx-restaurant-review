import React from 'react'
import Link from 'next/link'
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="main-nav">
            <div className="container flex main-nav-container">
            <Link className="logo" href="/">
                Restaurants Review
            </Link>

            <ul className="nav-menu">
                <li className="nav-menu-item">
                    <Link href="/restaurants">Review</Link>
                </li>
                <li className="nav-menu-item">
                    <Link href="/register">Register</Link>
                </li>
                <li className="nav-menu-item">
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
