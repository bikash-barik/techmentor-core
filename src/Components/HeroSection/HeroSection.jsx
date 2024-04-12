
import React from 'react'
import './HeroSection.css';
import img1 from '../../Assets/Images/carousel-1.jpg';
import img2 from '../../Assets/Images/carousel-2.jpg';
import playstore from '../../Assets/Images/playstore (2).png';
import appstore from '../../Assets/Images/appstore.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
};

// Custom next arrow component
const NextArrow = (props) => {
    const { className,onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
};

export default function HeroSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        loop:true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: <PrevArrow className="prevarrow" />,
        nextArrow: <NextArrow className="nextarrow" />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

  return (
    <>
     <div className="container-fluid p-0 mb-5 header-carousel">
            <Slider {...settings} className='carousel-slider'>
            <div className="position-relative herosectiondiv">
                <img className="img-fluid carouselimg" src={img1} alt="" style={{width:"100%"}}/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                        <div className="justify-content-start ">
                            <div className="col-sm-12 col-lg-9 herosectioninnerdiv">
                                <h5 className="primarycolor text-uppercase mb-3">Best Online Courses</h5>
                                <h1 className="herosectionheading text-white" data-aos="fade-down">Get Educated Online From Your Home</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Embark on a transformative journey with our online learning platform, where the pursuit of knowledge meets the flexibility of your lifestyle. </p>
                                <div className=" mx-auto my-auto flex">
                                    <ul className="imagesul headerimageul">
                                        <li>
                                            <a href="https://play.google.com/store/apps/details?id=co.brown.fjkic&pcampaignid=web_share" className="animated slideInLeft"><img className="playstorefooterbtn1" src={playstore} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://apps.apple.com/in/app/classNameplus/id1324522260" className="animated slideInLeft"><img className="playstorefooterbtn" src={appstore} alt=""/></a>
                                        </li>
                                    </ul>  
                                </div>
                                {/* <a href="https://play.google.com/store/apps/details?id=co.brown.fjkic&pcampaignid=web_share" className="btn playstorebtn animated slideInLeft"><img src="./img/playstore (2).png" alt=""/></a>
                                <a href="https://apps.apple.com/in/app/classNameplus/id1324522260" className="btn appstorebtn animated slideInLeft "><img src="./img/appstore.png" alt=""/></a>
                                <a href="https://web.techmentorcore.com/login" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                            </div>
                        </div>
                </div>
            </div>
            <div className="position-relative herosectiondiv">
                <img className="img-fluid carouselimg" src={img2} alt="" style={{width:"100%"}}/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                        <div className="justify-content-start ">
                            <div className="col-sm-12 col-lg-9 herosectioninnerdiv">
                                <h5 className="primarycolor text-uppercase mb-3">Best Online Courses</h5>
                                <h1 className="herosectionheading text-white" data-aos="fade-down">Get Educated Online From Your Home</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Embark on a transformative journey with our online learning platform, where the pursuit of knowledge meets the flexibility of your lifestyle. </p>
                                <div className=" mx-auto my-auto flex">
                                    <ul className="imagesul headerimageul">
                                        <li>
                                            <a href="https://play.google.com/store/apps/details?id=co.brown.fjkic&pcampaignid=web_share" className="animated slideInLeft"><img className="playstorefooterbtn1" src={playstore} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="https://apps.apple.com/in/app/classNameplus/id1324522260" className="animated slideInLeft"><img className="playstorefooterbtn1" src={appstore} alt=""/></a>
                                        </li>
                                    </ul>  
                                </div>
                                {/* <a href="https://play.google.com/store/apps/details?id=co.brown.fjkic&pcampaignid=web_share" className="btn playstorebtn animated slideInLeft"><img src="./img/playstore (2).png" alt=""/></a>
                                <a href="https://apps.apple.com/in/app/classNameplus/id1324522260" className="btn appstorebtn animated slideInLeft "><img src="./img/appstore.png" alt=""/></a>
                                <a href="https://web.techmentorcore.com/login" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                            </div>
                        </div>
                </div>
            </div>
        </Slider>
    </div>
    </>
  )
}
