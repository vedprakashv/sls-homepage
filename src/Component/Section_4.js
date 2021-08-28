import React from 'react'
import './styles.css'
import girl_working from '../Assets/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'

const Section_4 = () => {
    return (
        <>
            <div className="m-5"></div>
            <div className="sec_4 col-md-9 offset-2">
                <div className="col-md-5">
                    <div className="span">expanding the core</div>
                    <div className="span">of our primary offerings</div>
                </div>

                <div className="">
                    <div className="girl_working_div">
                        {/* <div className="back_effect_div">asdasd</div> */}
                        <img className="girl_working_img img-fluid" src={girl_working} alt="girl reading" />
                    </div>

                    <div className="mt-4 d-flex">
                        <div className="underline_sm rounded"></div>
                        <div className="underline_xsm"></div>
                    </div>
                    <br />
                    <div className="girl_working_text text-light ">
                        <span>Forming the core of our technical expertise, ready-</span>
                        <span>to-integrate, rich turnkey offerings cover a vast range </span>
                        <span>of target platforms</span>
                    </div>
                </div>
            </div>
            <div className="sec_4__1 container-fluid py-5">
                <div className="col-md-9 offset-2 d-flex">

                    <div className="col-md-5">
                        <ul className="list-unstyled un_list text-decoration-none ">
                            <li className="p-2 pl-3 font_urban f_set"> ASIC/FPGA/SoC Design Services </li>
                            <li className="p-2 pl-3 font_urban f_set"> High Speed PCB Design Services </li>
                            <li className="p-2 pl-3 font_urban f_set"> Software Development </li>
                            <li className="p-2 pl-3 font_urban f_set"> Electronics Manufacturing </li>
                            <li className="p-2 pl-3 font_urban f_set"> Testing and Calibration </li>
                            <li className="p-2 pl-3 font_urban f_set"> ML & AI </li>
                        </ul>
                    </div>


                    {/* <div className="girl_working_text girl_working_img text-light bg-dark ">
                        <span>Forming the core of our technical expertise, ready-</span>
                        <span>to-integrate, rich turnkey offerings cover a vast range </span>
                        <span>of target platforms</span>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default Section_4
