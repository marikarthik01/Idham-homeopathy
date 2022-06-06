import React, { useEffect, useState } from 'react'
import './Home.css'
import CountUp from 'react-countup';
import Banner1 from '../Images/banner1.jpg';
import Banner2 from '../Images/banner2.jpg';
import Banner3 from '../Images/banner3.jpg';
import About from '../Images/about.png';
import Kneepain from '../Images/knee-pain.jpg';
import treatment2 from '../Images/treatment2.jpg';
import backpain from '../Images/back-pain.jpg';
import treatment1 from '../Images/treatment1.jpg';
import playicon from '../Images/play-icon.png';
import AboutDr from '../About Us/AboutDr';
import highbp from '../Images/high-bp.jpg';
import testimonial from '../Images/testimonial.jpg';
import idhamhomeologo from '../Images/idhamhomeo-logo.png';
import team1 from '../Images/team1.jpg';
import axios from "axios"


function Home() {

  const [banner, setBanner] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [postid, setPostId] = useState('');

  // const data = { 
  //   banner, 
  //   name, 
  //   text 
  // };

//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };
//     console.log("hello");
//     fetch('http://idhamhomeoclinics.com/idham/customerapp/banner.php{"keyword":"uHvKHZU1XEndoBn4/ImlPQVySl4vnihFTJl8g/jvN0k="}', requestOptions)
//         .then(response => console.log(response.json()))
//         .then(data => setPostId(data.id));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);




  useEffect(() => {

    const data = { name: 'name', text: 'text' };

    const requestOptions = {
      method: 'POST',
      mode:'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    // fetch('http://idhamhomeoclinics.com/idham/customerapp/banner.php', requestOptions)
    //     .then(response => {
    //       console.log("Status: ", response.status);
    //       console.log("Data: ", response.data);
    //     }).catch(error => {
    //       console.error('Something went wrong!', error);      
    //     });
    
   

    axios.post('http://idhamhomeoclinics.com/idham/customerapp/banner.php', requestOptions)
      .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      }).catch(error => {
        console.error('Something went wrong!', error);      
      });

  }, []);


  return (
    <>
      <div className="slider-div">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-caption d-none d-md-block">
                <p id="slide-content">IDHAM HOMEOPATHY.</p>
                <h1 className="slide-title"><b >100% Safe & Secure</b></h1>
              </div>
              <img class="d-block w-100" src={Banner1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Banner2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Banner3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <section class="ttm-row padding_top_zero-section feature-section ttm-bgcolor-grey  clearfix">
        <div class="container">

          <div class="row">
            <div class="col-lg-12">
              <div class="mt_90 res-991-mt-0">
                <div class="row">
                  <div class="col-lg-4 col-md-12 col-sm-12 feature-div">

                    <div class="featured-icon-box icon-align-top-content box-shadow style1">
                      <div class="featured-icon">
                        <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          {/* <i class="flaticon flaticon-charity"></i> */}
                        </div>

                      </div>
                      <div class="featured-content">
                        <div class="featured-title">
                          <h3>Diseases</h3>
                        </div>
                        <div class="ttm-boxbg-icon">
                          <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-darkgrey">
                            <i class="fa fa-thermometer-half f-icon"></i>
                          </div>
                        </div>
                        <div class="featured-desc">
                          A common way to replace missing teeth. They look and feel just like natural teeth because of the way fitted
                        </div>
                        <a class="ttm-btn btn-inline  ttm-icon-btn-right ttm-btn-color-dark ttm-btn-size-md" href="#">know more<i class="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">

                    <div class="featured-icon-box icon-align-top-content box-shadow style1">
                      <div class="featured-icon">
                        <div class="ttm-icon ttm-icon_element-onlytxt icon-div ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          {/* <i class="fa fa-heartbeat f-icon"></i> */}
                        </div>

                      </div>
                      <div class="featured-content">
                        <div class="featured-title">
                          <h3>Treatments</h3>
                        </div>
                        <div class="ttm-boxbg-icon">
                          <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-darkgrey">
                            <i class="fa fa-thermometer-half f-icon"></i>
                          </div>
                        </div>
                        <div class="featured-desc">
                          It is process that will make teeth appear whiter. Removal of the stain or chemical reaction lighten tooth color
                        </div>
                        <a class="ttm-btn btn-inline  ttm-icon-btn-right ttm-btn-color-dark ttm-btn-size-md" href="#">know more<i class="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">

                    <div class="featured-icon-box icon-align-top-content box-shadow style1">
                      <div class="featured-icon">
                        <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          {/* <i class="fa fa-hospital-o f-icon"></i> */}
                        </div>

                      </div>
                      <div class="featured-content">
                        <div class="featured-title">
                          <h3>Online Treatments</h3>
                        </div>
                        <div class="ttm-boxbg-icon">
                          <div class="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-darkgrey">
                            <i class="fa fa-heartbeat f-icon"></i>
                          </div>
                        </div>
                        <div class="featured-desc">
                          The bond is a composite resin the takes over where your tooth broke to make it look as good as new teeth
                        </div>
                        <a class="ttm-btn btn-inline  ttm-icon-btn-right ttm-btn-color-dark ttm-btn-size-md" href="#">know more<i class="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="ttm-row aboutus-section ttm-bgcolor-white clearfix">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="padding_right35 res-991-padding_right0">

                <div class="section-title clearfix">
                  <div class="title-header">
                    <h3>ABOUT US</h3>
                    <h2 class="title">Idham <br />Homeopathy Clinic</h2>
                    <div class="title-desc">
                      Idham Homeo Clinic give treatment for 100% safe and secure.
                    </div>
                    <h3 class="title">Why Idham Clinic ?</h3>
                    <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey"><a className="about-text" href="treatment.html">12 yrs Experience in Homeopathic, Hospital.</a></span></li>
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">100% Natural Medicines</span></li>
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Online Consultation Available, Medicines</span></li>
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Best Patient Care</span></li>
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">100% Safe & No Side Effects</span></li>
                      <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Clinic-Registered Under Tamilnadu Clinical Establishment Act 1997.</span></li>

                    </ul>
                  </div>

                </div>
                <div class="ttm-horizontal_sep w-100 margin_bottom35">
                </div>
                <a class="ttm-btnn ttm-btn-size-md  ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor" href="services.html">know more!</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="ttm_single_image-wrapper padding_right30 margin_top70 res-991-pr-0">
                <img class="img-fluid" src={About} title="single-img-01" alt="single-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ttm-row services-section bg-img1 ttm-bg ttm-bgimage-yes clearfix">
        <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
        <div class="container">

          <div class="row">
            <div class="col-lg-12">

              <div class="section-title title-style-center_text">
                <div class="title-header">
                  <h3>TREATMENTS</h3>
                  <h2 class="title">Available Treatments <br /> for Homoeopathy Needs</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

              <div class="featured-imagebox featured-imagebox-portfolio ttm-box-view-top-image">
                <div class="ttm-box-view-content-inner">

                  <div class="featured-thumbnail">
                    <a href="#"> <img class="img-fluid" src={treatment1} alt="image" /></a>
                  </div>
                  <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                    <div class="featured-iconbox ttm-media-link">
                      <a class="ttm_prettyphoto ttm_image" title="Fitness Guidance to Patient" data-rel="prettyPhoto" href="images/treatment1.jpg">
                        <i class="ti ti-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ttm-box-bottom-content featured-content-portfolio box-shadow">
                  <div class="featured-title">
                    <h3><a href="single-style-1.html">Diabetes</a></h3>
                  </div>
                  <span class="category">
                    <a href="treatment.html">Idham Homoeopathy</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

              <div class="featured-imagebox featured-imagebox-portfolio ttm-box-view-top-image">
                <div class="ttm-box-view-content-inner">

                  <div class="featured-thumbnail">
                    <a href="#"> <img class="img-fluid" src={treatment2} alt="image" /></a>
                  </div>
                  <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                    <div class="featured-iconbox ttm-media-link">
                      <a class="ttm_prettyphoto ttm_image" title="Fitness Guidance to Patient" data-rel="prettyPhoto" href="images/treatment2.jpg">
                        <i class="ti ti-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ttm-box-bottom-content featured-content-portfolio box-shadow">
                  <div class="featured-title">
                    <h3><a href="single-style-1.html">Thyroid Disorders</a></h3>
                  </div>
                  <span class="category">
                    <a href="treatment.html">Idham Homoeopathy</a>
                  </span>
                </div>
              </div>
            </div>

            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

              <div class="featured-imagebox featured-imagebox-portfolio ttm-box-view-top-image">
                <div class="ttm-box-view-content-inner">

                  <div class="featured-thumbnail">
                    <a href="#"> <img class="img-fluid" src={Kneepain} alt="image" /></a>
                  </div>
                  <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                    <div class="featured-iconbox ttm-media-link">
                      <a class="ttm_prettyphoto ttm_image" title="Diagnostic Imagine" data-rel="prettyPhoto" href="images/knee-pain.jpg">
                        <i class="ti ti-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ttm-box-bottom-content featured-content-portfolio box-shadow">
                  <div class="featured-title">
                    <h3><a href="portfolio-style-3.html">Joint Pain</a></h3>
                  </div>
                  <span class="category">
                    <a href="treatment.html">Idham Homoeopathy</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

              <div class="featured-imagebox featured-imagebox-portfolio ttm-box-view-top-image">
                <div class="ttm-box-view-content-inner">

                  <div class="featured-thumbnail">
                    <a href="#"> <img class="img-fluid" src={backpain} alt="image" /></a>
                  </div>
                  <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                    <div class="featured-iconbox ttm-media-link">
                      <a class="ttm_prettyphoto ttm_image" title="Orthodontics Surgery &amp; Transplants" data-rel="prettyPhoto" href="images/back-pain.jpg">
                        <i class="ti ti-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ttm-box-bottom-content featured-content-portfolio box-shadow">
                  <div class="featured-title">
                    <h3><a href="portfolio-style-3.html">Back Pain</a></h3>
                  </div>
                  <span class="category">
                    <a href="treatment.html">Idham Homoeopathy</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

              <div class="featured-imagebox featured-imagebox-portfolio ttm-box-view-top-image">
                <div class="ttm-box-view-content-inner">

                  <div class="featured-thumbnail">
                    <a href="#"> <img class="img-fluid" src={highbp} alt="image" /></a>
                  </div>
                  <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                    <div class="featured-iconbox ttm-media-link">
                      <a class="ttm_prettyphoto ttm_image" title="Orthodontics Surgery &amp; Transplants" data-rel="prettyPhoto" href="images/high-bp.jpg">
                        <i class="ti ti-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="ttm-box-bottom-content featured-content-portfolio box-shadow">
                  <div class="featured-title">
                    <h3><a href="portfolio-style-3.html">High BP</a></h3>
                  </div>
                  <span class="category">
                    <a href="treatment.html">Idham Homoeopathy</a>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">

              <div class="col-bg-img-one ttm-col-bgimage-yes ttm-bg margin_top30">
                <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                <div class="layer-content video-div">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center mt_30 res-991-mt-30 play-btn">
                      <div class="ttm-play-icon-btn margin_bottom30">
                        <a href="https://youtu.be/hDZXSMU2lAk" target="_self" class="ttm_prettyphoto">
                          <img src={playicon} class="img-fluid" width="67" height="67" alt="play-icon" />
                        </a>
                      </div>
                      <div class="ttm-play-icon-btn text-center ">
                        <h4 class="fs-27 ttm-textcolor-white">Appoinment Now</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="ttm-row padding_zero-section ttm-bgcolor-skincolor clearfix">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">

              <div class="ttm-fid inside ttm-fid-view-lefticon style1">
                <div class="ttm-fid-icon-wrapper">
                  <i class="flaticon fa fa-id-card-o"></i>
                </div>
                <div class="ttm-fid-contents">
                  <h4 class="ttm-fid-inner">
                    <span><CountUp end={256} /></span>
                    <span>+</span>
                  </h4>
                  <h3 class="ttm-fid-title">Saticfied Clients</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">

              <div class="ttm-fid inside ttm-fid-view-lefticon style1">
                <div class="ttm-fid-icon-wrapper">
                  <i class="fa fa-heartbeat"></i>
                </div>
                <div class="ttm-fid-contents">
                  <h4 class="ttm-fid-inner">
                    <b>  <span><CountUp end={820} /></span><span>+</span></b>
                  </h4>
                  <h3 class="ttm-fid-title">Project Complate</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">

              <div class="ttm-fid inside ttm-fid-view-lefticon style1">
                <div class="ttm-fid-icon-wrapper">
                  <i class="fa fa-comments-o"></i>
                </div>
                <div class="ttm-fid-contents">
                  <h4 class="ttm-fid-inner">
                    <span><CountUp end={950} /></span><span>k+</span>
                  </h4>
                  <h3 class="ttm-fid-title">Happy Customer</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">

              <div class="ttm-fid inside ttm-fid-view-lefticon style1">
                <div class="ttm-fid-icon-wrapper">
                  <i class="fa fa-users"></i>
                </div>
                <div class="ttm-fid-contents">
                  <h4 class="ttm-fid-inner">
                    <span><CountUp end={650} />
                    </span>
                    <span>+</span>
                  </h4>
                  <h3 class="ttm-fid-title">Support Team</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section class="ttm-row team-section ttm-bgcolor-white clearfix">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title title-style-center_text">
                <div class="title-header">
                  <h3>OUR TEAM</h3>
                  <h2 class="title">Meet Our Skilled Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row slick_slider team dr-team" id="dr-full-div" data-slick='{"slidesToShow":3, "slidesToScroll": 1, "arrows":false, "autoplay":false, "dots":true, "infinite":true, "responsive":[{"breakpoint":1199,"settings": {"slidesToShow": 3}}, {"breakpoint":992,"settings":{"slidesToShow": 2}},{"breakpoint":620,"settings":{"slidesToShow": 1}}]}'>
            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6" id="dr-div">
              <div class="featured-imagebox featured-imagebox-team style1">
                <div class="featured-thumbnail" id="dr-icon">
                  <img class="img-fluid" src={team1} width="370" height="380" alt="Doctor" />
                </div>
                <div class="featured-content featured-content-team" id="feature-content">
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
                    <h3><a href="doctordetail.html">Dr.Jyothi T.N <span class="team-position">B.H.M.S M.Sc Yoga</span></a></h3>

                  </div>
                </div>
              </div>
            </div>


            <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6 dr-team" id="dr-div2">
              <div class="featured-imagebox featured-imagebox-team style1">
                <div class="featured-thumbnail">
                  <picture>
                    <img class="img-fluid" src={team1} width="370" height="380" alt="Doctor" />
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
                    <h3><a href="doctordetail.html">Dr. Karthikeyan <span class="team-position">B.H.M.S M.Sc PSY</span></a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section class="ttm-row services-section bottom-home bg-img2 ttm-bg ttm-bgimage-yes clearfix">
        <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12">
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="ttm-bgcolor-white spacing-1">

                <div class="text-center bottom-about">
                  <a class="home-link" href="index.html" title="" rel="home">
                    <img class="img-center" src={idhamhomeologo} height="52" width="225" alt="logo-img" />
                  </a>
                  <h3 class="fs-40 margin_top30">ABOUT HOMEOPATHY</h3>
                  <p class="p-lr-40">We are proud to provide a state-of-the-art facility for the highest quality dental care available. We are happy to file insurance for your reimbursement as long partnership with various global partners.</p>
                  <a class="ttm-btnn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor margin_top15" href="abouthomeo.html">know more!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home