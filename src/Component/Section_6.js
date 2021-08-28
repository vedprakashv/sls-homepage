import React from 'react'
import one from '../Assets/download (1).png'
import two from '../Assets/NoPath.c6058ac7.png'
import three from '../Assets/download (2).png'

const Section_6 = () => {
    return (
        <>
            <div className="heights_half"></div>

            <div className="col-md-8 portfolio offset-2 car_left">
                <div className="col-md-6">
                    <div className="span">Partnership & Associations </div>
                    <div className="span">covers multiple segments</div>
                    <br />
                    <div className="d-flex">
                        <div className="underline_sm"></div>
                        <div className="underline_xsm"></div>
                    </div>
                    <div className="car_left_sub">
                        <span className="m-0">Using our robust in-house expertise to develop pioneering
                            solutions catering to various business domains.
                        </span>
                    </div>
                </div>
                <div className="p-4"></div>

                <div className="partner_icons p-4">
                    <img src={one} alt="d1" />
                    <img src={two} alt="nopath" />
                    <img src={three} alt="d2" />
                </div>
            </div>

        </>
    )
}

export default Section_6
