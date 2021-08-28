import React from 'react'
import './styles.css'
import logo from '../Assets/Group 241.png'

const Navbar = () => {
    return (
        <>
            <div className="bg_repeat text-dark">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="94" height="53" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                        <ul className="row nav_list "> 
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Industries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>

    )
}

export default Navbar
