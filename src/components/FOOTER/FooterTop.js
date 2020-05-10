import React from 'react';
import './footertop.css';
import image from '../../images/ess/logo2.png'
import { Link } from 'react-router-dom';

const FooterTop = () => {
  return (
    <section className="footer-top-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-area">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-xl-6 d-flex footer-top-menu-aria">
            <div>
              <ul>
                <li><Link to="/">About Online food</Link></li>
                <li><Link to="/">Read Our Blog</Link></li>
                <li><Link to="/">Sign up to deliver</Link></li>
                <li><Link to="/">Add your restaurant</Link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><Link to="/">Get help</Link></li>
                <li><Link to="/">Red FAQs</Link></li>
                <li><Link to="/">View all cities</Link></li>
                <li><Link to="/">Restaurant near me</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-6">
            <div className="copyright">
              <p className="pt-3">Copyright &copy; online food </p>
            </div>
          </div>
          <div className="col-6">
            <div className="footer-menu">
              <ul className="d-flex">
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of use</Link>
                <Link to="/">Pricing</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default FooterTop;