import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      {<Link to='test'>Test</Link>}
      {/* <Link to='board'>Board</Link> */}
      {/* <Link to='project'>Project</Link> */}
      <Link to='about'>About</Link>
    </nav>
  )
}

export default Nav