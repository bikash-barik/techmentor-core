import './FeaturedCard.css';
import liveclass from '../../Assets/Images/live classes.png';

export default function FeatureCard() {
  return (
    <>
     <div className="col-lg-3 featuredcarddiv">
        <div className='featuredcardinnerdiv'>
           <img src={liveclass} alt="liveclass" />
           <p>Live Classes</p>
        </div>
     </div> 
    </>
  )
}
