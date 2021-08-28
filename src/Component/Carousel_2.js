import React from 'react'
import sideview from '../Assets/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.png'


const Carousel_2 = () => {
    return (
        <>
            {/* CAROUSEL 2 */}

            <div className="carousel_box2">
                <div className="offset-2">
                    <div className="car_left">
                        <div className="span col-md-3 p-0"> INTEGRATION SPECIALIST ACROSS VARIOUS VERTICALS </div>
                    </div>

                    <div className="mt-4 d-flex">
                        <div className="underline_sm rounded"></div>
                        <div className="underline_xsm"></div>
                    </div>

                    <div className="car_left_sub col-md-6 pl-0">
                        <span>Assisting companies to avoid pitfalls in the product design and Development</span>
                        <span>phase, our experienced team at Sustem Level Solutions uses innovation </span>
                        <span>across levels to materialze the creative perspective of a client.</span>
                    </div>

                    <div className="carousel_2 pt-5 ">
                        {/* <ul className="carousel-indicators bg-light">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active bg-danger line_xsm"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ul> */}
                        <div className="d-flex flex-column justify-content-center">
                            <div className="line_xsm bg-danger active" data-target="#carouselExampleCaptions" data-slide-to="0" ></div>
                            <div className="line_xsm" data-target="#carouselExampleCaptions" data-slide-to="1"></div>
                            <div className="line_xsm" data-target="#carouselExampleCaptions" data-slide-to="2"></div>
                            <div className="line_xsm" data-target="#carouselExampleCaptions" data-slide-to="3"></div>
                        </div>

                        <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active ">
                                    <img src={sideview} className="man_computer img-fluid col-md-8 " alt="carousel_2" />
                                    <h5 className="font_bebas display-1 research">RESEARCH</h5>
                                </div>

                                {/* <div className="carousel-item">
                                    <div className="carousel-caption d-none d-md-block">
                                        <img src={sideview} className="img-fluid col-md-8 " alt="carousel_2" />
                                        <h5 className="font_bebas display-1 research">RESEARCH</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-caption d-none d-md-block">
                                        <img src={sideview} className="img-fluid col-md-8 " alt="carousel_2" />
                                        <h5 className="font_bebas display-1 research">RESEARCH</h5>
                                    </div>
                                </div> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel_2