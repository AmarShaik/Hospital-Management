import React from 'react'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound-root">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>We couldn't find the page you're looking for. Try returning home or check the URL.</p>
        <div className="notfound-actions">
          <a className="btn primary" href="/">Go home</a>
        </div>
      </div>
    </div>
  )
}
