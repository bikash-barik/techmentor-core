import './Pricing.css'
import PricingCard from '../PricingCard/PricingCard';
import {PricingData} from '../../Utils/StaticData';

export default function Pricing() {    
  return (
    <>
       <section className="pricing py-5" id="brochure-page6">
        <div className="container">
          <div className="text-center ">
            <h1  className='brochureheaderheading1' style={{color:"white"}}>Pricing</h1>
            <h3  style={{color:"white"}}>Start your journey toward success with an easily manageable tuition fee!</h3>
          </div>

          <div className="row" style={{display:'flex',justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
            {
              PricingData.map((e, i) => {
                return <PricingCard cardData={e} key={i} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
