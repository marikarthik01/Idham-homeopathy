import React, { useState } from 'react';
import './About.css';
import aboutimg from '../Images/aboutimg.png';
import CountUp from 'react-countup';
import Accordion from './Accordion';
import AboutDr from './AboutDr';
import Pagetitle from '../Page Title/Pagetitle';

function About() {

    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <Pagetitle title="About Us" />
        <section class="ttm-row padding_zero-section bg-layer break-1199-colum clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-12">
                            
                            <div class="ttm-col-bgcolor-yes ttm-bg ttm-left-span padding_top90 padding_bottom90 res-991-pt-60 res-991-pb-60">
                                <div class="ttm-col-wrapper-bg-layer ttm-bg-layer bgcolor-grey img-left"></div>
                                <div class="layer-content">
                                    <div class="ttm_single_image-wrapper mr_240 res-1199-mr-0">
                                        <img class="img-fluid dr-img" src={aboutimg} alt="single-img-03"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-10 col-md-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-4"></div>
                                <div class="col-lg-9 col-md-8">
                                    <div class="padding_top100 padding_bottom30  res-1199-plr-0 res-991-pt-60">
                                       
                                        <div class="section-title">
                                            <div class="title-header about-head">
                                                <h3>WHAT WE DO</h3>
                                                <h2 class="title">We Have 25 Years Experience </h2>
                                            </div>
                                            <div class="title-desc">
                                                <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery</p>
                                            </div>
                                        </div>
                                       
                                       <Accordion title="Our Mission" content="Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience."/>
                                       <Accordion title="Our Vision" content="Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience."/>
                                       <Accordion title="Our Stratagies" content="Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience."/>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ttm-row padding_zero-section bg-img4 ttm-bg ttm-bgimage-yes ttm-bgcolor-skincolor clearfix">
                <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                <div class="container">
                    <div class="row ttm-facts-colum-sep">
                        <div class="col-md-3 col-sm-6">
                            <div class="ttm-fid inside ttm-fid-view-topicon">
                                <div class="ttm-fid-icon-wrapper"><i class="fa fa-user-o"></i></div>
                                <div class="ttm-fid-contents">
                                    <h4><span>
                                        <CountUp end={3000} duration={5}/>
                                        </span>
                                    </h4>
                                    <h3 class="ttm-fid-title"><span>Happy Customers<br/></span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="ttm-fid inside ttm-fid-view-topicon">
                                <div class="ttm-fid-icon-wrapper"><i class="fa fa-hospital-o"></i></div>
                                <div class="ttm-fid-contents">
                                    <h4><span><CountUp end={152} />
                                        </span>
                                    </h4>
                                    <h3 class="ttm-fid-title"><span>Hospitals Rooms<br/></span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="ttm-fid inside ttm-fid-view-topicon">
                                <div class="ttm-fid-icon-wrapper"><i class="fa fa-heartbeat"></i></div>
                                <div class="ttm-fid-contents">
                                    <h4><span><CountUp end={30} />
                                        </span>
                                    </h4>
                                    <h3 class="ttm-fid-title"><span>Years of Experiance<br/></span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="ttm-fid inside ttm-fid-view-topicon">
                                <div class="ttm-fid-icon-wrapper"><i class="fa fa-thumbs-o-up"></i></div>
                                <div class="ttm-fid-contents">
                                    <h4><span><CountUp end={124} />
                                        </span>
                                    </h4>
                                    <h3 class="ttm-fid-title"><span>Qualified Staffs<br/></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutDr />
           
    </>
  )
}

export default About