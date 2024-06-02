import './Companies.css'
import amazon from '../../Assets/Images/company-logo/amazon.png';
import paytm from '../../Assets/Images/company-logo/paytm.png';
import airtel from '../../Assets/Images/company-logo/airtel.png';
import capgemini from '../../Assets/Images/company-logo/capgemini.png';
import hdfcbank from '../../Assets/Images/company-logo/idfc bank.png';
import hcl from '../../Assets/Images/company-logo/hcl.png';
import makemytrip from '../../Assets/Images/company-logo/make-my-trip.png';
import walmart from '../../Assets/Images/company-logo/walmart.png';
import maersk from '../../Assets/Images/company-logo/maersk.png';
import freecharge from '../../Assets/Images/company-logo/freecharge.png';
import hsbc from '../../Assets/Images/company-logo/hsbc.png';
import tatadigital from '../../Assets/Images/company-logo/tata digital.png';
import visa from '../../Assets/Images/company-logo/visa.png';
import FetchData from '../../Utils/FetchData';
export default function Companies() {

  const companies =  FetchData("Companies");

  console.log("companies data",companies);

  return (
    <>
      <section id="brochure-page4" class="companies">
        <div class="container">

          <div className="text-center">
            <h1 className="brochureheaderheading1 text-center primarycolor px-3 mb-5">
              300+ Companies have hired our Students
            </h1>
          </div>

              <div class="companiesimages">
                {
                  companies && companies.length > 0 ?
                  companies.map((company)=>(
                    <img key={company.id} src={company.imageUrl} alt="company" />
                  ))
                  :
                <> 
                <img src={amazon} alt="bank" />
                <img src={paytm} alt="bank" />
                <img src={airtel} alt="bank" />
                <img src={capgemini} alt="bank" />
                <img src={hdfcbank} alt="bank" />
                <img src={hcl} alt="bank" />
                <img src={walmart} alt="bank" />
                <img src={makemytrip} alt="bank" />
                <img src={maersk} alt="bank" />
                <img src={freecharge} alt="bank" />
                <img src={hsbc} alt="bank" />
                <img src={tatadigital} alt="bank" />
                <img src={visa} alt="bank" />
                </>
                }
                
              </div>
        </div>
      </section>
    </>
  );
}
