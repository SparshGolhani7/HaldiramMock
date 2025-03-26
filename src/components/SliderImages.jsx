// import React, { useContext, useState } from 'react';
// import { AllContext } from '../context/AllContext';
// import "../Styles/SliderImages.css";

// const SliderImages = () => {
//     const { storeInfo } = useContext(AllContext);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const sliderImages = storeInfo?.sliderImages || [];

//     const plusSlides = (step) => {
//         setCurrentIndex((prevIndex) => 
//             (prevIndex + step + sliderImages.length) % sliderImages.length
//         );
//     };

//     const currentSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <>
//             <div className="slideshow-container">
//                 {sliderImages.length > 0 && (
//                     <div className="mySlides fade">
//                         <div className="numbertext">
//                             {currentIndex + 1} / {sliderImages.length}
//                         </div>
//                         <img src={sliderImages[currentIndex]?.url} alt={`Slide ${currentIndex + 1}`} />
//                     </div>
//                 )}

//                 <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
//                 <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
//             </div>

//             <br />

//             <div style={{ textAlign: "center" }}>
//                 {sliderImages.map((_, index) => (
//                     <span
//                         key={index}
//                         className={`dot ${currentIndex === index ? "active" : ""}`}
//                         onClick={() => currentSlide(index)}
//                     ></span>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default SliderImages;
