import React from 'react'
import Pricing from '../../Components/Pricing/Pricing'
import BrochureFeature from '../../Components/BrochureFeature/BrochureFeature'
import Companies from '../../Components/Companies/Companies'
import BrochureHeader from '../../Components/BrochureHeader/BrochureHeader'
import Team from '../../Components/Team/Team'
import Time from '../../Components/Time/Time'

export default function Brochure() {
  return (
    <>
     <BrochureHeader/>
     <Team/>
     <Time/>
     <Companies/>
     <BrochureFeature/>
     <Pricing/> 
    </>
  )
}
