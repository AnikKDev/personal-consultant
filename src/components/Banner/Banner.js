import React from 'react';
import './Banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage from '../../assets/images/bg-1.jpg'
const Banner = () => {

    const settings = {
        dots: false,
        fade: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="banner-container banner-container1 ">
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="text-center">
                            <h3 className="lg:text-4xl text-2xl uppercase font-bold text-white">We are here to</h3>
                            <h1 className="uppercase font-bold text-white lg:text-6xl text-3xl mt-6"><span className="text-secondary">Consult</span> your matter</h1>
                            <button className="uppercase text-white bg-secondary hover:bg-white border-solid  border-0 py-3 my-10 duration-500 transition-all px-7 hover:text-black">Reach Us</button>
                        </div>
                    </div>
                </div>
                <div className="banner-container banner-container2 ">
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="text-center">
                            <h3 className="lg:text-4xl text-2xl uppercase font-bold text-white">Good care means</h3>
                            <h1 className="uppercase font-bold text-white lg:text-6xl text-3xl mt-6">personal <span className="text-secondary">Consultantcy</span></h1>
                            <button className="uppercase text-white bg-secondary hover:bg-white border-solid  border-0 py-3 my-10 duration-500 transition-all px-7 hover:text-black">Reach Us</button>
                        </div>
                    </div>
                </div>
                <div className="banner-container banner-container3 ">
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="text-center">
                            <h3 className="lg:text-4xl text-2xl uppercase font-bold text-white">We do</h3>
                            <h1 className="uppercase font-bold text-white lg:text-6xl text-3xl mt-6">What we do <span className="text-secondary">Best</span></h1>
                            <button className="uppercase text-white bg-secondary hover:bg-white border-solid  border-0 py-3 my-10 duration-500 transition-all px-7 hover:text-black">Reach Us</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;