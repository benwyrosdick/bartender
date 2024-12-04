import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="bg-info mb-4">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a
          href="/"
          className="text-decoration-none text-white"
        >
          {siteTitle}
        </a>
      </h1>
    </div>
  </header>
)

export default Header
