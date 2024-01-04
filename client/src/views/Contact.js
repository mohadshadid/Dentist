import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../components/Navbar";
import Headnav from "../components/Headnav";
import Footer from '../components/Footer';
import "../style.css";

const Contact = () =>  {
  const form = useRef();
  console.log("ddd");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("ss");
    emailjs.sendForm('service_6vfdx9t', 'Dental', form.current, 'pIiN0sR5ijjIVg96H')
    .then((result) => { console.log(form.current);
      console.log(result.text);
  }, (error) => { console.log(form.current);
      console.log(error.text);
  });
  e.target.reset()
  };
  
  return (
    <div>
      <Headnav />
      <Navbar />
      



      <div className="container mt-5 ">
        <div className="row">
           <div className="col-md-6 bg-light br ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label font">First Name</label>
                <input type="text" className="form-control colo" name='firstName' id="firstName" placeholder="Enter first name" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label font">Last Name</label>
                <input type="text" className="form-control colo" name='lastName' id="lastName" placeholder="Enter last name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font">Email</label>
                <input type="email" className="form-control colo " name='email' id="email" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label font">Message</label>
                <textarea className="form-control colo" name='message' id="message"  rows="4" placeholder="Enter your message"></textarea>
            </div>
                  
                    <div className="text-center">
                       <button type="submit" className="btn btncolor">
                         Submit
                        </button>
                    </div>
                
            </form>
          </div> 
         


          <div className="col-md-6 bottom-to-top-animation ">
            {/* Right side image */}
            <img
              src="https://ik.imagekit.io/shadid/WhatsApp%20Image%202023-09-11%20at%2010.52.41.jpeg?updatedAt=1694418800454"
              alt="Image"
              className="img-fluid"
              style={{ maxHeight: '100%', height: '82.5%', borderRadius: '30px',marginLeft:'20%'}}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
