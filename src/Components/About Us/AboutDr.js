import React from 'react'
import './AboutDr.css';
import team1 from '../Images/team1.jpg';


function AboutDr() {
  return (
    <>
     <section class="ttm-row team-section padding_bottom60 clearfix">
                <div class="container">
                   
                    <div class="row">
                        <div class="col-lg-10 col-md-12">
                         
                            <div class="section-title dr-head">
                                <div class="title-header">
                                    <h3>MEET OUR EXPERIENCED TEAM</h3>
                                    <h2 class="title">Our Dedicated Doctors <b>  Team </b></h2>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div class="row doctor slick_slider team" >

                    
                    <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                        <div class="featured-imagebox featured-imagebox-team style1" id="doctor-1">
                           <div class="featured-thumbnail">
                                <picture>
                                    
                                    <img class="img-fluid" src={team1} width="370" height="380" alt="Doctor"/>
                                </picture>  
                            </div>
                            <div class="featured-content featured-content-team">
                                <div class="featured-iconbox ttm-media-link">
                                    <div class="media-block">
                                        <a href="doctordetail.html" rel="noopener" aria-label="team" class="media-btn"><i class="fa fa-plus"></i></a>
                                        <ul class="social-icons list-inline">
                                            <li class="social-facebook">
                                                <a href="https://www.facebook.com/themetechMount18" rel="noopener" aria-label="facebook">
                                                    <i class="ti ti-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="social-twitter">
                                                <a href="https://twitter.com/themetechmount" rel="noopener" aria-label="twitter">
                                                    <i class="ti ti-twitter-alt"></i>
                                                </a>
                                            </li>
                                            <li class="social-instagram">
                                                <a href="https://www.instagram.com/theme_tech_mount/" rel="noopener" aria-label="instagram"><i class="ti ti-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-position">Homeo Specialist</div>
                                <div class="featured-title">
                                    <h3><a  href="doctordetail.html" className="drname">Dr.Jyothi T.N <span class="team-position">B.H.M.S M.Sc Yoga</span></a></h3>
									
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                        <div class="featured-imagebox featured-imagebox-team style1 drtwo" id="doctor-2">
                           <div class="featured-thumbnail">
                                <picture>
                                  <img class="img-fluid" src={team1} width="370" height="380" alt="Doctor"/>
                                </picture> 
                            </div>
                            <div class="featured-content featured-content-team">
                                <div class="featured-iconbox ttm-media-link">
                                    <div class="media-block">
                                        <a href="doctordetail.html" rel="noopener" aria-label="team" class="media-btn"><i class="fa fa-plus"></i></a>
                                        <ul class="social-icons list-inline">
                                            <li class="social-facebook">
                                                <a href="https://www.facebook.com/themetechMount18" rel="noopener" aria-label="facebook">
                                                    <i class="ti ti-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="social-twitter">
                                                <a href="https://twitter.com/themetechmount" rel="noopener" aria-label="twitter">
                                                    <i class="ti ti-twitter-alt"></i>
                                                </a>
                                            </li>
                                            <li class="social-instagram">
                                                <a href="https://www.instagram.com/theme_tech_mount/" rel="noopener" aria-label="instagram"><i class="ti ti-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team-position">Homeo Specialist</div>
                                <div class="featured-title">
                                    <h3><a href="doctordetail.html" className="drname">Dr. Karthikeyan <span class="team-position">B.H.M.S M.Sc PSY</span></a></h3>
                                </div>
                            </div>
                        </div>						
                    </div>
					
                    </div>
                </div>
            </section>
    </>
  )
}

export default AboutDr