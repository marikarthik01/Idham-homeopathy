import React from 'react'
import './DiseasesTreatment.css'
import {Link} from 'react-router-dom';
import Pagetitle from '../Page Title/Pagetitle'

function TreatmentTypes() {
  return (
    <>
    <Pagetitle title="Types of Diseases" />
    <div class="site-main">

        <div class="ttm-row clearfix">
          <div class="container">

            <div class="row">
              <div class="col-lg-12">

                <div class="ttm-pf-single-content-wrapper-innerbox ttm-pf-view-left-image">

                  <div class="ttm-pf-single-content-area">
                    <div class="ttm-portfolio-description">


                      <div class="row">
                        <div class="col-lg-12">
                          <div class="padding_top0">
                            <h4 class="margin_bottom10">Treatments Available</h4>
                            <div class="sep_holder_box w-100 margin_bottom20">
                              <span class="sep_holder"><span class="sep_line"></span></span>
                              <span class="sep_holder"><span class="sep_line"></span></span>
                              <hr />
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey"><Link to="/TreatmentDetail">Diabetes</Link><div className="no-div"><span className="no">4</span></div></span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey"><Link to="/TreatmentDetail">Thyroid Disorders</Link><div className="no-div"><span className="no">3</span></div></span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey"><Link to="/TreatmentDetail">Joint Pain</Link><div className="no-div"><span className="no">2</span></div></span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey"><Link to="/TreatmentDetail">Back Pain</Link><div className="no-div"><span className="no">4</span></div></span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">High BP</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Allergy / Asthma Gastric Ulcer</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Back Pain</span></li>
                                </ul>
                              </div>
                              <div class="col-sm-6">
                                <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Kidney Stone/ Gall Stone</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Skin Allergy/ Psories</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Pimples / White Patches</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Pcos / Menstrval Irregulavitives</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Infertility - Hormone Imbalance</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Fibroid Cyst</span></li>
                                  <li><i class="fa fa-arrow-circle-right"></i><span class="ttm-list-li-content ttm-textcolor-darkgrey">Depresstion / Anxiety</span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TreatmentTypes