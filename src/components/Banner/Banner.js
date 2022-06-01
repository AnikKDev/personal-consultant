import React from 'react';
import './Banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage from '../../assets/images/bg-1.jpg'
const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="banner-container">
                    <h2 className="text-6xl">hello</h2>
                    {/* <img src={bgimage} alt="" /> */}
                </div>
                <div className="banner-container">
                    {/* <img src={bgimage} alt="" /> */}
                </div>
                <div className="banner-container">
                    {/* <img src={bgimage} alt="" /> */}
                </div>

            </Slider>
        </div>
    );
};

export default Banner;