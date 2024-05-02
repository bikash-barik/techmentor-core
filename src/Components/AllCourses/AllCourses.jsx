import React from "react";
import discountimg from "../../Assets/Images/discountimage.webp";
import './AllCourses.css';

export default function AllCourses({ course }) {

  return (
    <div className="allcoursesdiv">
    <h1 className="popularcoursesheading">All Courses</h1>
      <div className="allcoursesrow">
      {course.map((course) => (
          <a
            className="courseslink flex"
            href="https://courses.techmentorcore.com/courses"
          >
            <div className="course-item1 bg-white mx-2">
            <div className="overflow-hidden courseimagediv">
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
                    <span className="span1">₹{course.price} </span>{" "}
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
      </div>
    </div>
  );
}
