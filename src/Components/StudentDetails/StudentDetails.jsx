import './StudentDetails.css';
import StudentDetailsCard from '../StudentDetailsCard/StudentDetailsCard';
import { StudentDetailsData } from '../../Utils/StaticData';
export default function StudentDetails() {
  return (
    <>
      <section className='studentdetailsection'> 
        <h1 className='brochureheaderheading1'>What Students have to <br /> say about us...</h1>

        <div className="studentcategory">
            <div className='studentcategorypara'>
              <p>Student With CS/IT background</p>
            </div>
        </div>

        <div className="row g-4 studentdetailrow">
              <StudentDetailsCard student={StudentDetailsData[0]}/>
              <StudentDetailsCard student={StudentDetailsData[1]}/>
              <StudentDetailsCard student={StudentDetailsData[2]}/>
        </div>

        <div className="studentcategory">
            <div className='studentcategorypara'>
              <p>Student with Non-It Background</p>
            </div>
        </div>

        <div className="row g-4 studentdetailrow">
              <StudentDetailsCard student={StudentDetailsData[3]}/>
              <StudentDetailsCard student={StudentDetailsData[4]}/>
              <StudentDetailsCard student={StudentDetailsData[5]}/>
        </div>

        <div className="studentcategory">
            <div className='studentcategorypara'>
              <p>Student with a career gap</p>
            </div>
        </div>

        <div className="row g-4 studentdetailrow">
              <StudentDetailsCard student={StudentDetailsData[6]}/>
              <StudentDetailsCard student={StudentDetailsData[7]}/>
              <StudentDetailsCard student={StudentDetailsData[8]}/>
        </div>
      </section>
    </>
  )
}
