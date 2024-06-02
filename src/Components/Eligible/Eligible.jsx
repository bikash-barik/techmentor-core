import './Eligible.css';
import eligible1 from '../../Assets/Images/eligible1.png';
import eligible2 from '../../Assets/Images/eligible2.png';
import eligible3 from '../../Assets/Images/eligible3.png';
export default function Eligible() {
  return (
    <>
      <section className='eligiblesection'>
        <div className="eligiblediv">
            <h1 className='brochureheaderheading1'>Who is Eligible?</h1>

            <h3>Got Motivation?</h3>
            <h3>You're already eligible</h3>
            
            <p>
            No matter what your degree, GPA, or branch is, to get the best job and learn with AccioJob, 
            You are the right fit! <br /> <span>The only criteria are Hardwork and Motivation.</span>

            </p>

            <div className="eligiblecarddiv">
                  <div className="eligiblecard">
                    <div className="eligiblecardimgdiv">
                      <img src={eligible1} alt="" />
                    </div>

                    <div className="eligiblecardinfodiv">
                      <h4>Final Year Students</h4>
                      <p>Preparing for Final Year Placements and for the long-lasting Tech Journey ahead.</p>
                    </div>
                  </div>

                  <div className="eligiblecard eligiblecard1">
                    <div className="eligiblecardinfodiv">
                      <h4>Students and Graduates</h4>
                      <p>Looking to start their career in tech.</p>
                    </div>

                    <div className="eligiblecardimgdiv">
                      <img src={eligible2} alt="" />
                    </div>
                  </div>

                  <div className="eligiblecard">
                    <div className="eligiblecardimgdiv">
                      <img src={eligible3} alt="" />
                    </div>

                    <div className="eligiblecardinfodiv">
                      <h4>Working Professionals</h4>
                      <p>Looking to upskill and make that dream switch.</p>
                    </div>
                  </div>
  
            </div>
        </div>
      </section>
    </>
  )
}