import React from "react";
import discountimg from "../../Assets/Images/discountimage.webp";
import "./RecentCourses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function RecentCourses({ course }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="popularcoursesdiv">
      <h1 className="popularcoursesheading">Recent Courses</h1>
      <Slider {...settings}>
        {course.map((course) => (
          <a
            className="courseslink flex"
            href="https://courses.techmentorcore.com/courses"
          >
            <div className="recentcourse-item bg-white mx-2">
              <div className="overflow-hidden courseimagediv px-2">
                <img
                  className="img-fluid courseimage"
                  src={course.imageUrl}
                  alt=""
                />
              </div>

              <div className="recentcoursescontentdiv">
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
                    <h5>₹ {course.price}</h5>
                    <span className="span1">₹{course.discount} </span>{" "}
                    <span className="span2">
                    {((course.discount / course.price) * 100).toFixed(2)}% OFF{" "}
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
            <div className="coursebottomdiv bg-white mx-2">
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
  );
}
