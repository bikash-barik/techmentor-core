import React from 'react'
import './Instructor.css';

import inst1 from '../../Assets/Images/NalinakshVyas.jpg';
import inst2 from '../../Assets/Images/Digvijay.png';
import inst3 from '../../Assets/Images/Jyothi-Vedurada.jpg';
import inst4 from '../../Assets/Images/meenakshi.png';

export default function Instructor() {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center primarycolor px-3">Instructors</h6>
                <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100" >
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid facultyimage" src={inst1} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{margintop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Nalinaksh S. Vyas </h5>
                            <small>Professor</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid facultyimage" src={inst2} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{margintop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Digvijay S. Pawar</h5>
                            <small>Associate Professor</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid facultyimage" src={inst3} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center"  style={{margintop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Jyothi Vedurada</h5>
                            <small>Associate Professor</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="700">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid facultyimage" src={inst4} alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center"  style={{margintop: "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Meenakshi</h5>
                            <small>Associate Professor</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
