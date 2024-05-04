import React from 'react'
import about from '../../Assets/Images/about.jpg';

export default function AboutUs() {
  return (
   <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" style={{minheight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src={about} alt="" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                    <h6 className="section-title bg-white text-start primarycolor pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to Techmentorcore</h1>
                    <p className="mb-4">Your premier destination for comprehensive full-stack development training and career advancement opportunities in the tech industry!</p>
                    <p className="mb-2"><b>Our Mission : </b></p>
                    <p>At Tech Mentor Core, our mission is to empower aspiring developers with cutting-edge skills, practical knowledge, and industry connections necessary to thrive in today's competitive tech landscape. We are dedicated to providing top-tier training programs that equip students with the expertise and confidence to succeed as full-stack developers.</p>
                    <p className="mb-2"><b>Why Choose Us : </b></p>
                    <p>Tech Mentor Core stands out for its comprehensive approach to training, offering hands-on projects, real-world scenarios, and personalized mentorship to ensure students are fully prepared for the demands of the industry. From coding fundamentals to advanced techniques, we cover it all, preparing you for success in full-stack development roles.</p>
                    {/* <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Online classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Online classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a> */}
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
