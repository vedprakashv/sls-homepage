import React from 'react'
import '../Component/styles.css'
import Navbar from '../Component/Navbar';
import Header from '../Component/Header';
import Carousel1 from '../Component/Carousel_1';
import Carousel2 from '../Component/Carousel_2';
import Carousel3 from '../Component/Carousel_3';
import Portfolio from '../Component/Portfolio';
import Section4 from '../Component/Section_4';
import Section5 from '../Component/Section_5';
import Section6 from '../Component/Section_6';
import Footer from '../Component/Footer';

const Homepage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Carousel1 />
            <Carousel2 />
            <Carousel3 />
            <Portfolio />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />

        </>
    )
}

export default Homepage