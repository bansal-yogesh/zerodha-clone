import React from "react";

const Summary = ({userDetail}) => {

  return (
    <>
      <div class="ps-3 pe-3 ">
        <div className="username">
          <h6 class="fs-4 pt-5 fw-semibold">Hi,{userDetail.name}</h6>
          <hr className="divider" />
        </div>

        <div className="section pt-4 ">
          <span>
            <p>
              {" "}
              <i class="fa-regular fa-clock text-muted"></i>
              &nbsp;&nbsp;&nbsp;Equity
            </p>
          </span>

          <div className="data d-flex text-center pb-5 pt-3 ps-2">
            <div className="first w-25 ">
              <h3 class=" text-muted fw-semibold fs-2">3.74k</h3>
              <p class=" text-muted fw-semibold" style={{ fontSize: "0.7rem" }}>
                Margin available
              </p>
            </div>
            <div
              className=" border border-dark mt-2"
              style={{ height: "60px" }}
            ></div>

            <div
              className="second w-25 text-muted fw-semibold  "
              style={{ fontSize: "0.7rem" }}
            >
              <div>
                <p class="m-1">
                  Margins used <span>0</span>
                </p>
                <p class="m-1">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Opening
                  balance <span>3.74k</span>
                </p>
              </div>
            </div>
          </div>
          <hr className="divider " />
        </div>



        <div className="section pt-4">
          <span>
            <p>
              <i class="fa-regular fa-credit-card text-muted"></i>
              &nbsp;&nbsp;&nbsp;Holdings (13)
            </p>
          </span>

          <div className="data text-center d-flex pb-5 pt-3 ps-2">
            <div className="first w-25 ">
               <h3 class=" text-success fw-semibold fs-2">1.55k <small style={{fontSize:"0.7rem"}}>+5.20%</small></h3>
              <p class=" text-start text-muted fw-semibold" style={{ fontSize: "0.7rem" }}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;P&L
              </p>
            </div>
            <hr />

            <div
              className=" border border-dark mt-2"
              style={{ height: "60px" }}
            ></div>
            
            <div className="second w-25 text-muted fw-semibold " style={{ fontSize: "0.7rem" }}>
              <p class="m-1">
                 &nbsp; &nbsp;Current Value <span>31.43k</span>{" "}
              </p>
              <p class="m-1">
                Investment <span>29.88k</span>{" "}
              </p>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>
    </>
  );
};

export default Summary;
