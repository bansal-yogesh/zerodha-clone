import React from "react";
function LeftSection({
  imageLink,
  productName,
  productDescription,
  link1,
  link2,
  link3,
  link4,
}) {
  return (
    <>
      <div class="container ">
       
        <div class="row mt-5 pt-5">
            <div class="col-1"></div>
          <div class="col-5 ">
            <img src={imageLink} />
          </div>
          <div class="col-2"></div>
          <div class="col-3 mt-2">
            <h2 class="text-muted mt-5 fs-4 pb-3">{productName}</h2>
            <p class="fs-6">{productDescription}</p>
            <div>
              <a href={link1}>Try Demo</a>
              <a href={link1} style={{marginLeft : "50px"}}  >Learn More</a>
            </div>
            <div class="mt-4">
              <a href={link1}>
                <img src="media/images/googlePlayBadge.svg" />
              </a>
              <a href={link1} style={{marginLeft : "50px"}} >
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
