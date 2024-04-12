import React from 'react'
import './Service.css';

export default function Service() {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap mb-4 primarycolor"></i>
                            <h5 className="mb-3">Skilled Instructors</h5>
                            <p>Our experts bring a wealth of industry knowledge and practical insights to guide you through your educational journey.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe primarycolor mb-4"></i>
                            <h5 className="mb-3">Online Classes</h5>
                            <p>Connect to a virtual class room from the comfort of your own space, where expert instructors deliver engaging lessons.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home primarycolor mb-4"></i>
                            <h5 className="mb-3">Home Projects</h5>
                            <p>Bring learning to life with our home projects, offering a practical, hands-on approach that turns theory into tangible skills.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="700">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open primarycolor mb-4"></i>
                            <h5 className="mb-3">Book Library</h5>
                            <p>Dive into a world of knowledge with our extensive book library, where a diverse collection awaits to inspire and educate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
