import React from 'react'
import image1 from '../Assets/man-worker-firld-by-solar-panels.png'
// import './styles.css'

const Carousel_3 = () => {
    return (
        <>
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner ">
                        <div class="carousel-item active ">
                            <img src={image1} class="img-fluid d-block p-0 w-100" alt="man working on the field" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 className="font_bebas h1">RESHAPING THE FUTURE OF WORLD</h5>
                                <p className="font_urban h6">We aim to leverage as a tool to build solution that have tha 
                                        potential of bringing a transformational shift across sectors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default Carousel_3
