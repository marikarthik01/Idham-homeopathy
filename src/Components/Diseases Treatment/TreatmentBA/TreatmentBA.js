import React from 'react'
import './TreatmentBA.css';
import Pagetitle from '../../Page Title/Pagetitle'
import { Link } from 'react-router-dom';
import treatmentafter from '../../Images/treatmentafter.jpg';
import treatmentbefore from '../../Images/treatmentbefore.jpg';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function TreatmentBA() {
  return (
    <>
    <Pagetitle title="Treatment Before & After" />
    <div class="site-main">
        <section class="ttm-row healthcare-section ttm-bgcolor-grey with-opacity clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-sm-12">
                        <div class="padding_right35 res-991-mb-30">
                            
                            <div class="section-title margin_bottom10 ">
                                <div class="title-header ba-head">
                                    <h3>WE PROVIDE</h3>
                                    <h2 class="title batitle">Total Health Care Service  </h2>
                                </div>
                                <div class="title-desc padding_right20 res-991-pr-0">
                                    <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
									 <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
									  <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
									   <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                                </div>
                            </div>


                            <div class="pdding_top10 margin_bottom25">
                                <div class="row">
                                    
                                    
                                    <div class="col-lg-12">
                                        <div class="sep_holder_box margin_top15 margin_bottom15">
                                            <span class="sep_holder"><span class="sep_line"></span></span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                   
                                    <a class="ttm-btn ttm-btn-size-sm con-btnn ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor res-481-mt-30 " href="contact-us.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
						</div>
                    <div class="col-lg-5 col-sm-12">
                       
                        <div class="ttm_single_image-wrapper ttm-reset-content-center-991 pt-20 res-991-pt-0">
                             <div class="twentytwenty-container">
                             <ReactCompareSlider
                                 itemOne={<ReactCompareSliderImage src={treatmentafter} srcSet={treatmentafter} alt="Image one" />}
                                 itemTwo={<ReactCompareSliderImage src={treatmentbefore}srcSet={treatmentbefore} alt="Image two" />}
/>
                            </div>
                        </div>
                    </div>
					
                </div>
				<div class="ttm-blogbox-desc-footer">
                                       
                                        <div class="ttm-post-prev-next-buttons clearfix">
                                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-icon-btn-left ttm-btn-style-fill ttm-btn-color-skincolor margin_bottom10" href="#"><i class="ti ti-angle-double-left"></i>Previous</a>

                                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-icon-btn-right ttm-btn-style-fill ttm-btn-color-skincolor float-end margin_bottom10" href="#">Next <i class="ti ti-angle-double-right"></i></a>
                                        </div>
                                    </div>
            </div>
        </section>
       
    </div>
    </>
  )
}

export default TreatmentBA