import React from 'react'
import './TreatmentDetail.css';
import Pagetitle from '../../Page Title/Pagetitle'
import { Link } from 'react-router-dom';
import FirstImg from '../../Images/aboutimg.jpg';
import SecondImg from '../../Images/aboutimg1.jpg';
import Comments from '../Comment/Comments'

function TreatmentDetail() {
  return (
    <>
     <Pagetitle title="Treatment Detail"/>
      <div class="site-main single">

      
        <div class="sidebar ttm-sidebar-right ttm-bgcolor-white break-991-colum clearfix">
          <div class="container">
            
            <div class="row">
              <div class="col-lg-12 content-area">
                
                <article class="post ttm-blog-classic clearfix">
                 

                  
                  <div class="ttm-blog-classic-content">

                    <div class="entry-content">
                      <h4>Modern Equipment</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s sta.It has survived not only five centuries, but also the <a href="#" class="ttm-textcolor-skincolor">leap into electronic typesetting,</a>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s sta.It has survived not only five centuries, but also the leap into electronic typesetting has been the industry’s sta It has survived not only five centuries.</p>
                      <p><img class="img-fluid float-start margin_bottom15 margin_right30 margin_top10" src={FirstImg} width="401" height="467" alt="single-img-07"/>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable if you are going.</p>
                      <p><b>“What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human”</b> although a little too small, lay peacefully between its four</p>
                      <p>Cicero are also reproducmpanied by English versions from the 1914 translation by H. Raby Cicero are also reproducmpanied by Enloons from The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproducmpanied by Enloons</p>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from <u>There are many variations of passages of Lorem</u> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                      <h4>Individual Approach</h4>
                      <p>Aenean ac erat nulla. Phasellus et dolor varius, <b>fermentum nisi quis, blandit nunc.</b> Vestibulum eu feugiat felis. Mauris ut aliquam dui, eget cursus velit. In convallis quam vitae nulla auctor mollis. Nulla sit amet mauris nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam quis eros maximus, fringilla arcu sit amet, consequat purus. Donec dignissim venenatis velit, non scelerisque sapien faucibus quis. Maecenas id urna pulvinar, consectetur nibh ut, sodales ligula. Suspendisse – eleifend tellus act &amp; orci dapibus, ac egestas enim imperdiet. Vestibulum interdum ante non nisi dignissim rhoncus. Nunc a sapien massa. Nulla facilisi.</p>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="padding_bottom15"><img width="1200" height="800" class="img-fluid" src={SecondImg} alt="blog-image"/></div>
                        </div>
                        <div class="col-sm-6">
                          <div class="padding_bottom15"><img width="1200" height="800" class="img-fluid" src={SecondImg} alt="blog-image"/></div>
                        </div>
                      </div>
                      <p>Aenean ac erat nulla. Phasells. Maecenas id urna pulvinar, consectetur nibh ut, sodales ligula. Suspendisse eleifend tellus ac orci dapibus, ac egestas enim imperdiet. Vestibulum interdum ante non nisi dignissim rhoncus. Nunc a sapien massa. Nulla facilisi.</p>
                      <h4>Example For You List</h4>


                    
                    </div>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>
       

      </div>
      <Comments commentsUrl="http://localhost:3000/comments"
        currentUserId="1" />
    </>
  )
}

export default TreatmentDetail