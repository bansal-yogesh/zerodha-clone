import React from 'react';
function RightSection({
  imageLink,
  productName,
  productDescription,
  link1,
  
}) {
    return ( 
        <>
    <div class="container">
        <div class="row mt-5 pt-5">
            <div class="col-0 col-lg-1"></div>
        
 <div class="col-12 col-lg-3 mt-5 pt-5">
    <div class="pt-4"></div>
            <h2 class="text-muted mt-5 pt-5 fs-4 pb-3">{productName}</h2>
            <p class="fs-6">{productDescription}</p>
            <div>
              <a href={link1}>Learn more</a>
             
            </div>
           
            </div>
            <div class="col-0 col-lg-2"></div>

                 <div class="col-12 col-lg-5 text-center">
            <img src={imageLink} class="img-fluid"alt="image" style={{height:"623px", width:"611px"}} />
          </div>
        <div class="col-0 col-lg-1"></div>
        </div>
    </div>
    </>
     );
}

export default RightSection;