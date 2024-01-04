import React from "react";
import Navbar from "../components/Navbar";
import Headnav from "../components/Headnav";
import Footer from "../components/Footer";
import "../style.css";

const Service = () => {
  
  return (
    <div>
      <Headnav />
      <Navbar />

      {/* <div className="mainimg">
        <img
          src="https://ik.imagekit.io/shadid/production_id_4489972%20(2160p).mp4?updatedAt=1701016940829"
          className="aboutimg"
          alt="..."
        />
        <p class="image-text">Services</p>
      </div> */}
            <div className="object-fit-cover ">
        <video
          autoPlay
          muted
          loop
          playsinline
          style={{ width: "100%", height: "40vh ", objectFit: "cover" }}
        >
          <source
    src={`https://drive.google.com/uc?export=download&id=1vUJAnNtBrDb__FFpemCf6L61NgBzxY9c`}
    type="video/mp4"
          />
        </video>
      </div>

      <div className=" row justify-content-evenly mx-0">
        

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/Orthodontic%20Treatment.jpg?updatedAt=1694211125711"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor" >Orthodontic Treatment</p> 
            <p className="text mt-1 text-center secondcolor" >Metal Braces, Ceramic Braces, Clear Aligners, Lingual Braces, Self-Ligation Braces, Retainers</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/woman-whitening-treatment.jpg?updatedAt=1694213271412"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor">Full Mouth Restoration</p> 
            <p className="text mt-1 text-center secondcolor" >Crown & Bridges, Dentures (Flexible Dentures), BPS Dentures, Precision Attachment</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/dentist-whiting-teeth.jpg?updatedAt=1694213268467"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor" >Gums Treatment</p> 
            <p className="text mt-1 text-center secondcolor" >Scaling (Oral Prophylaxis), Gum/Flap Surgery, Crown Lengthening, Root Planing</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/high-angle-scared-patient-dentist.jpg?updatedAt=1694214065429"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor" >Root Canal Treatment</p> 
            <p className="text mt-1 text-center secondcolor" >Painless single visit Root canals, Retreatment RCT, Apicoectomy, Post and Core, Tooth Coloured</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 slide-in-bottom">
          <img
            src="https://ik.imagekit.io/shadid/dentist-assistant-examining-child-teeth-dental-office.jpg?updatedAt=1694214221104"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor">Kids Dentistry</p> 
            <p className="text mt-1 text-center secondcolor" >Fillings, Space Maintainer, Extractions, Preventive child dentistry fluoride application, pit and fissure</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/female-dentist-with-patient.jpg?updatedAt=1694214531941"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor" >Oral Surgery</p> 
            <p className="text mt-1 text-center secondcolor" >Minimal Traumatic Extraction, Painless Impactions, Abcess Drainage, Jaw fracture</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/artificial-jaw-dentist-s-office.jpg?updatedAt=1694215175000"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor">Dental Implant Treatment</p> 
            <p className="text mt-1 text-center secondcolor">Metal Braces, Ceramic Braces, Clear Aligners, Lingual Braces, Self-Ligation Braces, Retainers</p>
            
            </p>
          </div>
        </div>

        <div class="card col col-3 p-2 ">
          <img
            src="https://ik.imagekit.io/shadid/patient-dentist.jpg?updatedAt=1694215175335"
            class="card-img-top"
            alt="..."
            style={{ borderRadius: '10px' }}
          />
          <div class="card-body">
            <p class="card-text" >
            <p className="text text-center firstcolor">Smile Makeover</p> 
            <p className="text mt-1 text-center secondcolor" >Tooth whiting, Tooth Reshaping, Orthgathnatic Plastic Surgery, E-Max Veneer</p>
            
            </p>
          </div>
        </div>

        </div>
        <Footer/>



      
    </div>
  );
};

export default Service;
