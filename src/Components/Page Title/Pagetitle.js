import React from 'react'
import './Pagetitle.css'

function Pagetitle(props) {
  return (
    <>
    <div class="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
        <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="layer-content">
                <div class="container ">
                    <div class="row ">
                        <div class="col-md-12 page-content"> 
                            <div class="title-box ttm-textcolor-white">
                                <div class="page-title-heading">
                                    <h1 class="title">{props.title}</h1>
                                </div>
                                <div class="breadcrumb-wrapper text-end">
                                    <div class="container">
                                        <div class="breadcrumb-wrapper-inner">
                                            <span>
                                                <a title="Go to Delmont." href="index.html" class="home"><i class="fa fa-home"></i>&nbsp;&nbsp;Home</a>
                                            </span>
                                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                                            <span class="ttm-textcolor-skincolor">{props.title}</span>
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

export default Pagetitle