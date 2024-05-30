import './StudentsDetailsCard.css'
import studentimg from '../../Assets/Images/Digvijay.png';
import tech from '../../Assets/Images/new_logo_techmentor_core-removebg-preview.png';
export default function StudentDetailsCard() {
  return (
    <>
      <div className="col-lg-4 col-md-6 studentcarddiv">
        <div className="studentcardtop">
            <p>Student with career gap</p>
        </div>

        <div className="studentdetail">
            <div className="studentimgdiv col-3">
                <img src={studentimg} alt="" />
            </div>

            <div className="studentinfodiv col-9">
                <p>Saurav sable</p>
                <p>Software Engineer at</p>
                <img src={tech} alt="" />
            </div>
        </div>

        <div className="studentdetailbottomparadiv">
           <p>“From losing hope to now worming as an SDE in GMT"</p>
        </div>
        
      </div>
    </>
  )
}
