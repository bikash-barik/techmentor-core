import './PricingCard.css'

export default function PricingCard(props) {
  return (
<div className="col-lg-4 col-6">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      {/* <h6 className="card-price text-center">{props.cardData.desc}</h6> */}
      {
        props.cardData.price &&  <h6 className="card-price1 text-center">{props.cardData.price}</h6>
      }
      {
        props.cardData.pricedesc &&  <h6 className="card-price text-center">{props.cardData.pricedesc}</h6>
      }
      {
        props.cardData.payrest &&  <h6 className="card-price text-center mt-4">{props.cardData.payrest}</h6>
      }
      <ul className="fa-ul">
        <li>
          <div>
            <p>Your Annual Income</p>
          </div>
          <div>
            <p>Pay in 6 Months</p>
          </div>
        </li>
        {
          props.cardData.installments.map((installment)=>(
            <li>
            <div>
              <p><strong>{installment.package1}</strong></p>
            </div>
            <div>
              <p><strong>{installment.installment1}</strong></p>
            </div>
          </li>
          ))
        }
      </ul>
     
      <h6 className="card-price text-center">{props.cardData.notice}</h6>

    </div>
  </div>
</div>
  )
}
