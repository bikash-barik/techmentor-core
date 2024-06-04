import './Power.css';
import { powerData } from "../../Utils/StaticData";
export default function Power() {
  return (
    <>
      <section className="powersection">
        <div className="curriculumdiv">
          <h1 className="brochureheaderheading1">
            Unlock the potential of Full-Stack Development
          </h1>

          <h3>But First, Why should even study Full Stack Development?</h3>
        </div>

        <div className="powerdiv">
          {powerData.map((power, index) => (
            <div className="powercarddiv" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="powercardinner1">
                    <p>{power.innerdiv1}</p>
                  </div>

                  <div className="powercardinner2">
                    <p>{power.innerdiv2}</p>
                  </div>
                </>
              ) : (
                <>
                 <div className="powercardinner2">
                    <p>{power.innerdiv2}</p>
                  </div>

                  <div className="powercardinner1">
                    <p>{power.innerdiv1}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
