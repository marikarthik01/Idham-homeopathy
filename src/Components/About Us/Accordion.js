import React,{useState} from 'react'

function Accordion(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div class="accordion">
                <div class="toggle">
                    <div class="toggle-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" ><b>{props.title}</b></a><div class="plus" onClick={() => setIsActive(!isActive)}><p>{isActive ? <i class="fa fa-minus ab-i" aria-hidden="true"></i>
 : <i class="fa fa-plus ab-i" aria-hidden="true"></i>}</p></div></div>
                    <div class="toggle-content">
                        <div class="row">
                            {isActive &&
                                <div class="col-sm-12 ">
                                    <p className="about-cont">{props.content}</p>

                                </div>
                            }

                        </div>
                    </div>
                </div><hr />
            </div>
        </>
    )
}

export default Accordion