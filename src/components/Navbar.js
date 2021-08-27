import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch,Route,Link,Routes,Redirect,NavLink} from "react-router-dom";

const New = () => {
    

    return (
     <div>
    
       <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-danger">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><strong className='code'>Coding</strong>
<strong className='wol'>World</strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-auto mb-lg-2">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to='/services' className="nav-link">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

    
    );
  };
  
export default New;
