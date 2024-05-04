import "./TermsAndConditions.css";

export default function TermsAndConditions() {
  return (
    <>
      <div className="termsdiv">
        <div className="page">
          <div id="terms-and-conditions">
          <h1 className="mb-5">Terms And Conditions</h1>
            <p>
              Welcome to Tech Mentor Core. These terms and conditions govern
              your use of our website and the services provided by Tech Mentor
              Core. By accessing our website and enrolling in our courses, you
              agree to comply with these terms and conditions. Please read them
              carefully.
            </p>
            <ol>
              <li>
                <b>Registration Fees:</b>
              </li>

              <p>
                Upon registration for our courses, students are required to pay
                an initial registration fee. This fee is non-refundable except
                under specific conditions outlined below.
              </p>

              <li>
                <b>Refund Policy:</b>
              </li>

              <p>
                Refunds of the initial registration fee are only applicable
                under the following circumstances:
              </p>

              <p>
                <ul>
                  <li className="ullist">
                    {" "}
                    <b>Attendance: </b>Students must maintain a minimum
                    attendance of 80% in classes.
                  </li>
                  <li className="ullist">
                    <b>Online Tests: </b>Students must clear online tests within
                    a maximum of five attempts.
                  </li>
                  <li className="ullist">
                    <b>Mock Interviews: </b>Students must successfully complete
                    mock interview sessions conducted by Tech Mentor Core and
                    get a clearance from the interviewer..
                  </li>
                </ul>

                <p style={{ marginTop: "20px" }}>
                  Despite meeting the above criteria, students do not secure
                  placement opportunities through Tech Mentor Core. All refund
                  requests must be submitted in writing and will be processed
                  within a reasonable time frame.
                </p>
              </p>

              <p>
                In all other cases not specified above, no refunds will be
                issued for registration fees.
              </p>

              <li>
                <b>Placement Terms:</b>
              </li>

              <p>
                Upon securing a job placement facilitated by Tech Mentor Core,
                students are required to pay 30% of the offered salary as agreed
                upon in the offer letter.
              </p>

              <p>
                Failure to comply with the payment terms outlined above may
                result in legal action being taken against the student.
              </p>

              <li>
                <b>Payment Terms:</b>
              </li>

              <p>
                Payment for courses and services provided by Tech Mentor Core
                must be made in full according to the payment schedule outlined
                at the time of enrolment.
              </p>

              <li>
                <b> Intellectual Property:</b>
              </li>

              <p>
                All course materials, including but not limited to lectures,
                presentations, and written content, are the intellectual
                property of Tech Mentor Core and may not be reproduced,
                distributed, or shared without prior written consent.
              </p>

              <li>
                <b> Privacy Policy:</b>
              </li>

              <p>
                Tech Mentor Core is committed to protecting the privacy of our
                users. Please refer to our Privacy Policy for information on how
                we collect, use, and disclose personal information.
              </p>

              <li>
                <b> Amendments:</b>
              </li>

              <p>
                Tech Mentor Core reserves the right to modify or amend these
                terms and conditions at any time without prior notice. Any
                changes will be effective immediately upon posting on our
                website.
              </p>

              <p>
                It is your responsibility to review these terms and conditions
                periodically to ensure compliance. By continuing to use our
                website and services after any changes are made, you agree to be
                bound by the updated terms and conditions.
              </p>

              <li>
                <b>Contact Us:</b>
              </li>

              <p>
                If you have any questions or concerns regarding these terms and
                conditions, please contact us at <b>info@techmentorcore.com</b>
              </p>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
