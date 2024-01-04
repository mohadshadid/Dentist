import React from "react";
import Navbar from "../components/Navbar";
import Headnav from "../components/Headnav";
import Section from "../components/Section";
import Test from "../components/Test";
import Midheader from "../components/Midheader";
import Footer from "../components/Footer";
import Feed from "../components/Feed";

const Main = () => {
  return (
    <div>
      <Headnav />
      <Navbar />

      <div className="object-fit-cover ">
        <video
          autoPlay
          muted
          loop
          playsinline
          style={{ width: "100%", height: "40vh ", objectFit: "cover" }}
        >
          <source
            src="https://ik.imagekit.io/shadid/36b014ce8dfe48e1a583f1ec4125b697.MOV?updatedAt=1694418286989"
            type="video/mp4"
          />
        </video>
      </div>

      <Section />
      <Midheader/>
      <Feed/>
      
      
      
      <Footer/>
    </div>
  );
};

export default Main;
