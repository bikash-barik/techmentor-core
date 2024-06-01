import './Curriculum.css';
import { CurriculumData } from '../../Utils/StaticData';

export default function Curriculum() {
  return (
    <>
     <section className='curriculumsection'>
       <div className='curriculumdiv'>
          <h1 className='brochureheaderheading1'>Expert-Led Curriculum</h1>

          <h3>Your path to Mastery in Programming by equipping you to conquer any challenge!</h3>
       </div>
      
      {
        CurriculumData.map((item)=> {
          return (
            <div className="curriculumdesc">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          )
        })
      }
       
     </section> 
    </>
  )
}
