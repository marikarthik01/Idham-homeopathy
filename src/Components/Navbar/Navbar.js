import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import Logo from '../Images/idhamhomeo-logo.png'

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick=()=>setClick(!click);
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
                            <div class="top_bar_contact_item font-weight-bold ms-auto">
                                 <div class="social-icons">
                                    <ul class="list-inline d-flex">
                                        <li>
                                            <a target="_blank"  href="#" rel="noopener" aria-label="facebook"><i class="fa fa-facebook 2x"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="#" rel="noopener" aria-label="twitter"><i class="fa fa-twitter 2x"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="#" rel="noopener" aria-label="instagram"><i class="fa fa-instagram 2x"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="#" rel="noopener" aria-label="linkedin"><i class="fa fa-linkedin-square 2x"></i></a>
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
         <ul className={click ? "nav-menu active" :"nav-menu"}>
             <li className="nav-item">
                 <a href="" activeClassName="active" className="nav-links">Home</a>
             </li>
             <li className="nav-item">
                 <a href="" activeClassName="active" className="nav-links">About Us</a>
             </li>
             <li className="nav-item">
                 <a href="" activeClassName="active" className="nav-links">About Homeopathy</a>
             </li>
             <li className="nav-item">
                 <a href="" activeClassName="active" className="nav-links">Diseases & Treatment</a>
             </li>
             <li className="nav-item">
                 <a href="" activeClassName="active" className="nav-links">Services</a>
             </li>
             <li className="nav-item">
                 <a href="" activeClassName="active"  className="nav-links">Contact Us</a>
             </li>
         </ul>
      </div>

   </nav>
   </>
  )
}

export default Navbar