import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Midheader = () => {
    const linkStyle = {
        color: "#c6e3ec", // Change this to the color you want
        textDecoration: "none", // Remove underline
        fontWeight: 1000,
      };
  return (
    <div className="x">
<div className="mainim">
  <div className="blur-background ">
  <div className="image-text1">
        <Link to="https://calendly.com/mohadisamshadid/30min" style={linkStyle}>
            BOOK YOUR APPOINTMENT</Link>
        <p>Do not wait, make an appointment today!</p>
      </div>
  </div>
  <img
    src="https://ik.imagekit.io/shadid/Custom%20dimensions%203000x500%20px.jpeg?updatedAt=1694398294244"
    className="about"
    alt="..."
  />
</div>
</div>

  );
};

export default Midheader;
