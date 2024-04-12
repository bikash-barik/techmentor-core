import React from 'react'
import Service from '../../Components/Service/Service';
import Instructor from '../../Components/Instructor/Instructor';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Categories from '../../Components/Categories/Categories';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PopularCourses from '../../Components/CoursesData/CoursesData';

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Service/>
    <AboutUs/>
    <Categories/>
    <PopularCourses/>
    <Instructor/>
    </>
  )
}
