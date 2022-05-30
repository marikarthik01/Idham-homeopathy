import React from 'react'
import { Link } from 'react-router-dom';
import './DiseasesTreatment.css'
import Pagetitle from '../Page Title/Pagetitle'
import treatmentdetail1 from '../Images/treatment1.jpg';
import treatmentdetail2 from '../Images/treatment2.jpg';
import treatmentdetail3 from '../Images/treatmentdetail3.jpg';
import treatmentdetail4 from '../Images/treatmentdetail4.jpg';

function DiseasesTreatment() {
  return (
    <>
      <Pagetitle title="Diseases & Treatment" />

      <div class="site-main treatment-photos">

        <section class="ttm-row clearfix">
          <div class="container">
            <div class="row multi-columns-row ttm-boxes-row-wrapper">
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style1">
                  <div class="ttm-box-view-overlay">
                    <div class="featured-thumbnail">
                      <div className="notification-div">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span>2</span>
                      </div>
                      <Link to="/TreatmentTypes"><img class="img-fluid " src={treatmentdetail1} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title" >
                        <h3><Link to="/TreatmentTypes">Orthodontics Surgery & Transplants</Link></h3>
                      </div>
                      <span class="category cat-caption">Anesthesiology, Orthopedics</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style1">
                  <div class="ttm-box-view-overlay">
                    <div class="featured-thumbnail">
                      <div className="notification-div">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span>5</span>
                      </div>
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail2} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Rehabilitation Center</Link></h3>
                      </div>
                      <span class="category cat-caption">Cardiology, Pharmacy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style1">
                  <div class="ttm-box-view-overlay">
                    <div class="featured-thumbnail">
                      <div className="notification-div">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span>3</span>
                      </div>
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail1} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Blood Pressure Checkup</Link></h3>
                      </div>
                      <span class="category cat-caption">Anesthesiology, Pediatric</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style1">
                  <div class="ttm-box-view-overlay">
                    <div class="featured-thumbnail">
                      <div className="notification-div">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span>1</span>
                      </div>
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail2} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Dentures / Partial Dentures</Link></h3>
                      </div>
                      <span class="category cat-caption">Oncology, Pharmacy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

                <div class="featured-imagebox featured-imagebox-portfolio style1">

                  <div class="ttm-box-view-overlay">

                    <div class="featured-thumbnail">
                      <div className="notification-div">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span>4</span>
                      </div>
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail1} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Fitness Guidance to Patient</Link></h3>
                      </div>
                      <span class="category cat-caption">Cardiology, Oncology</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

                <div class="featured-imagebox featured-imagebox-portfolio style1">

                  <div class="ttm-box-view-overlay">

                    <div class="featured-thumbnail ">
                      <Link to="/TreatmentTypes"><img class="img-fluid" src={treatmentdetail2} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Diagnostic Imagine</Link></h3>
                      </div>
                      <span class="category cat-caption">Orthopedics, Pharmacy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

                <div class="featured-imagebox featured-imagebox-portfolio style1">

                  <div class="ttm-box-view-overlay">

                    <div class="featured-thumbnail">
                      <Link to="/TreatmentTypes"><img class="img-fluid" src={treatmentdetail1} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Orthodontics Surgery & Transplants</Link></h3>
                      </div>
                      <span class="category cat-caption">Anesthesiology, Orthopedics</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

                <div class="featured-imagebox featured-imagebox-portfolio style1">

                  <div class="ttm-box-view-overlay">

                    <div class="featured-thumbnail">
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail2} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Rehabilitation Center</Link></h3>
                      </div>
                      <span class="category cat-caption">Cardiology, Pharmacy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6">

                <div class="featured-imagebox featured-imagebox-portfolio style1">

                  <div class="ttm-box-view-overlay">

                    <div class="featured-thumbnail">
                      <Link to="/TreatmentTypes"> <img class="img-fluid" src={treatmentdetail1} width="800" height="750" alt="image" /></Link>
                    </div>
                    <div class="featured-content img-content">
                      <div class="featured-title img-title">
                        <h3><Link to="/TreatmentTypes">Blood Pressure Checkup</Link></h3>
                      </div>
                      <span class="category cat-caption">Anesthesiology, Pediatric</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}

export default DiseasesTreatment