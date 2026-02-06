import React from "react";
import { Link } from "react-router-dom";

const Menu = ({userDetail}) => {
  return (
    <nav class="navbar navbar-expand-lg w-100 pr-5 ">
  <div class="container-fluid">
    <div>
    <a class="navbar-brand" href="#"><img src="media/images/zkite.png"style={{height:"30px"}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Dashboard</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" aria-current="page" to="/watchlist">WatchList</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/orders">Orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to ="/holdings">Holdings</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to ="/positons">Positons</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to ="/funds">Funds</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to ="/apps">Apps</Link>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to ="/users" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {userDetail?.name || "User"}
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="https://www.bansaltrades.com/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
  );
};

export default Menu;
