import React, { useEffect } from 'react';
import './responsive.css'; 
import TranslateComponent from '../../TranslateComponent';

const NavBar = () => {

  useEffect(() => {
    const offcanvasElement = document.getElementById('mobileMenu');
    if (offcanvasElement) {
      offcanvasElement.addEventListener('shown.bs.offcanvas', () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'fr', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            document.getElementById('google_translate_offcanvas')
          );
        }
      });
    }

    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener('shown.bs.offcanvas', () => {});
      }
    };
  }, []);

  return (
    <>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark sticky-top"
        aria-label="Furni navigation bar"
        style={{ "background": "linear-gradient(to right, #2C0E03, #EADCB5)" }}
      >
        <div style={{ width: '90%' }} className="m-auto d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className='w-100 d-flex justify-content-between align-items-center'>
            <div className="navbar-brand d-flex align-items-center w-25 gap-2">
              <img src="assets/front/images/logo.png" style={{ width: '40px' }} alt="Logo" />
              <a style={{ fontSize: '1rem', textDecoration: 'none' }} href="#accueil" className="text-white">
                Vanille 7 MADA
              </a>
            </div>
            <button
              className="navbar-toggler mt-2 mt-md-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse mt-2 mt-md-0" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#a-propos">Apropos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#produits">Produits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#divers">Divers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#conseil">Conseil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <TranslateComponent />
              </li>
              <li>
                <a className="nav-link" href="/Login">
                  <img src="assets/front/images/user.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start custom-offcanvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#accueil" >Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a-propos" >Apropos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#produits" >Produits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#divers" >Divers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conseil" >Conseil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" >Contact</a>
            </li>
            <li>
              <div id="google_translate_offcanvas">
                <TranslateComponent />
              </div>
            </li>
            <li>
              <a className="nav-link" href="/Login">
                <img src="assets/front/images/user.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
