import React from 'react'
import Pricing from '../../Components/Pricing/Pricing'
import BrochureFeature from '../../Components/BrochureFeature/BrochureFeature'
import Companies from '../../Components/Companies/Companies'
import BrochureHeader from '../../Components/BrochureHeader/BrochureHeader'
import Team from '../../Components/Team/Team'
import Time from '../../Components/Time/Time'
import Curriculum from '../../Components/Curriculum/Curriculum'
import StudentDetails from '../../Components/StudentDetails/StudentDetails'
import Highlights from '../../Components/Highlights/Highlights'
// import Eligible from '../../Components/Eligible/Eligible'

export default function Brochure() {
  return (
    <>
     <BrochureHeader/>
     <Team/>
     <Time/>
     <Curriculum/>
     <StudentDetails/>
     <Companies/>
     {/* <Eligible/> */}
     <BrochureFeature/>
     <Highlights/>
     <Pricing/> 
    </>
  )
}
