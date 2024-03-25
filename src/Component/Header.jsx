import React from 'react'
import Logo from '../assets/emergencylogo.png'
function Header() {
    return (
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/">RCR<img src={Logo} alt="Logo" srcSet="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        
        
      </ul>
      <a href="/contact" className="btn btn-danger">Report a Crime</a>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header                                                  