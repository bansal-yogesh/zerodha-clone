import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 pt-3 mb-5 pb-5">
      <div className="row mt-5">
        <div className="col-1">
        </div>
        <div className="col-4">
          <h1 className="fs-3 text-muted fw-semibold">Unbeatable pricing</h1>
          <br/>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        

        <div className="col-7 ">
          <div className="row mt-3">
            <div className="col d-flex align-items-center">
              <img
                src="media/images/pricing-eq.svg"
                className="mr-0  img-fluid w-50"
              />
              <p
                className="d-inline-block  mt-5 lh-1 position-relative left-0 "
                style={{ fontSize: "12px" }}
              >
                Free account
                <br /> opening
              </p>
            </div>
            <div className="col d-flex align-items-center">
              <img
                src="media/images/pricing-eq.svg"
                className="mr-0  img-fluid w-50"
              />
              <p
                className="d-inline-block  mt-5 lh-1 position-relative left-0 "
                style={{ fontSize: "12px" }}
              >
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>
            <div className="col d-flex align-items-center">
              <img
                src="media/images/other-trades.svg"
                className="mr-0  img-fluid w-50"
              />
              <p
                className="d-inline-block  mt-5 lh-1 position-relative left-0 "
                style={{ fontSize: "12px" }}
              >
                Intraday and<br/>
F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
