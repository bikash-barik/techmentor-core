import './StudentDetails.css';
import StudentDetailsCard from '../StudentDetailsCard/StudentDetailsCard';
import { StudentDetailsData } from '../../Utils/StaticData';
export default function StudentDetails() {
  return (
    <>
      <section className='studentdetailsection'> 
        <h1 className='brochureheaderheading1'>What Students have to <br /> say about us...</h1>

        <div className="row g-4 studentdetailrow">
          {
            StudentDetailsData.map((student)=>(
              <StudentDetailsCard student={student}/>
            ))
          }
        </div>
      </section>
    </>
  )
}
