import React from 'react';
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';






const Test = () => {
  return (
    <div className="container-xl x">
      <div className="row justify-content-center">
        <div
          className="col-md-8 heading-section text-center mb-5 "
         
        >
          <span className="subhead" >Services</span>
          <h2 className="mb-4 tooths">Toothcare Services</h2>
        </div>
      </div>
      <div className="row justify-content-center ">
        <ServiceCard 
          iconClass="flaticon-tooth "
          title="Tooth Protection"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={100}
        />
        <ServiceCard
          iconClass="flaticon-crown"
          title="Dental Implants"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={200}
        />
        <ServiceCard
          iconClass="flaticon-dental-care"
          title="Dental Care"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={300}
        />
        <ServiceCard
          iconClass="flaticon-tooth-1"
          title="Teeth Whitening"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={400}
        />
        <ServiceCard
          iconClass="flaticon-calculus"
          title="Dental Calculus"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={100}
        />
        <ServiceCard
          iconClass="flaticon-removal"
          title="Tooth Removal"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={200}
        />
        <ServiceCard
          iconClass="flaticon-calculus"
          title="Removal of Tartar"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={300}
        />
        <ServiceCard
          iconClass={faTooth}
          title="Tooth Inspection"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          delay={400}
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, text }) => {
    return (
      <div className="col-md-6 col-lg-3 text-center d-flex align-items-stretch aos-init aos-animate">
        <div className="services-2 bg-white">
          <div className="icon">
          <img src="https://ik.imagekit.io/shadid/tooth-cleaning_5344325.png?updatedAt=1694393554225" alt="Your Image Alt Text" style={{ width: '2rem', height: '2rem'}} />

          </div>
          <div className="text">
            <h2 style={{ color: '#00bbd4' }}>{title}</h2>
            <p style={{ color: '#7f9ab0' }}>{text}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Test;
{/* <i className="fad fa-tooth fa-2x" style={{ color: '#00bbd4' }}></i>
<FontAwesomeIcon icon={faTooth} size="2xl" style={{color: "#00bbd4",}} /> */}