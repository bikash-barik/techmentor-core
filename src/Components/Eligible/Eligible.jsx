import "./Eligible.css";
import eligible1 from "../../Assets/Images//eligible/eligible1.png";
import eligible2 from "../../Assets/Images/eligible/eligible2.png";
import eligible3 from "../../Assets/Images/eligible/eligible3.png";
export default function Eligible() {
  return (
    <>
      <section className="eligiblesection">
        <div className="eligiblediv">
          <h1 className="brochureheaderheading1">Who is Eligible?</h1>

          <h3>Ready for Inspiration?</h3>
          <h3>You're already eligible</h3>

          <p>
            Regardless of your degree, GPA, or field of study, you're a perfect
            match to excel with Techmentor-Core. You're the ideal candidate!{" "}
            <br /> <span>The only requirements are diligence and drive.</span>
          </p>

          <div className="eligiblecarddiv">
            <div className="eligiblecard">
              <div className="eligiblecardimgdiv">
                <img src={eligible1} alt="" />
              </div>

              <div className="eligiblecardinfodiv">
                <h4>Final Year Students</h4>
                <p>
                Preparing for final year placements and the enduring journey ahead in the tech realm.
                </p>
              </div>
            </div>

            <div className="eligiblecard eligiblecard1">
              <div className="eligiblecardinfodiv">
                <h4>Students and Graduates</h4>
                <p>Embarking on their tech career journey.</p>
              </div>

              <div className="eligiblecardimgdiv">
                <img src={eligible2} alt="" />
              </div>
            </div>

            <div className="eligiblecard">
              <div className="eligiblecardimgdiv">
                <img src={eligible3} alt="" />
              </div>

              <div className="eligiblecardinfodiv">
                <h4>Working Professionals</h4>
                <p>Seeking to upskill and transition into their dream roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
