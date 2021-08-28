import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import card_one from "../Assets/thisisengineering-raeng-sbVu5zitZt0-unsplash.png"


const Section_5 = () => {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div className=" portfolio offset-2 ">
                    <div className="col-md-6 car_left">
                        <div className="span">Get acquinted with the industry </div>
                        <div className="span">trend in real-time</div>
                        <br />
                        <div className="d-flex">
                            <div className="underline_sm"></div>
                            <div className="underline_xsm"></div>
                        </div>
                        <div className="car_left_sub">
                            <span className="m-0 ">Our newsroom is designed to keep yuo updated about every
                                major or minor breakthrough in the related industries.</span>
                        </div>
                    </div>
                </div>
                <br />

                {/* only slider */}

                <div className="offset-2 d-flex">
                    <div className="d-flex flex-column justify-content-end m-3">
                        <span className=" arrow_btn_back "><IoIosArrowBack size={22} />  </span>
                        <span className=" arrow_btn_for"><IoIosArrowForward size={22} /></span>
                    </div>
                    <div className="slider_sec">
                        <Slider {...settings}>
                            {/* CARDS */}

                            <div className="card rounded-0" style={{ width: '25rem' }}>
                                <img className="card-img-top  rounded-0" src={card_one} alt="Robot Hand" />

                                <div className="card-body ">
                                    <a href="/#" className="btn card_btn btn-sm ">CASE STUDIES</a>
                                    <h6 className="card-title font_urban pt-1">Heading</h6>
                                    <p className="card-text pt-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card_more">Read More</a>
                                </div>
                            </div>
                            <div className="card rounded-0" style={{ width: '25rem' }}>
                                <img className="card-img-top rounded-0" src={card_one} alt="Robot Hand" />

                                <div className="card-body">
                                    <a href="/#" className="btn card_btn btn-sm ">CASE STUDIES</a>
                                    <h6 className="card-title font_urban pt-1">Heading</h6>
                                    <p className="card-text pt-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card_more">Read More</a>
                                </div>
                            </div>
                            <div className="card rounded-0" style={{ width: '25rem' }}>
                                <img className="card-img-top rounded-0" src={card_one} alt="Robot Hand" />

                                <div className="card-body">
                                    <a href="/#" className="btn card_btn btn-sm ">CASE STUDIES</a>
                                    <h6 className="card-title font_urban pt-1">Heading</h6>
                                    <p className="card-text pt-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card_more">Read More</a>
                                </div>
                            </div>
                            <div className="card rounded-0" style={{ width: '25rem' }}>
                                <img className="card-img-top rounded-0" src={card_one} alt="Robot Hand" />

                                <div className="card-body">
                                    <a href="/#" className="btn card_btn btn-sm ">CASE STUDIES</a>
                                    <h6 className="card-title font_urban pt-1">Heading</h6>
                                    <p className="card-text pt-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card_more">Read More</a>
                                </div>
                            </div>
                            <div className="card rounded-0" style={{ width: '25rem' }}>
                                <img className="card-img-top rounded-0" src={card_one} alt="Robot Hand" />

                                <div className="card-body">
                                    <a href="/#" className="btn card_btn btn-sm ">CASE STUDIES</a>
                                    <h6 className="card-title font_urban pt-1">Heading</h6>
                                    <p className="card-text pt-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card_more">Read More</a>
                                </div>
                            </div>
                            



                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section_5
