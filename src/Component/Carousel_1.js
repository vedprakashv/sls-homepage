import React from 'react'
import mission from '../Assets/mission.png'
import mission2 from '../Assets/leaves.png'

const carousel_1 = () => {
    return (
        <>
            {/* <div className="carousel">
                
            </div> */}
            <div className="carousel_box border-0">
                <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                    <ol className="carousel-indicators ">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active rounded "></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1" className="rounded"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2" className="rounded"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3" className="rounded"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex">

                            <div className="car_left col-md-3 offset-2">
                                <div className="span"> TECHNOLOGY PARTNERS IN  HARDWARE AND SOFTWARE OFFERINGS </div>
                                <div className="mt-4 d-flex">
                                    <div className="underline_sm rounded"></div>
                                    <div className="underline_xsm"></div>
                                </div>
                                <div className="car_left_sub">
                                    <span className="m-0"> Serving as an turnkey solutions provider for the past 20 years </span>
                                </div>
                                <div className="car_left_sublist mt-2">
                                    <span>We specialize in-</span>
                                    <ul className="ml-4">
                                        <li>Research & Development</li>
                                        <li>Product Design</li>
                                        <li>Manufacturing</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="car_right col-md-5">
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="containers ">
                                        <div className="active_proj center_h_v ">
                                            <span className="md_title ">100+</span>
                                            <span className="md_title_sub">Active projects around the world</span>
                                        </div>

                                        <div className="icon center_h_v">
                                            <img className="" width="55px" height="50px" src={mission} alt="icon" />
                                        </div>

                                        <div className="business_vertical bg-light center_h_v ">
                                            <span className="md_title">06</span>
                                            <span className="md_title_sub">business vertical</span>
                                        </div>

                                        <div className="icon2 center_h_v ">
                                            <img className="" width="55px" height="50px" src={mission2} alt="icon" />
                                        </div>

                                        <div className="staff center_h_v bg-light">
                                            <span className="bg_title">356</span>
                                            <span className="bg_title_sub">STAFF STRENGTH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="heights"></div>





            </div>

        </>
    )
}

export default carousel_1


















/* <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div> */
// </div>
/* <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */
