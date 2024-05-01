import React, { useState, useEffect } from "react";
import "./CoursesData.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import discountimg from "../../Assets/Images/discountimage.webp";

export default function CoursesData() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const fetchCoursesData = async () => {
    try {
      const response = await fetch(
        "https://api.classplusapp.com/v2/course/preview/similar/eyJvcmdJZCI6NTQ1MTExfQ==?tabCategoryId=1&limit=10&offset=0&requiredFilters=[10]"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response for popular course home:", data);
      setCoursesData(data.data.coursesData);
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  return (
    <div className="py-5 lg:mx-4 mx-2">
      <div className="text-center ">
        <h6 className="section-title bg-white text-center primarycolor px-3">
          Courses
        </h6>
        <h1 className="mb-5">Popular Courses</h1>
      </div>

      <div id="coursesdatacarousel">
        <Slider {...settings} className="popularcoursesslider">
          {coursesData.map((course,index) => (
            <a
              className="courseslink flex " data-aos="fade-up" data-aos-delay = {course.index + 200} 
              href="https://courses.techmentorcore.com/courses"
            >
              <div className="course-item1 bg-white">
                <div className="courseimagediv">
                  <img
                    className="img-fluid courseimage"
                    src={course.imageUrl}
                    alt=""
                  />
                </div>

                <div className="coursescontentdiv">
                  <div className="card-body-btns-div">
                    <button className="card-body-btn">LIVE CLASS</button>
                    <button className="card-body-btn">FREE CONTENT</button>
                    <button className="card-body-btn">TESTS</button>
                  </div>

                  <h5 className="mb-4 coursename">{course.name}</h5>

                  <div className="discountdiv">
                    <img
                      className="discountimage"
                      src={discountimg}
                      alt="discount"
                    />
                    <h5
                      className="discount"
                      style={{ color: "rgb(252, 124, 73)" }}
                    >
                      Extra 2% coupon discount
                    </h5>
                  </div>

                  <div className="coursebtndiv">
                    <div className="coursepricediv">
                      <h5>₹ {course.finalPrice}</h5>
                      <span className="span1">₹{course.discount} </span>{" "}
                      <span className="span2">
                        {((course.discount / course.price) * 100).toFixed(2)}%
                        OFF{" "}
                      </span>
                    </div>
                    <div className="coursebtn">
                      <a
                        href={course.singlePaymentLink}
                        className="btn btn-primary mx-0 p-2 w-full"
                        style={{ width: "100%" }}
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="coursebottomdiv bg-white">
                <a
                  href={course.singlePaymentLink}
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                >
                  Buy Now
                </a>
              </div>
            </a>
          ))}
        </Slider>
      </div>

      {/* <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                <a href="courses.html" className="btn btn-primary">View More</a>
            </div> */}
    </div>
  );
}
