import React from 'react'
import one from "../Assets/BlueIcons -20-01.png"
import two from "../Assets/BlueIcons -20-02.png"
import three from "../Assets/BlueIcons -20-03.png"
import four from "../Assets/BlueIcons -20-04.png"
import five from "../Assets/BlueIcons -20-06.png"
import six from "../Assets/BlueIcons -20-10.png"
import seven from "../Assets/BlueIcons -20-08.png"
import eight from "../Assets/BlueIcons -20-14.png"
import nine from "../Assets/BlueIcons -20-16.png"
import ten from "../Assets/BlueIcons -20-15.png"
import eleven from "../Assets/BlueIcons -20-13.png"
import './styles.css'

const Portfolio = () => {
    return (
        <>
            {/* <div className="heights"></div> */}
            <div className="col-md-8 portfolio offset-2 car_left">
                <div className="col-md-6">
                    <div className="span">Our rich portfolio </div>
                    <div className="span">covers multiple segments</div>
                    <br />
                    <div className="d-flex">
                        <div className="underline_sm"></div>
                        <div className="underline_xsm"></div>
                    </div>
                    <div className="car_left_sub">
                        <span className="m-0">Catering to muiltiple industrial use cases, System level
                            Solotions provide a wide array of products and services</span>
                    </div>
                </div>

                <div className="blueicons d-flex flex-wrap col-md-9 ">
                    <div className="d-flex flex-column  col-md-3">
                        <img className="img-fuild blueicons_img" src={one} alt="1" />
                        <span className="car_left_sub font_urban">IoT Platform</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={two} alt="1" />
                        <span className="car_left_sub font_urban">Cloud Solutions</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={three} alt="1" />
                        <span className="car_left_sub font_urban">E-Mobility</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={four} alt="1" />
                        <span className="car_left_sub font_urban">Solar & Wind</span>
                    </div>

                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={five} alt="1" />
                        <span className="car_left_sub font_urban">Smart Metering</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={six} alt="1" />
                        <span className="car_left_sub font_urban">Home Automation</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={seven} alt="1" />
                        <span className="car_left_sub font_urban">Smart Street Lights</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={eight} alt="1" />
                        <span className="car_left_sub font_urban">Smart Grid</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={nine} alt="1" />
                        <span className="car_left_sub font_urban">Railways</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={ten} alt="1" />
                        <span className="car_left_sub font_urban">Gaming</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={eleven} alt="1" />
                        <span className="car_left_sub font_urban">Traffic Solutions</span>
                    </div>
                    <div className="d-flex flex-column col-md-3">
                        <img className="img-fuild blueicons_img" src={two} alt="1" />
                        <span className="car_left_sub font_urban">Digital Signage</span>
                    </div>
                </div>
                <div className="text-center col-md-9 my-5 ">
                    <input className="btn btn_blue text-light px-4 rounded-0" type="button" value="Know More ->" />
                </div>
            </div>
        </>
    )
}

export default Portfolio
