import React from 'react';
function Stats() {
    return ( <div class="container mt-5 mb-5 ">
            <div class="row ml-5">
                <div className='col-1'></div>
                <div class="col-11 col-lg-4 ">
                    <h2 className="text-muted fs-2">Trust with confidence</h2>
                    <br />
                    <br />
                    <span>
                        <h3 className="text-muted fs-4">
                            Customer-first always
                        </h3>
                        <p className="text-secondary fw-semibold">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </span>
                    <br />
                    <span>
                        <h3 className="text-muted  fs-4" >No spam or gimmicks</h3>
                        <p className="text-secondary fw-semibold">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </span>
                    <br />
                    <span>
                        <h3 className="text-muted fs-4">The Zerodha universe</h3>
                        <p className="text-secondary fw-semibold">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </span>
                    <br />
                    <span>
                        <h3 className="text-muted fs-4">Do better with money</h3>
                        <p className="text-secondary fw-semibold">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </span>
                    <br />
                </div>

                <div class="col-11 col-lg-6">
                    <img src='media/images/ecosystemAward.png' className='img-fluid w-100 h-auto' alt='Images' />
                </div>

            </div>
            <div  className='text-center mb-5'>
                <img src='media/images/pressLogos.png' className=' img-fluid'/>
            </div>

        </div> );
}

export default Stats;