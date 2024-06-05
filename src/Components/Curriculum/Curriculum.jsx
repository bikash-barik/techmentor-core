import "./Curriculum.css";
import { CurriculumData } from "../../Utils/StaticData";

export default function Curriculum() {
  return (
    <>
      <section className="curriculumsection">
        <div className="curriculumdiv">
          <h1 className="brochureheaderheading1" style={{ color: "white" }}>
            Expert-Led Curriculum
          </h1>

          <h3>
            Unlock your path to mastery in programming with our comprehensive
            training. Equip yourself with the skills needed to tackle any coding
            challenge and excel in the tech world.
          </h3>
        </div>

        {CurriculumData.map((item) => {
          return (
            <div className="curriculumdesc">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
