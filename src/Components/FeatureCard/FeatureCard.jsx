import './FeaturedCard.css';

export default function FeatureCard({feature}) {
  return (
    <>
     <div className="col-lg-3 col-4 featuredcarddiv">
        <div className='featuredcardinnerdiv'>
           <img src={feature.featureimg} alt="liveclass" />
           <p>{feature.featurename}</p>
        </div>
     </div> 
    </>
  )
}
