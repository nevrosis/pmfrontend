import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  // console.log("rendering Nav");
  return (
    <nav>
      <Link to='/'>Home</Link>
      {/* <Link to='content'>Content</Link> */}
      <Link to='company'>Company</Link>
      {/* <Link to='project'>Project</Link> */}
      <Link to='about'>About</Link>
    </nav>
  )
}

export default Nav