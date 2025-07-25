import React, { useState } from "react";
import { LaserHairRemovalData, LaserHairRemovalAdvantages, galleryImages } from "../../../utils/ServiceDatas/LaserHairRamovalData/laserHairRamovalData";

const LaserHairRemoval = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-custom-blue">Laser Hair Removal</h2>
        <div className="w-20 h-1 bg-custom-green mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Details */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Main Description */}
            <div className="mb-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-md">
                  1
                </div>
                <div className="pt-1">
                  <p className="text-gray-700 text-lg leading-relaxed">{LaserHairRemovalData[0]}</p>
                </div>
              </div>
            </div>

            {/* Advantages List */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-custom-blue mb-4">Advantages at NYPUNYA</h3>
              {LaserHairRemovalAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-custom-blue to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-md">
                    {index + 2}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700 text-lg leading-relaxed">{advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            {/* Main Image */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(selectedImage)}
            >
              <img
                src={galleryImages[selectedImage]}
                alt="Laser Hair Removal"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Laser Hair Removal</h3>
                  <p className="text-white/80">Image {selectedImage + 1}</p>
                </div>
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl overflow-hidden shadow-md group cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-custom-green' : ''
                    }`}
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Laser Hair Removal ${index + 1}`}
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Image {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={galleryImages[selectedImage]}
              alt={`Laser Hair Removal ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-custom-green transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Modal Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious(e);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext(e);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              Image {selectedImage + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaserHairRemoval;
