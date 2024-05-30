import './StudentDetails.css';
import StudentDetailsCard from '../StudentDetailsCard/StudentDetailsCard';

export default function StudentDetails() {
  return (
    <>
      <section className='studentdetailsection'> 
        <h1>What Students have to <br /> say about us...</h1>

        <div className="row g-4 studentdetailrow">
            <StudentDetailsCard/>
            <StudentDetailsCard/>
            <StudentDetailsCard/>
            <StudentDetailsCard/>
            <StudentDetailsCard/>
        </div>
      </section>
    </>
  )
}
