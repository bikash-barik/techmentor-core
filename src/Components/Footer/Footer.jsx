import { Link } from 'react-router-dom';
import './Footer.css';
import playstore from '../../Assets/Images/playstore (2).png';
import appstore from '../../Assets/Images/appstore.png';
import course1 from '../../Assets/Images/course-1.jpg';
import course2 from '../../Assets/Images/course-2.jpg';
import course3 from '../../Assets/Images/course-3.jpg';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    const handleDownloadPdf = async () => {
        navigate('/brochure');
    
        // Wait for the route to render
        setTimeout(async () => {
          const elementIds = ['brochure-page1','brochure-page2','brochure-page3','brochure-page4','brochure-page5','brochure-page6'];
          const pdf = new jsPDF('p', 'pt', 'a5');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const margin = 10;
    
          const getDataUrl = async (element) => {
            const canvas = await html2canvas(element, { scale: 2 });
            return canvas.toDataURL('image/png');
          };
    
          for (const id of elementIds) {
            const element = document.getElementById(id);
            const dataUrl = await getDataUrl(element);
            const imgProps = pdf.getImageProperties(dataUrl);
            const imgWidth = pdfWidth - margin * 2;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    
            pdf.addImage(dataUrl, 'PNG', margin, margin, imgWidth, imgHeight);
            pdf.addPage();
          }
    
          pdf.deletePage(pdf.internal.getNumberOfPages()); // Remove the last empty page
          pdf.save('brochure.pdf');
    
          navigate("/");
        }, 1000); // Adjust the timeout duration if necessary
      };
      
  return (
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="/">Privacy Policy</Link>
                    <Link className="btn btn-link" to="/terms-and-conditions">Terms & Condition</Link>
                    <Link className="btn btn-link" to="/">FAQs & Help</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Site No. 26, Laskar, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 6371083736</p>
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

                    <div className=" mx-auto my-auto d-flex justify-content-center"  style={{maxWidth: "400px"}}>
                       <button className='brochurebtn' onClick={handleDownloadPdf}>Download Brochure</button>
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
                            <Link to="/">Home</Link>
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
