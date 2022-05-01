import React from 'react'
import location from '../Images/location-icon.png';
import email from '../Images/email-icon.png';
import idham_logo_footer from '../Images/idham_logo_footer.png';
import clock from '../Images/clock-icon.png';
import './Footer.css';

function Footer() {
  return (
    <>
    <footer class="footer widget-footer clearfix">
        <div class="first-footer ttm-bgcolor-skincolor">
            <div class="container">
                <div class="row">
                    <div class="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <aside class="widget widget-text">
                           
                            <div class="featured-icon-box icon-align-before-content style3">
                                <div class="featured-icon">
                                    <img class="img-fluid" src={location} width="35" height="35" alt="image"/>
                                </div>
                                <div class="featured-content">
                                    <div class="featured-title">
                                        <h3>Location</h3>
                                        <span>Saradha College Road, Sixer Complex, <br/>Ground Floor, Near Bharath Petrol Bunk, Salem -7.</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <aside class="widget widget-text">
                            
                            <div class="featured-icon-box icon-align-before-content style3">
                                <div class="featured-icon">
                                     <img class="img-fluid" src={clock} width="35" height="35" alt="image"/>
                                </div>
                                <div class="featured-content">
                                    <div class="featured-title">
                                        <h3>Office Hours</h3>
                                        <span>10.30AM - 1.00PM. <br/>5.00PM - 8.00PM (Mon_Sat)</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="widget-area col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <aside class="widget widget-text">
                          
                            <div class="featured-icon-box icon-align-before-content style3">
                                <div class="featured-icon">
                                    <img class="img-fluid" src={email} width="35" height="35" alt="image"/>
                                </div>
                                <div class="featured-content">
                                    <div class="featured-title">
                                        <h3>Mail Us</h3>
                                        <span>info@idhamhomeoclinics.com</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        
          
        <div class="second-footer ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey">
             <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
                <div class="ttm-bg-layer-inner"></div>
            </div>
            <div class="layer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                            <div class="widget widget_text clearfix">
                                <div class="footer-logo margin_bottom15">
                                   <img id="logo-img-1" class="img-center standardlogo img-fluid" src={idham_logo_footer} width="342" height="92" alt="logo-img"/>
                                </div>
                                <div class="textwidget widget-text ">
								 <p>Our Clinic has grown to provide a world class facility for the clinic advanced dentistry.</p>
                                    <p>For Enquiry or Appointment</p>
                                    <h3 class="mb-15">+91 99448 44408</h3>
                                    
                                </div>
                                <div class="social-icons social-hover">
                                    <ul class="list-inline social_icon">
                                        <li class="social-facebook">
                                            <a target="_blank" href="#" rel="noopener" aria-label="facebook"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li class="social-twitter">
                                            <a target="_blank" href="#" rel="noopener" aria-label="facebook"><i class="fa fa-twitter"></i></a>
                                        </li>
                                        <li class="social-gplus">
                                            <a target="_blank" href="#" rel="noopener" aria-label="facebook"><i class="fa fa-google-plus"></i></a>
                                        </li>
                                        <li class="social-linkedin"><a target="_blank" href="#" rel="noopener" aria-label="facebook">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                            <div class="widget widget_nav_menu clearfix">
                                <h3 class="widget-title ttm-textcolor-skincolor" id="links">Quick Links</h3>
                                <ul>
                                    <li><a href="contact-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">About Homeopathy</a></li>
                                    <li><a href="services-1.html">Diseases & Treatment</a></li>
                                    <li><a href="team-details.html">Services</a></li>
                                    <li><a href="blog-grid.html">Contact Us</a></li>
                               </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                            <div class="widget style2 widget-out-link clearfix">
							 <h3 class="widget-title ttm-textcolor-skincolor " id="links">Location Map</h3>
                             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2537352320073!2d78.148687314809!3d11.67642149171468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b5cf76d97d%3A0xc5bc1b16e7dc4f01!2sIDHAM%20HOMOEOPATHY%20CLINIC%20SALEM!5e0!3m2!1sen!2sin!4v1650350460908!5m2!1sen!2sin"
              width="450"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
							
							
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-footer-text ttm-textcolor-white">
            <div class="container">
                <div class="row copyright">
                    <div class="col-md-12">
                        <span>Copyright © 2022 Idham Homeopathy. All rights reserved.</span> Developed by <a href="https://www.aatheshsoft.com" class="ttm-textcolor-skincolor">Aatheshsoft</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
    
    </>
  )
}

export default Footer