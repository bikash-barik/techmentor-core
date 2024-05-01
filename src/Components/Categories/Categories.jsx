import React from 'react'
import cat1 from '../../Assets/Images/cat-1.jpg'
import cat2 from '../../Assets/Images/cat-2.jpg'
import cat3 from '../../Assets/Images/cat-3.jpg'
import cat4 from '../../Assets/Images/cat-4.jpg'
export default function Categories() {
  return (
    <>
    <div className="container-xxl py-5 category">
        <div className="container">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <h6 className="section-title bg-white text-center primarycolor px-3">Categories</h6>
                <h1 className="mb-5">Courses Categories</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12" data-aos="zoom-in" data-wow-delay="100">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={cat1} alt="/"/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"style={{margin: "1px"}}>
                                    <h5 className="m-0" style={{color:"black"}}>Full stack Development</h5>
                                    <small className="primarycolor">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="300">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={cat2} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0" style={{color:"black"}}>PGDCA</h5>
                                    <small className="primarycolor">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="zoom-in" data-aos-delay="500">
                            <a className="position-relative d-block overflow-hidden" href="/">
                                <img className="img-fluid" src={cat3} alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                    <h5 className="m-0"  style={{color:"black"}}>MERN Stack</h5>
                                    <small className="primarycolor">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6" data-aos="zoom-in" data-wow-delay="700" style={{minheight: "350px"}}>
                    <a className="position-relative d-block h-100 overflow-hidden" href="/">
                        <img className="img-fluid position-absolute w-100 h-100" src={cat4} alt="" style={{objectfit : "cover"}}/>
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                            <h5 className="m-0" style={{color:"black"}}>Digital Marketing</h5>
                            <small className="primarycolor">49 Courses</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
