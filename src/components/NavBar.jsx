import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const loc = useLocation()
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link className="brand" to="/">DocSys</Link>
        <div className="nav-links">
          <Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={loc.pathname === '/doctors' ? 'active' : ''} to="/doctors">Doctors</Link>
          <Link className={loc.pathname === '/patients' ? 'active' : ''} to="/patients">Patients</Link>
        </div>
      </div>
    </nav>
  )
}
