import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const EmployerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/reviews")
      .then((response) => {
        if (response.data.length > 4) {
          setReviews(response.data.slice(-4));
        } else {
          setReviews(response.data); 
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <div className="w-full max-w-7xl my-20 mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-500 inline-block">
        <span className="text-[#6A38C2]">Employer</span> Reviews
      </h2>
      {reviews.length === 0 ? (
        <p>Loading reviews...</p>
      ) : (
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mx-2 min-h-[200px] flex flex-col"
            >
              
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>

             
              <p className="text-yellow-500 text-lg">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-600 text-sm">
                  ({review.rating} / 5)
                </span>
              </p>

             
              <h4 className="font-semibold mt-2 text-xl">{review.title}</h4>

            
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {review.feedback}
              </p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default EmployerReviews;
