import React from 'react'
import PricingCard from '../PricingCard/PricingCard';
export default function Pricing() {
    let data = [{
        title: "FREE",
        price: "$0",
        user: "Single User",
        storage: "5GB Storage",
        domain: "Free Subdomain",
        project: "text-muted",
        projectIcon: "fas fa-times",
        phone: "text-muted",
        phoneIcon: "fas fa-times",
        subDomain: "text-muted",
        subDomainIcon: "fas fa-times",
        monthly: "text-muted",
        monthlyIcon: "fas fa-times"
      },
      {
        title: "PLUS",
        price: "$9",
        user: "5 Users",
        storage: "50GB Storage",
        domain: "Free Subdomain",
        project: "",
        projectIcon: "fas fa-check",
        phone: "",
        phoneIcon: "fas fa-check",
        subDomain: "",
        subDomainIcon: "fas fa-check",
        monthly: "text-muted",
        monthlyIcon: "fas fa-times"
      }];
    
  return (
    <>
       <section className="pricing py-5" id="brochure-page6">
        <div className="container">
          <div className="text-center ">
            <h1 className="section-title brochure-section-title bg-white text-center primarycolor px-3 mb-5">Pricing</h1>
          </div>

          <div className="row" style={{display:'flex',justifyContent:"center"}}>
            {
              data.map((e, i) => {
                return <PricingCard cardData={e} key={i} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
