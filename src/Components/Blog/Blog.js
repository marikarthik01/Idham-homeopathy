import React from 'react'
import './Blog.css'
import blog1 from '../Images/blog1.jpg';
import Pagetitle from '../Page Title/Pagetitle';

function Blog() {
  return (
    <>
    <Pagetitle title="Blog"/>
    <div class="site-main single">
<div class="sidebar ttm-sidebar-right ttm-bgcolor-white break-991-colum clearfix">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 content-area">            
                <article class="post ttm-blog-classic clearfix">        
                    <div class="ttm-post-featured-wrapper ttm-featured-wrapper">
                        <div class="ttm-post-featured">
                            <img class="img-fluid" src={blog1} width="1200" height="800" alt=""/>
                        </div>
                        <div class="ttm-box-post-date">
                            <span class="ttm-entry-date">
                                <time class="entry-date" datetime="2019-01-16T07:07:55+00:00">16
                                    <span class="entry-month">Jan
                                        <span class="entry-year">2019
                                        </span>
                                    </span>
                                </time>
                            </span>
                        </div>
                    </div>
                    <div class="ttm-blog-classic-content">
                         <h4>Modern Equipment</h4>
                        <div class="entry-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s sta.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more Aldus PageMaker including versions of Lorem Ipsum.
                            <br/><br/>
                            Lorem Ipsum is <b>simply dummy text of the printing and typesetting industry.</b>  Lorem Ipsum has been the industry’s sta.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                           
                           
                            <div class="ttm-blogbox-desc-footer">
                               
                                <div class="ttm-post-prev-next-buttons clearfix">
                                    <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-icon-btn-left ttm-btn-style-fill ttm-btn-color-skincolor margin_bottom10" href="#"><i class="ti ti-angle-double-left"></i>Previous</a>

                                    <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-icon-btn-right ttm-btn-style-fill ttm-btn-color-skincolor float-end margin_bottom10" href="#">Next <i class="ti ti-angle-double-right"></i></a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </article>
            </div>
           
        </div>
    </div>
</div>


</div>
    </>
  )
}

export default Blog