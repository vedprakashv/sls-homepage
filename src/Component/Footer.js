import React from 'react'
import slsIcon from '../Assets/Group 243.png'

const Footer = () => {
    return (
        <>
            <div className="heights"></div>
            <div className="container footer_sec ">
                <div className="footer_sec_title ">
                    <img className=" col-md-2" src={slsIcon} alt="SLS Icon" />
                    <span className="col-md-5 pb-5">Over the years, we have added numerous products to our portfolio
                        and have served as important technology partners for various verticals.
                    </span>
                </div>

                <div>
                    <table className="table footer_table  table-borderless col-md-10 container">

                        <tr>
                            <th>ABOUT SLS</th>
                            <th>INDUSTRIES</th>
                            <th>SERVICES</th>
                            <th>CONTACT US</th>
                        </tr>
                        <tr>
                            <td>IN A SNAPSHOT</td>
                            <td>IoT PLATFORM</td>
                            <td>ASIC/FPGA.SOC DESIGN SERVICES</td>
                            <td>CAREERS</td>
                        </tr>
                        <tr>
                            <td>CSR INITIATIVES</td>
                            <td>CLOUD SOLUTIONS</td>
                            <td>HIGH SPEED PCB DESIGN SERVICES</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CERTIFICATIONS AND TIE-UPS</td>
                            <td>E-MOBILITY</td>
                            <td>SOFTWARE DEVELOPER</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SOLAR & WIND</td>
                            <td>ELECTRONICS MANUFACTURING</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SMART METERING</td>
                            <td>TESTING AND CALIBRATION</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SMART GRID</td>
                            <td>ML & AI</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>HOME AUTOMATION</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SMART STREET LIGHTS</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>RAILWAYS</td>
                            <td></td>
                            <td></td>
                        </tr>

                    </table>
                </div>

                <div className="bg-dark foot_line "></div>

                <div className="d-flex justify-content-between  mt-3">
                    <span> System Level Solutions Inc. Copyright &copy; 2021 </span>
                    <div className="links">
                        <span>Facebook</span><i>|</i>
                        <span>Instagram</span><i>|</i>
                        <span>Twitter</span><i>|</i>
                        <span>LinkedIn</span>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Footer
