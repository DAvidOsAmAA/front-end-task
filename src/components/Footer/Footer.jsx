import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Style from './Footer.modules.css'
export default function Footer() {



  return (
    <div className="container-fluid p-0">
      <footer className="bg-body-tertiary text-center text-dark">
        <div className="container pb-0 ">
          <div className="row justify-content-center">
            <div className="col-md-4 mt-4">

            </div>
            <div className="col-md-4 mt-5">
              <p className="text-dark mt-3">Phone: +1234567890</p>
              <p className="text-dark mt-5">Address: UAE , Dubai</p>
              <div className='mt-3'>          
                <div className="py-3">
                <span className='text-light ms-3 fs-5'>social media : </span>
                <a className="fab fa-facebook text-decoration-none text-light mx-2" href="https://facebook.com/" target='_blank'></a>
                <a className="fab fa-instagram text-decoration-none text-light mx-2" href="https://instagram.com/" target='_blank'></a>
                <a className="fab fa-tiktok text-decoration-none text-light mx-2" href="https://tiktok.com/" target='_blank'></a>
                <a className="fab fa-twitter text-decoration-none text-light mx-2" href="https://twitter.com/" target='_blank'></a>
                <a className="fab fa-youtube text-decoration-none text-light mx-2" href="https://youtube.com/" target='_blank'></a>
              </div></div>
            </div>
            <div className="col-md-4 display-5 mt-5">
              <i className="fas fa-shopping-cart text-light me-2"></i>
    <Link className="nav-link text-dark"><span className='text-primary f-1 fw-bolder'>Task</span> App <span className='text-success'>✔</span></Link>
            </div>
          </div>

        </div>
        <div className="text-center p-3 bg-secondary">
          Created By : <span className="text-dark">Eng / David</span>
        </div>
      </footer>
    </div>
  );
}