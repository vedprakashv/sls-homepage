import React from 'react'
import scroll from '../Assets/scroll.png'

function Header() {
    return (
        <>
            <div>
                <div className="banner d-flex flex-column ">
                    <div className="banner_heading ">
                        <span className="">ALL-IN-ONE SOLUTION PROVIDER FOR YOUR TECHNOLOGICAL NEEDS </span>
                        <span>SYSTEM LEVEL SOLUTIONS</span>
                        <div className="underline"></div>
                        <div className="banner_subheading container text-center">
                            <span >Industry Leadersin providing solutions cateringto the domains of the intellectual </span>
                            <br />
                            <span>property, hardware design and prototyping, software design, and manufacturing.</span>
                        </div>
                    </div>
                    <div className="scroll_icon">
                        <div>
                            <img src={scroll} alt="scroll_image" />
                        </div>
                        
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
