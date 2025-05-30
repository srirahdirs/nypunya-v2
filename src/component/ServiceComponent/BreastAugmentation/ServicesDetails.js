// src/component/ServiceComponent/BreastAugmentation/ServicesDetails.js
import React from "react";
import Slider from "react-slick";
import { breastServiceContent } from "../../../utils/ServiceDatas/BreastData/breastData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesDetails = ({ setSelectedService }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="p-4 bg-white container mx-auto">
            <Slider {...settings}>
                {breastServiceContent.map((service, index) => (
                    <div key={index} className="flex justify-center pb-4 px-2">
                        <div
                            onClick={() => setSelectedService(service)}
                            className="cursor-pointer bg-blue-50 py-6 px-4 rounded-2xl flex items-center gap-4 shadow-md w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto hover:bg-blue-100 transition"
                        >
                            <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                                {service.id}
                            </div>
                            <p className="text-blue-900 font-semibold text-sm sm:text-base">
                                {service.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ServicesDetails;
