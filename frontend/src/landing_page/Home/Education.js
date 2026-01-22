import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6  d-flex justify-content-end'>
                    <img src='media/images/index-education.svg' />
                </div>
                <div className='col-1'></div>
                <div className='col-5 pt-4 mt-5 '>
                    <div className='ml-5'>
                    <h2 className='fs-4 text-muted'>Free and open market education</h2>
                    <br/>
                    <p className='fs-8'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''>Varsity<i class="fa-solid fa-arrow-right"></i> </a>
                    <br/>
                    <br/>
                    <p className='fs-8'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                     <a href=''>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
                     </div>
                </div>
            </div>
        </div>
     );
}

export default Education;