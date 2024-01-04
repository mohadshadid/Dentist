import React from "react";
import Navbar from "../components/Navbar";
import Headnav from "../components/Headnav";
import Footer from "../components/Footer";

import "../style.css";

const About = () => {
  return (
    <div>
      <Headnav />
      <Navbar />
      


      <div className="mainimg">
        <img
          src="https://ik.imagekit.io/shadid/Ctom%20dimensions%202000x500%20px%2001.48.06.jpeg?updatedAt=1694472596549"
          className="aboutimg"
          alt="..."
        />
        {/* <p class="image-text">About Us</p> */}
      </div>
      {/* <div>
      <p class="">About Us</p>
      </div> */}
      <p className="mt-3  custom-border-width "> WHO WE ARE</p>

      <div className="textadj">
        <p>
          Smile dental clinic is backed by the latest machines and equipment in
          the clinic to make the dental treatment a hassle-free and comfortable
          process. We are well proficient in providing dental services for
          Dental Crowns and Bridges, Dental Braces, Dental Fillings, Dental
          Scaling, Dental Implants, Oral Surgery involving Third Molar Impaction
          and Root Canal Treatment, Cosmetic Dentistry, Pediatric Dentistry, and
          Gums Treatment.
        </p>

        <p>
          Permanent teeth are designed to last a lifetime. The risk of tooth and
          gum diseases can be reduced with good oral hygiene, a low-sugar diet,
          use of a mouth guard when playing sport, and regular visits to the
          dentist or other oral health professional
        </p>
        <p>
          At our clinic, we ensure that all the patients getthe right treatment,
          right advice, right medication and at the right price. We have a team
          of technicians who handle the medical equipment with utmost care and
          precision. One of our greatest assets is the faith of our patients
          that we have earned, and we are proud to serve our patients with
          confidence, care, love,and precision.
        </p>
      </div>

      <p className="mt-3  custom-border-width "> WHY US?</p>

      <div className="textadj">
        <p>
          Our dental care facility could be termed as a one-stop solution for
          all the dental and oral health problems. The main emphasis at our
          dental clinic is on the patient’s comfort and quick recovery from the
          ailment. The professionals working at our clinic ensure that all the
          patients get the right treatment, advice and most important of all,
          complete care.
        </p>
        <p>
          The dental specialists or the dentists employed with us are the alumni
          of renowned universities around the world. Under their supervision,
          our patients get the proper solution for their problems. Our clinic is
          exceptional combination of robust infrastructure and a team of
          diligent doctors who have pledged to serve every patient with care,
          love, and precision
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
