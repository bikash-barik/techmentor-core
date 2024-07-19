import React, { lazy } from "react";
import "./company.css";
import Img1 from "./../../Assets/img1.jpg";
import Img2 from "./../../Assets/img2.jpg";
import Img3 from "./../../Assets/img3.jpg";
import Img4 from "./../../Assets/img4.jpg";
const CompanyPage = () => {
  return (
    <section class="container mt-5">
      <div className="intro text-center mb-5">
        <h1>Introduction</h1>
        <div className="">
          <div className=" other">
            <img
              src={Img1}
              data-aos="flip-left"
              loading={lazy}
              className="img1"
              alt="IntroductionImage"
              style={{ border: "1px solid #ddd" }}
            />
            <div className="para2">
              <p>
                Total Student Care (TSC) is an Education Agent with global
                recognition and reputation – we provide help and advice to
                International Students who pursue higher education abroad. We
                believe that education is a fundamental right and everyone
                should have access to quality higher education. With this view
                in mind, we strive to create opportunities for those who have
                genuine aspiration and honest intention, who seek excellent
                quality in tuition, student services, qualifications and career
                prospects post qualification.
              </p>
              <p>
                We work in the best interest of both students and our partner
                universities and colleges - we are professional and reliable. We
                follow the British Council's "Guide to Good Practice for
                Education Agents" in our conducts and the Principles of ''London
                Statement''. Our activities also incorporate guidelines of
                English UK, QISAN and ICEF. In addition to the professional code
                of conducts, we observe ethical, moral and personal values to
                maintain high standards in our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mission-dev mb-5">
        <div class="mission text-center mb-4 p-2">
          <h2>Mission Statement</h2>
          <p className="para3">
            Our mission is to place genuine education minded students at genuine
            education providers. We aim to take leadership in the student
            consultancy industry and set examples for others with our
            distinguished quality of services for students and education
            providers. We strive to uphold the excellence of higher education by
            providing inclusive, competent and professional supports to student
            community and educational institutions.
          </p>
        </div>
        <div class="vision text-center mb-4 p-2">
          <h2>Our Vision</h2>
          <p className="para3">
            To successfully place students for the course at a institution only
            that are in the best interest of the student or their profile. To
            promote all round development of students abilities and
            personalities, and empower the potential.To provide effortless and
            distinctive quality service and commit to improve continually. To
            maintain the high standard of professionalism, performance and
            quality to establish exemplary excellence in higher education, and
            work together with prospective students and overseas colleges,
            universities and associate organisations.
          </p>
        </div>
      </div>

      <div class="goal text-center">
        <h1 className="mb-4">Goal</h1>
        <div class="goall">
          <div className="datas">
            <img
              src={Img2}
              loading={lazy}
              className="img1"
              alt="IntroductionImage"
              style={{ border: "1px solid #ddd" }}
            />
            <div class="wid">
              <h2>Marketing and Promotions</h2>
              <ul class="ull">
                <li>
                  Attending Education Fairs i.e. StudyWorld, Alphe, UK NARIC
                </li>
                <li>Participating in educational and agents' events</li>
                <li>
                  Attending International conference i.e. Going Global
                  Conference (British Council), Gulf Education Conference
                </li>
                <li>
                  Maintaining liaison with Education Providers i.e. local and
                  international feeder institutions
                </li>
                <li>Placing Advertisement in popular Newspapers</li>
                <li>Arranging leaflets, flyers distribution at focal points</li>
              </ul>
            </div>
          </div>
          <div className="datass">
            <img
              src={Img3}
              loading={lazy}
              className="img1"
              alt="IntroductionImage"
              style={{ border: "1px solid #ddd" }}
            />
            <div class="wid">
              <h2>Professional training undertaken</h2>
              <ul class=" ull">
                <li>
                  ABritish Council - Education UK Certificate for Counsellor
                </li>
                <li>English UK Partner Agency Training</li>
                <li>
                  ICEF Agent Training Course to support excellence and
                  professional standards in international education
                </li>
                <li>
                  PIER (Professional International Education Resources) Agent
                  Trainings
                </li>
                <li>
                  ENZ - agent training about studying and living in New Zealand
                </li>
                <li>
                  QEAC Certificate (Pier) - Training for studying and living in
                  Australia
                </li>
              </ul>
            </div>
          </div>
          <div className="datas">
            <img
              src={Img4}
              loading={lazy}
              className="img1"
              alt="IntroductionImage"
              style={{ border: "1px solid #ddd" }}
            />
            <div class="wid">
              <h2>Growth strategy</h2>
              <ul class=" ull">
                <li>
                  Our short-term plan is to increase the number of our partner
                  educational
                </li>
                <li>
                  {" "}
                  institutions so that international students can enjoy more
                  flexibility in their choices
                </li>
                <li>
                  and we have courses and educational institutions for every
                  single and specialised
                </li>
                <li>
                  choice. Our long-term strategy is to open offices in Middle
                  East, Far East, East &
                </li>
                <li>South Asia, North America, Africa and Australia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="text-center my-4">Our Team</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div  class="card">
              <div class="card-body">
                <h4 class="card-title">Jane Doe</h4>
                <p class="card-text text-muted">CEO & Founder</p>
                <p class="card-text">
                  Some text that describes me lorem ipsum ipsum lorem.
                </p>
                <p class="card-text">example@example.com</p>
                <a href="#" class="btn btn-dark btn-block">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div  class="card">
              <div class="card-body">
                <h4 class="card-title">Mike Ross</h4>
                <p class="card-text text-muted">Art Director</p>
                <p class="card-text">
                  Some text that describes me lorem ipsum ipsum lorem.
                </p>
                <p class="card-text">example@example.com</p>
                <a href="#" class="btn btn-dark btn-block">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div  class="card">
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text text-muted">Designer</p>
                <p class="card-text">
                  Some text that describes me lorem ipsum ipsum lorem.
                </p>
                <p class="card-text">example@example.com</p>
                <a href="#" class="btn btn-dark btn-block">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPage;
