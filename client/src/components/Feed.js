import React from "react";

const Feed = () => {
  return (
    <div className=" bg-light text-center border mt-5  scrollable">
      <div className="">
        <div className="">
          <div className="">
            <span className="">
              <img
                decoding="async"
                src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/noun_Quotation-Marks_479904.svg"
                alt=""
                title="noun_Quotation Marks_479904"
                className="wp-image-30551"
              />
            </span>
          </div>
          <div className="">
            <div className="">
              <h2>Kind words from our patients</h2>
            </div>
          </div>
          <div className=""></div>
        </div>


        {/* Second Column */}
        <div className="d-flex justify-content-evenly mb-5 ">
          <div class="card col col-3 p-2 slide-in-bottom bgcard mb-3">
            <div class="card-body">
              <p class="card-text">
                <p
                  className="text text-center bittom"
                  style={{ color: "#434141" }}
                >
                  - Ramzi Shadid
                </p>
                <p
                  className="text mt-1 text-center"
                  style={{ color: "#7f9ab0" }}
                >
                  I can’t recommend them highly enough. You will be well cared
                  for!
                </p>
              </p>
            </div>
          </div>
          <div class="card col col-3 p-2 slide-in-bottom bgcard mb-3">
            <div class="card-body">
              <p class="card-text">
                <p
                  className="text text-center bittom"
                  style={{ color: "#434141" }}
                >
                  - Shatha Morales
                </p>
                <p
                  className="text mt-1 text-center"
                  style={{ color: "#7f9ab0" }}
                >
                  Choosing this dental clinic was the best decision I made for my oral health.
                </p>
              </p>
            </div>
          </div>
          <div class="card col col-3 p-2 slide-in-bottom bgcard mb-3">
            <div class="card-body">
              <p class="card-text">
                <p
                  className="text text-center bittom"
                  style={{ color: "#434141" }}
                >
                  - Saleba Baseer
                </p>
                <p
                  className="text mt-1 text-center"
                  style={{ color: "#7f9ab0" }}
                >
                  I have complete confidence in recommending this dentist to anyone in need of quality dental care.
                </p>
              </p>
            </div>
          </div>
          <div class="card col col-3 p-2 slide-in-bottom bgcard mb-3">
            <div class="card-body">
              <p class="card-text">
                <p
                  className="text text-center bittom"
                  style={{ color: "#434141" }}
                >
                  - Mahdi Saqqa
                </p>
                <p
                  className="text mt-1 text-center"
                  style={{ color: "#7f9ab0" }}
                >
                  My experience with this dentist was exceptional.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
