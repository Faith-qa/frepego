import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick carousel default styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles
import './reviews.css'
const ReviewsSection = () => {
    const reviews = [
        {
            text: "Amazing Service"} ,
        {
            text: "Nice place to relax and enjoy your evening" },
        {
            text: "The rooms are super clean and comfortable. The place is easily accessible. And  the service was nothing less than excellent" },

    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds for each slide
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="custom-dot">
                <span></span>
            </div>
        ),
        dotsClass: 'slick-dots custom-dots', // Apply custom class for styling
    };

    return (

            <div className="background-image">
            <div className="review-box">
                <h2>REVIEWS</h2>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="review-slide">
                            <blockquote>
                                <p>{review.text}</p>
                            </blockquote>
                        </div>
                    ))}
                </Slider>
            </div></div>

    );
};

export default ReviewsSection;
