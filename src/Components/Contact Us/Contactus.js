import React from 'react'
import Pagetitle from '../Page Title/Pagetitle'
import './Contactus.css'

function Contactus() {
  return (
    <>
    <Pagetitle title="Contact Us" />
    <div class="site-main">

        <section class="ttm-row bg-layer  bg-layer-equal-height res-991-p-0 clearfix">
            <div class="container">
                <div class="row g-0">
                    <div class="col-lg-5 left-div">
                       
                        <div class="ttm-col-bgcolor-yes contact-sec ttm-bg ttm-bgcolor-skincolor ttm-textcolor-white spacing-7">
                            <div class="ttm-col-wrapper-bg-layer  ttm-bg-layer"></div>
                            <div class="layer-content">
                                <h3 class="fs-30 cont-title">Do You want to Reach Us</h3>
                                <p class="fs-14 cont-title" id="con-des">Book a Appointment by Visiting or calling Us!</p>
                                <div class="sep_holder_box width-100 pt-20 mb-35">
                                    <span class="sep_holder"><span class="sep_line"></span></span>
                                    <span class="sep_holder"><span class="sep_line"></span></span>
                                </div>

                                
                                <div class="featured-icon-box icon-align-before-content style9">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h3>Saradha College Road,<br/> Sixer Complex, <br/>Groung Floor,<br/> Near Bharath Petrol Bunk, </h3>
                                            <span>Salem -7.</span>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="featured-icon-box icon-align-before-content style9">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                                            <i class="fa fa-envelope-o"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h3>info@domainname.com</h3>
                                            <span>Need support? Drop us an email</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="featured-icon-box icon-align-before-content style9">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                                                <i class="fa fa-phone"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h3>+91 99448 44408</h3>
                                            <span>Have a question? call us now</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="featured-icon-box icon-align-before-content style9">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                                            <i class="fa fa-clock-o"></i>
                                        </div>
                                    </div>
                                    <div class="featured-content">
                                        <div class="featured-title">
                                            <h3>10.30AM - 1.00PM. <br/>5.00PM - 8.00PM </h3>
                                            <span>We are open on (Mon – Sat)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="sep_holder_box width-100 padding_top20 margin_bottom30">
                                    <span class="sep_holder"><span class="sep_line"></span></span>
                                    <span class="sep_holder"><span class="sep_line"></span></span>
                                </div>
                                <div class="social-icons circle social-hover">
                                    <ul class="list-inline">
                                        <li class="social-facebook"><a class="tooltip-top" target="_blank" href="#" data-tooltip="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li class="social-twitter"><a class="tooltip-top" target="_blank" href="#" data-tooltip="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li class="social-gplus"><a class=" tooltip-top" target="_blank" href="#" data-tooltip="Google+"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li class="social-linkedin"><a class=" tooltip-top" target="_blank" href="" data-tooltip="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                       <div class="ttm-col-bgcolor-yes ttm-bg right-div ttm-bgcolor-grey spacing-7">
                            <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            
                            <div class="section-title">
                                <div class="title-header form-head">
                                    <h3>WHAT WE DO</h3>
                                    <h2 class="title">Get In <b> Touch </b> </h2>
                                </div>
                                <div class="title-desc">
                                    <p class="pr-0 cont-desc">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievpatients for recovery</p>
                                </div>
                            </div>


                            <form id="ttm-contactform" class="ttm-contactform wrap-form clearfix" method="post" action="#">
                                <label>
                                    <span class="text-input"><i class="ttm-textcolor-skincolor con-ic fa fa-user"></i><input name="your-name" type="text" value="" placeholder="Your Name" required="required"/></span>
                                </label>
                                <label>
                                    <span class="text-input"><i class="ttm-textcolor-skincolor con-ic fa fa-mobile"></i><input name="your-phone" type="text" value="" placeholder="Cell Phone" required="required"/></span>
                                </label>
                                <label>
                                    <span class="text-input"><i class="ttm-textcolor-skincolor con-ic fa fa-envelope-o"></i><input name="email" type="email" value="" placeholder="Email" required="required"/></span>
                                </label>
                                <label>
                                    <span class="text-input"><i class="ttm-textcolor-skincolor con-ic fa fa-map-marker"></i><input name="venue" type="text" value="" placeholder="Venue" required="required"/></span>
                                </label>
                                <label>
                                    <span class="text-input"><i class="ttm-textcolor-skincolor con-ic fa fa-comment"></i><textarea name="message" cols="40" rows="3" placeholder="Message" required="required"></textarea></span>
                                </label>
                                <input name="submit" type="submit" id="submit" class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor" value="Send Message"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        <div class="map-wrapper">
            
             
        </div>


    </div>
    </>
  )
}

export default Contactus