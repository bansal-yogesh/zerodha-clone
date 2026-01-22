import React from 'react';
function Team() {
    return ( 
        <>
        
        <div class="container">
            <div class="row mb-5">
                <h2 class="text-center fs-4 text-muted">People</h2>
            </div>
<div class="row mb-5">
    <div class="col-2"></div>
    <div class="col-4">
        <div class="text-center" >
            <img class="border border-dark mb-4" src='/media/images/yogesh.jpeg' alt='Founder'style={{height : "20rem" ,width : "20rem",borderRadius : "50%"}}/>
            <h5>Yogesh Bansal</h5>
        <p class="mt-3 text-muted">Founder, CEO</p>
        </div>
        

    </div>
    <div class="col-4">
        <br/>
        <p class="mt-4">Yogesh Bansal founded Bansal Trades to deliver reliable and transparent metal trading solutions backed by hands-on industry experience. Today, Bansal Trades focuses on building long-term trust through quality and precision.
</p>
<br/>
<p>
Beyond business, Yogesh believes in continuous learning and discipline—values that shape both his professional journey and personal life.</p>
    </div>
    <div class="col-2"></div>
</div>
        </div>
        </>
     );
}

export default Team;