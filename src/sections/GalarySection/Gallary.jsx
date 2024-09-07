import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick carousel default styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles
import './gallary.css'
import image1 from './Assets/image1.JPG'
import image2 from './Assets/image2.JPG'
import image3 from './Assets/image3.JPG'
import image4 from './Assets/image4.JPG'
import image5 from './Assets/image5.JPG'






const GallerySection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 images at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Change slide every 2 seconds
        centerMode: true, // Center the slides
        centerPadding: '0px', // No padding around center
    };

    return (
        <div>
            <div className="gallery-section">
            <h2>GALLERY</h2>
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Gallery 1" />
                </div>
                <div>
                    <img src={image2} alt="Gallery 2" />
                </div>
                <div>
                    <img src={image3} alt="Gallery 3" />
                </div>
                <div>
                    <img src={image4} alt="Gallery 4" />
                </div>
                <div>
                    <img src={image5} alt="Gallery 5" />
                </div>
            </Slider>
        </div></div>

    );
};

export default GallerySection;
