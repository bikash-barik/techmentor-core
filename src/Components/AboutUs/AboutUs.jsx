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
                    <p className="mb-4">At TechMentor, we are revolutionizing online learning by providing a dynamic platform that empowers individuals to master the latest technologies and skills in the ever-evolving digital landscape. </p>
                    <p className="mb-4">As a leading online learning destination, we are committed to fostering a community of learners and mentors who are passionate about staying ahead in the world of technology.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Online classNamees</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>Online classNamees</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right primarycolor me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
