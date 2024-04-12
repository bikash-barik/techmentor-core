import React from 'react'
import './Footer.css';
import playstore from '../../Assets/Images/playstore (2).png';
import appstore from '../../Assets/Images/appstore.png';
import course1 from '../../Assets/Images/course-1.jpg';
import course2 from '../../Assets/Images/course-2.jpg';
import course3 from '../../Assets/Images/course-3.jpg';

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <a className="btn btn-link" href="/">About Us</a>
                    <a className="btn btn-link" href="/">Contact Us</a>
                    <a className="btn btn-link" href="/">Privacy Policy</a>
                    <a className="btn btn-link" href="/">Terms & Condition</a>
                    <a className="btn btn-link" href="/">FAQs & Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Site No. 26, Laskar, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 7008428565</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@techmentorcore.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="https://twitter.com/techmentorcore"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/techmentorcore"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://youtube.com/@TechMentor-qo7pc?si=xaxOWYHrJLQJFA4y"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/91331189/admin/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://chat.whatsapp.com/HmN2QNaRp2ZFV3d8ctX4iD"><i className="fa-brands fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/techmentorcore/"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course1} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course2} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course3} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course2} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course3} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={course1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                    <div className=" mx-auto my-auto flex"  style={{maxWidth: "400px"}}>
                        <ul className="imagesul">
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=co.brown.fjkic&pcampaignid=web_share"><img className="playstorefooterbtn1" src={playstore} alt=""/></a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/in/app/classNameplus/id1324522260" ><img className="playstorefooterbtn" src={appstore} alt=""/></a>
                            </li>
                        </ul> 
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="/">Techmentorcore</a>, All Right Reserved.

                       
                        Designed By <a className="border-bottom" href="https://glowtechmor.com">Glowtechmor Service PVT. LTD.</a><br/><br/>
                        
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="/">Home</a>
                            <a href="/">Cookies</a>
                            <a href="/">Help</a>
                            <a href="/">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
