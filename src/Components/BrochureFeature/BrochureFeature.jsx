import "./BrochureFeature.css";
import broimg from "../../Assets/Images/about.jpg";
import FeatureCard from "../FeatureCard/FeatureCard";
import { featureData } from "../../Utils/StaticData";

export default function BrochureFeature() {
  return (
    <section className="brouchersection" id="brochure-page5">
      <div className="text-center">
         <h1 className="section-title brochure-section-title bg-white text-center primarycolor px-3 mb-5">Features</h1>
      </div>

      <div className="row featuresrow">
        {
          featureData.map((feature)=>(
              <FeatureCard feature = {feature}/>
          ))
        }
      </div>

      <div className="portal">
        <div className="portalrow">
          <div className="portal-left">
            <p className="portalheading1">OUR PORTAL</p>
            <p className="portalheading2">
              Experience Techmentor-core's Learning Portal through a Quick Video Tour
            </p>
            <p className="portalheading3">
              Leaderboard, Job Sincerity, Modules, Gym, Live Doubts, Contests,
              Mentorship Sessions, Job Portal, Notes, Open Editor, Projects
              &amp; many more such features for you to check out!
            </p>
          </div>
          <div className="portal-right">
            <img alt="broimg" src={broimg} />
          </div>
        </div>
      </div>
    </section>
  );
}
