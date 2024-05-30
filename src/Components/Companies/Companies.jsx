import './Companies.css'
import company from '../../Assets/Images/new_logo_techmentor_core-removebg-preview.png'
export default function Companies() {
  return (
    <>
      <section id="brochure-page4" class="companies">
        <div class="container">

          <div className="text-center">
            <h1 className="section-title brochure-section-title bg-white text-center primarycolor px-3 mb-5">
              300+ Companies have hired our Students
            </h1>
          </div>

          <div class="gy-4">
              <div class="companiesimages">
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
                <img src={company} alt="bank" />
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
