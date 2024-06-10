import Top from '../../Components/Top/Top';

export default function Contact() {
  return (
    <>
    <Top data="Contact"/>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <h6 className="section-title bg-white text-center primarycolor px-3">Contact Us</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <h5>Get In Touch</h5>
                    <p className="mb-4">Ready to embark on your learning journey? Connect with us today! Our dedicated support team is here to answer your questions, provide guidance, and ensure your experience with our platform is seamless.</p>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bgprimary" style={{width: "50px", height: "50px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="primarycolor">Office</h5>
                            <p className="mb-0"> Site No. 26, Laskar, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bgprimary" style={{width: "50px", height: "50px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="primarycolor">Mobile</h5>
                            <p className="mb-0">+91 6371083736</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bgprimary" style={{width: "50px", height: "50px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="primarycolor">Email</h5>
                            <p className="mb-0">info@techmentorcore.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-wow-delay="300">
                    <iframe title='map' className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.854112673705!2d77.60115970025844!3d12.942164160637658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144bcbc43145%3A0xeea62de53458f057!2sAdugodi%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708596053366!5m2!1sen!2sin"
                        frameborder="0" style={{minHeight: "300px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="500">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
