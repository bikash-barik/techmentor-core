import './Journey.css';
import journey from '../../Assets/Images/journey.png';

export default function Journey() {
  return (
    <section className='journeysection'>
      <div className="journeydiv">
        <h1 className='brochureheaderheading1 text-center'>Journey Ahead</h1>
        <div className="journeyimgdiv">
            <img src={journey} alt="" />
        </div>
      </div>
    </section>
  )
}
