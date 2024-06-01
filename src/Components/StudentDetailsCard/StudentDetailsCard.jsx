import './StudentsDetailsCard.css'
// import studentimg from '../../Assets/Images/Digvijay.png';
// import tech from '../../Assets/Images/new_logo_techmentor_core-removebg-preview.png';
export default function StudentDetailsCard({student}) {
  return (
    <>
      <div className="col-lg-4 col-md-6 studentcarddiv">
        
        <div className="studentdetail">
            <div className="studentimgdiv col-3">
                <img src={student.studentimg} alt="" />
            </div>

            <div className="studentinfodiv col-9">
                <p>{student.name}</p>
                <p>{student.role} at</p>
                
                <div className='placecompanyimgdiv'>
                    <img src={student.companyimg} alt="" />
                </div>
                
            </div>
        </div>

        <div className="studentdetailbottomparadiv">
           <p>{student.quote}</p>
        </div>
        
      </div>
    </>
  )
}
