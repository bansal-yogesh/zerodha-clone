import React from 'react';
import { Link } from 'react-router-dom';
function Brokrage() {
    return ( <>
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
        <div class="nav d-flex flex-row pl-3 border-bottom border-dark">
            <Link to="/pricing/equity" class=" fs-4 fs-lg-3 nav-link text-decoration-none">Equity</Link>
            <Link to="" class="  fs-4 fs-lg-3 nav-link text-decoration-none">Currency</Link>
            <Link to="" class="  fs-4 fs-lg-3 nav-link text-decoration-none">commodity</Link>
        </div>
        </div>
        <div class="col-1"></div>
       </div>
    </div>
    </> );
}

export default Brokrage;