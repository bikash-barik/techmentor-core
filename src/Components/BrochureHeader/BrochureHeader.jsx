import './BrochureHeader.css';
import logo from '../../Assets/Images/new_logo_techmentor_core-removebg-preview.png';

export default function BrochureHeader() {
  return (
    <>
      <section className='brochureheadersection' id="brochure-page1">

        <div className='d-flex justify-content-center mb-4'>
            <div className='w-90'>
               <img className='w-100' src={logo} alt="" />
            </div>
        </div>

        <h1 className='brochureheaderheading1 text-center'>Inspiring Future Tech Leaders </h1>
        <h1 className='brochureheaderheading2 text-center'>for a Brighter Tomorrow</h1>

        <div className='d-flex justify-content-center my-5'>
            <div className='brochureheadercounterdiv'>
                <div className="brochureheadercountercard">
                    <h1>8000+</h1>
                    <h2>Live Impacts</h2>
                </div>
                <div className="brochureheadercountercard">
                    <h1>300+</h1>
                    <h2>Hiring Partners</h2>
                </div>
                <div className="brochureheadercountercard">
                   <h1>4.5/5</h1>
                   <h2>Student Review</h2>
                </div>
                <div className="brochureheadercountercard">
                   <h1>8.3 LPA</h1> 
                   <h2>Average Salary</h2>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
