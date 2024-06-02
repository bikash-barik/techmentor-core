import './Demo.css';
import videoimage from '../../Assets/Images/videoimage.png';

export default function Demo() {
  return (
    <>
      <section className="demosection">
        <h3>
          Have a look at how our Main Classes and Mentorship Sessions are
          conducted
        </h3>

        <div className="demodiv">
            <div className="demoinner">
                 <p>Class Topic: Loops , Switch Cases & Functions</p>
            </div>

            <div className="demovideodiv">
               <img src={videoimage} alt="" />
            </div>

            <div className="demoinner">
                 <p>Mentorship Session taken by one of our mentor</p>
            </div>

            <div className="demovideodiv">
               <img src={videoimage} alt="" />
            </div>
        </div>


      </section>
    </>
  );
}
