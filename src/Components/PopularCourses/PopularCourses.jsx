import React from "react";
import discountimg from "../../Assets/Images/discountimage.webp";
import "./PopularCourses.css";

export default function PopularCourses({ course }) {
  return (
    <div className="popularcoursesdiv">
      <h1 className="popularcoursesheading">Popular Courses</h1>
      {/* <Slider {...settings}> */}
      {course.map((course) => (
        <a
          className="courseslink flex "
          href="https://courses.techmentorcore.com/courses"
        >
          <div className="popularcourse-item bg-white mx-2">
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
                <h5 className="discount" style={{ color: "rgb(252, 124, 73)" }}>
                  Extra 2% coupon discount
                </h5>
              </div>

              <div className="coursebtndiv">
                <div className="coursepricediv">
                  <h5>₹ {course.finalPrice}</h5>
                  <span className="span1">₹{course.discount} </span>{" "}
                  <span className="span2">
                    {parseInt((course.discount * 100) / course.price)}.00% OFF{" "}
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
      {/* </Slider> */}
    </div>
  );
}
