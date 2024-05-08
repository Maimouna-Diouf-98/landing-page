import '../style/Navbar.css';
import {
  Link,
} from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg shadow p-3 mb-4 bg-body-tertiary rounded ">
        <div class="container-fluid">
           <Link to="/" className='text-decoration-none'>
            <a class="navbar-brand" href="#">Orlane Selena</a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars" aria-hidden="false"></i>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav text-uppercase ms-auto">
              <li class="nav-item ">
               <Link to="/" className='text-decoration-none'>
                <a class="nav-link active " aria-current="page" href="#">Home</a>
                </Link>
              </li>

              <li class="nav-item ">
              <Link to="/apropos" className='text-decoration-none'>
                <a class="nav-link" href="#">Apropos</a>
                </Link>
              </li>
              <Link to="/contact" className='text-decoration-none'>
              <li class="nav-item">
                <a class="nav-link" href="#contact">contact</a>
              </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  