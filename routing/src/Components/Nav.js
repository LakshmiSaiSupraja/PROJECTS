import React from 'react'
import { Link } from 'react-router-dom'
import "../Components/styling.css"


function NavBarr() {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-dark navbar-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to={"/"}className={'navitem'}>Home </Link>
      </li>
     <li class="nav-item">
     <Link to={"/about"}className={'navitem'}>About</Link>      
     </li>
      <li class="nav-item">
      <Link to={"/blog"}className={'navitem'}>Blog</Link>
      </li>
      <li class="nav-item">
      <Link to={"/register"}className={'navitem'}>Register</Link>
      </li>
      <li class="nav-item">
      <Link to={"/login"}className={'navitem'}>Login</Link>
      </li>
      <li class="nav-item">
      <Link to={"/contact"}className={'navitem'}>Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</>
  )
}

export default NavBarr