import React, { useState, useEffect } from "react";
import Top from "../../Components/Top/Top";
import Categories from '../../Components/Categories/Categories';
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import AllCourses from "../../Components/AllCourses/AllCourses";
import RecentCourses from "../../Components/RecentCourses/RecentCourses";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";
import './Courses.css';
import image1 from '../../Assets/Images/1.png';
import image2 from '../../Assets/Images/2.png';
import image3 from '../../Assets/Images/2.png';
import image4 from '../../Assets/Images/4.png';
// import { Link } from "react-router-dom";
export default function Courses() {

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetchCoursesData();
  }, []);

  const fetchCoursesData = async () => {
    try {
      const response = await fetch(
        "https://api.classplusapp.com/v2/course/preview/diy/similar/eyJ0dXRvcklkIjpudWxsLCJvcmdJZCI6NTQ1MTExLCJjYXRlZ29yeUlkIjpudWxsfQ==?subCatList=[]&mainCategory=0"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response:", data);
      setCoursesData(data.data);
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  return (
    <>
      <Top data="Courses" />
      <Categories/>

      <div className="coursestopdiv">
        <p>What are You Preparing for?</p>
        <ul>
          <li><a href="/"><img src={image1} alt="" /><span>All</span> <span>Categories</span> <span>(16)</span></a></li>
          <li><a href="/"><img src={image2} alt="" /><span>Teaching</span> <span>Job</span> <span>Exams</span> <span>(2)</span></a></li>
          <li><a href="/"><img src={image3} alt="" /><span>School</span> <span>Acedemics</span> <span>(1)</span></a></li>
          <li><a href="/"><img src={image4} alt="" /><span>Design/Marketing </span> <span>(1)</span></a></li>
          <li><a href="/"><img src={image4} alt="" />More</a></li>
        </ul>
      </div>

      <div className="subcategories">
        <p>Sub-category (52)</p>
        <ul>
          <li><a href="/"><span>Programming</span> <span>(9)</span> </a></li>
          <li><a href="/"><span>Coding</span> <span>(8)</span> </a></li>
          <li><a href="/"><span>Job</span> <span>(4)</span> </a></li>
          <li><a href="/"><span>Graduate</span> <span>(4)</span> </a></li>
          <li><a href="/"><span>Testing</span> <span>(3)</span> </a></li>
          <li><a href="/"><span>Under</span> <span>Gradua...</span> <span>(3)</span> </a></li>
          <li><a href="#allcoursesdiv" className="subcategorywiewallbtn"><span>View </span> <span>All</span></a></li>
        </ul>
      </div>

      <div className="coursesdiv">

      {coursesData && coursesData.popular && <PopularCourses course = {coursesData.popular.coursesData}/>}

      <div className="filteredcoursesdiv">
       <h1 className="popularcoursesheading">Filtered Courses</h1>
       <div className="filteredcoursesrow">

      <div className="filterCourseSection__container__card" style={{ backgroundImage: 'url("https://ali-cdn-cp-assets-public.classplus.co/tutor-website/bg_live_courses.svg")',backgroundRepeat:"no-repeat" }}>
      <div className="filterCourseSection__container__card__heading">Live Courses</div>
      <div className="filterCourseSection__container__card__footer">

        <div className="filterCourseSection__container__card__footer__left">
          <span style={{ position: 'relative', maxWidth: '100%' }}>
            <span style={{ display: 'block', maxWidth: '100%' }}>
              <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ display: 'block', maxWidth: '100px' }} />
            </span>
          </span>
          <img
            alt=""
            src="https://courses-assets-v2.classplus.co/_next/image?url=https://ali-cdn-cloudn.classplus.co/web/tutorWebsite/homePage/rightArrowIcon.svg&w=64&q=75"
          />
        </div>
        <div className="filterCourseSection__container__card__footer__right">
          <img src="https://ali-cdn-cp-assets-public.classplus.co/tutor-website/icon_live_courses.svg" height="90" width="90" alt="courseimg"/>
        </div>
      </div>
    </div>

    <div className="filterCourseSection__container__card" style={{ backgroundImage: 'url("https://ali-cdn-cp-assets-public.classplus.co/tutor-website/bg_notes%26books.svg")',backgroundRepeat:"no-repeat" }}>
      <div className="filterCourseSection__container__card__heading">Notes and Books</div>
      <div className="filterCourseSection__container__card__footer">
        <div className="filterCourseSection__container__card__footer__left">
          <span style={{ position: 'relative', maxWidth: '100%' }}>
            <span style={{ display: 'block', maxWidth: '100%' }}>
              <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ display: 'block', maxWidth: '100%' }} />
            </span>
          </span>
          <img
            alt=""
            src="https://courses-assets-v2.classplus.co/_next/image?url=https://ali-cdn-cloudn.classplus.co/web/tutorWebsite/homePage/rightArrowIcon.svg&w=64&q=75"
          />
        </div>
        <div className="filterCourseSection__container__card__footer__right">
          <img src="https://ali-cdn-cp-assets-public.classplus.co/tutor-website/icon_notes_books.svg" height="90" width="90" alt="courseimg"/>
        </div>
      </div>
    </div>


    <div className="filterCourseSection__container__card" style={{ backgroundImage: 'url("https://ali-cdn-cp-assets-public.classplus.co/tutor-website/bg_rec_courses.svg")',backgroundRepeat:"no-repeat" }}>
      <div className="filterCourseSection__container__card__heading">Recorded Courses</div>
      <div className="filterCourseSection__container__card__footer">
        <div className="filterCourseSection__container__card__footer__left">
          <span style={{ position: 'relative', maxWidth: '100%' }}>
            <span style={{ display: 'block', maxWidth: '100%' }}>
              <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ display: 'block', maxWidth: '100%' }} />
            </span>
          </span>
          <img
            alt=""
            src="https://courses-assets-v2.classplus.co/_next/image?url=https://ali-cdn-cloudn.classplus.co/web/tutorWebsite/homePage/rightArrowIcon.svg&w=64&q=75"
          />
        </div>
        <div className="filterCourseSection__container__card__footer__right">
          <img src="https://ali-cdn-cp-assets-public.classplus.co/tutor-website/icon_recorded_courses.svg" height="90" width="90" alt="courseimg"/>
        </div>
      </div>
    </div>

       </div>
      </div>
      {coursesData && coursesData.recent && <RecentCourses course = {coursesData.recent.coursesData}/>}
      {coursesData && coursesData.featured && <FeaturedCourses course = {coursesData.featured.coursesData}/>}
      <div id="allcoursesdiv">
        {coursesData && coursesData.all && <AllCourses course = {coursesData.all.coursesData}/>}
      </div>
     
      </div>
    </>
  );
}
