import './Features.css'

export default function Features() {
  return (
    <>
  <section class="min-vh-60 text-white py-2 px-3 d-flex flex-column justify-content-center">
    <div class="container-md">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item text-center pt-3">
                    <div className="p-4 text-dark featurecard">
                        <h5 className="mb-3">Our Team </h5>
                        <p>Behind Tech Mentor Core is a team of seasoned professionals with extensive experience in software development and education. Our instructors are industry experts committed to delivering high-quality instruction and personalized guidance to help you achieve your career goals.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item text-center pt-3">
                    <div className="p-4 text-dark featurecard">
                        <h5 className="mb-3">Our Offerings</h5>
                      <p>Our flagship Full Stack Development Course covers a wide range of technologies and frameworks, including HTML, CSS, JavaScript, Node.js, React, and more. In addition to technical skills, we provide career support services, including interview preparation, resume building, and job placement assistance, to help you land your dream job in tech.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item text-center pt-3">
                    <div className="p-4  text-dark featurecard">
                      <h5 className="mb-3">Join Our Community</h5>
                      <p>At Tech Mentor Core, you'll become part of a thriving community of aspiring developers, industry professionals, and alumni. Through networking events, workshops, and online forums, we foster connections and collaboration, creating opportunities for growth and success in the tech industry.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item text-center pt-3">
                    <div className="p-4  text-dark featurecard">
                        <h5 className="mb-3">Get Started Today</h5>
                      <p>Ready to take your coding skills to the next level? Explore our courses, meet our instructors, and join the Tech Mentor Core community today. Whether you're a beginner or seasoned professional, we have the resources and support you need to succeed in full-stack development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}
