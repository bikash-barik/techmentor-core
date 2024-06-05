import "./Pricing.css";
import PricingCard from "../PricingCard/PricingCard";
import { PricingData } from "../../Utils/StaticData";
import price from '../../Assets/Images/education_15466643.png';

export default function Pricing() {
  return (
    <>
      <section className="pricing py-5" id="brochure-page6">
        <div className="container">
          <div className="text-center ">
            <h1 className="brochureheaderheading1" style={{ color: "white" }}>
              Pricing
            </h1>
            <h3 style={{ color: "white" }}>
              Embark on your path to success with an easily manageable tuition
              fee!
            </h3>
          </div>

          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
             <div className="col-lg-4 col-8">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                  Pay Tuition Fee
                  </h5>
                  <div className="priceimagediv">
                     <img className="priceimage" src={price} alt="" />
                  </div>
                 
                  <h4 className=" text-center">₹ 30,000</h4>
                  <h4 className=" text-center">for 6 Months</h4>

                </div>
              </div>
            </div>

            {PricingData.map((e, i) => {
              return <PricingCard cardData={e} key={i} />;
            })}

           
          </div>
        </div>
      </section>
    </>
  );
}
