import React from "react";
import { galleryImages } from "../../../utils/ServiceDatas/AntiAgeingData/antiAgeingData"; // Importing gallery images
import { useNavigate } from "react-router-dom";

const GalleryComponent = () => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate('/gallery', { state: { category: 'Anti Ageing Procedures' } });
    };

    return (
        <>
            <div className="w-full mx-auto pb-10 px-4 relative container">
                <h2 className="text-center text-xl font-medium text-custom-blue py-5">GALLERY</h2>
                <div className="relative md:w-[90%] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="w-full">
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-md shadow-lg transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={handleViewMore}
                        className="bg-custom-blue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View More Cases
                    </button>
                </div>
            </div>
            {/* <div>
                <p className="text-center text-2xl text-custom-blue pb-5">
                    Be the best version of Yourself with NYPUNYA.
                </p>
            </div> */}
        </>
    );
};

export default GalleryComponent;
