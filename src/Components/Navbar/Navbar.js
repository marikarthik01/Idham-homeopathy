import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../Images/idhamhomoeo-logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (

        <>
            <div class="top_bar ttm-bgcolor-skincolor clearfix">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-md-12 d-flex flex-row align-items-center justify-content-center">
                            <div class="top_bar_contact_item">
                                <div class="top_bar_icon"><i class=""></i></div>Saradha College Road, Salem -7.
                            </div>
                            <div class="top_bar_contact_item font-weight-bold">
                                <div class="top_bar_icon"><i class=""></i>
                                </div>  (Mon - Sat) 10.30AM - 1.00PM. 5.00PM - 8.00PM Sunday Closed
                            </div>
                            <div class="btn-show-menu-mobile menubar menubar--squeeze">
                                <span class="menubar-box">
                                    <span class="menubar-inner"></span>
                                </span>
                            </div>
                            <div class="top_bar_contact_item font-weight-bold ms-auto">
                                <div class="social-icons">
                                    <ul class="list-inline d-flex">
                                        <li>
                                            <Link target="_blank" to="#" rel="noopener" aria-label="facebook"><i class="fa fa-facebook 2x"></i></Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="#" rel="noopener" aria-label="twitter"><i class="fa fa-twitter 2x"></i></Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="#" rel="noopener" aria-label="instagram"><i class="fa fa-instagram 2x"></i></Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="#" rel="noopener" aria-label="linkedin"><i class="fa fa-linkedin-square 2x"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                    <div className="nav-logo">
                        <img className="logo" src={Logo} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" activeClassName="active" className="nav-links">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" activeClassName="active" className="nav-links">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutHomeo" activeClassName="active" className="nav-links">About Homeopathy</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/DiseasesTreatment" activeClassName="active" className="nav-links">Diseases & Treatment</Link>
                            <div className="dropdown-content">
                                <Link activeClassName="active" to="/BeforeAfter" >Treatment Before After</Link>
                            </div>
                        </li>
                        <li className="nav-item nav-drodown">
                            <Link to="/BeforeAfter" activeClassName="active" className="nav-links">Treatment Before After</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" activeClassName="active" className="nav-links">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Blog" activeClassName="active" className="nav-links">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Contactus" activeClassName="active" className="nav-links">Contact Us</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar