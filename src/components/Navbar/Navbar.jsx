import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="nav-link"><span className='text-primary f-1 fw-bolder'>Task</span> App <span className='text-success'>✔</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link  className="nav-link" to="/show-task">Show tasks</Link>
        <Link className="nav-link" to="/add-task">Add tasks</Link>

      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
