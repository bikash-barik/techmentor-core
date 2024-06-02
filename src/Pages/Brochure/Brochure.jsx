import './Brochure.css'
import Pricing from '../../Components/Pricing/Pricing'
import BrochureFeature from '../../Components/BrochureFeature/BrochureFeature'
import Companies from '../../Components/Companies/Companies'
import BrochureHeader from '../../Components/BrochureHeader/BrochureHeader'
import Team from '../../Components/Team/Team'
import Time from '../../Components/Time/Time'
import Curriculum from '../../Components/Curriculum/Curriculum'
import StudentDetails from '../../Components/StudentDetails/StudentDetails'
import Highlights from '../../Components/Highlights/Highlights'
import Journey from '../../Components/Journey/Journey'
import Eligible from '../../Components/Eligible/Eligible'
import Power from '../../Components/Power/Power'
import Demo from '../../Components/Demo/Demo'
import BrochureBottom from '../../Components/BrochureBottom/BrochureBottom'

export default function Brochure() {
  return (
    <div className='brochurediv'>
     <BrochureHeader/>
     <Team/>
     <Power/>
     <Time/>
     <Curriculum/>
     <StudentDetails/>
     <Companies/>
     <BrochureFeature/>
     <Journey/>
     <Eligible/>
     <Demo/>
     <Highlights/>
     <Pricing/> 
     <BrochureBottom/>
    </div>
  )
}
