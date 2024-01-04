import React from "react";

const Footer = () => {

  return (
    
    <div>
      <div
        className="text-center text-white">
        <div className="container p-4 pb-3">
          <section className="mb-3">
            <a className="btn m-1 " Lo="#!" role="button">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>

            <a className="btn  m-1 " href="#!" role="button">
              <i className="fab fa-twitter fa-2x"></i>
            </a>

            <a className="btn   m-1 " href="#!" role="button">
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>

            <a className="btn   m-1 " href="#!" role="button">
            <i class="fa-brands fa-whatsapp fa-2xl"></i>
                        </a>
          </section>
        </div>

        <div
          className="text-center p-4 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright :{" "}
          <a className="text-white" href="https://mohammedshadid.site/">
            Mohammedshadid.site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white">
//       <div className="container py-4">
//         <div className="row">
//           <div className="col-md-6">
//             <h5>About Us</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//               mauris justo, sodales eu scelerisque ut, feugiat sit amet libero.
//             </p>
//           </div>
//           <div className="col-md-3">
//             <h5>Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="text-white" href="#!">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white" href="#!">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white" href="#!">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white" href="#!">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="text-white" href="#!">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white" href="#!">
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a className="text-white" href="#!">
//                   Instagram
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="bg-primary text-center py-2">
//         <p>&copy; {new Date().getFullYear()} Your Company Name</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
