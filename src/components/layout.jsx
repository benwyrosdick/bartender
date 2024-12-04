import React from 'react'

import Header from './header'

const Layout = ({ children }) => (
  <>
        <Header siteTitle='BarTender' />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © 2022
          </footer>
        </div>
      </>
)

export default Layout
