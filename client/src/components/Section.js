import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Section = () => {
  return (
    <div >
      <section className="ftco-section ftco-no-pt ftco-no-pb p-5 ">
        <Container fluid="xl bg-white p-5 custom-border-radius">
          <Row className="g-xl-5">
            <Col md={6} className="d-flex align-items-stretch">
              <div
                className="img w-100 customm-border-radius "
                style={{
                  backgroundImage:
                    "url(https://ik.imagekit.io/shadid/WhatsApp%20Image%202023-09-09%20at%2006.41.19.jpeg?updatedAt=1694400566079)",
                  backgroundSize: "contain", // Set background size to contain
                  backgroundRepeat: "no-repeat", // Prevent repetition
                  backgroundPosition: "center center", // Center the image
                  height: "100%", //
                  
                }}
              ></div>
            </Col>
            <Col md={6} className="heading-section d-flex align-items-center">
              <div className="mt-0 my-lg-5 py-5">
                <span className="subheading">Welcome to our Dental Clinic</span>
                <h2 className="mb-2 sub">
                  Toothcare is a Dental Clinic and Innovative Approach to
                  Treatment
                </h2>
                <p className="sub2">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <Row className="section-counter mt-5 viewed">
                  <Col
                    sm={6}
                    md={6}
                    lg={4}
                    className="d-flex align-items-stretch"
                  >
                    <div className="counter-wrap-2">
                      <div className="icon">
                        <span className="flaticon-affection"></span>
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <span className="countup">3,000</span>
                        </h2>
                        <span className="caption">Happy Patients</span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    md={6}
                    lg={4}
                    className="d-flex align-items-stretch"
                  >
                    <div className="counter-wrap-2">
                      <div className="icon">
                        <span className="flaticon-gum"></span>
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <span className="countup">2,200</span>
                        </h2>
                        <span className="caption">Performed Treatments</span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    sm={6}
                    md={6}
                    lg={4}
                    className="d-flex align-items-stretch"
                  >
                    <div className="counter-wrap-2">
                      <div className="icon">
                        <span className="flaticon-calendar"></span>
                      </div>
                      <div className="text ">
                        <h2 className="number d-flex flex-column align-items-center">
                          <span className="countup  ">2</span>
                        </h2>
                        <span className="caption">Experienced</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Section;
