import React from 'react';

const Contact = () => {

  return (
    <>
      <div className="row" id='contact'>
        <div className="col-lg-8 m-auto">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="intro-excerpt">
                <h1>Contact</h1>
                <p className="mb-4">
                  Pour passer vos commande veuillez suivre l'une de ces liens et nous contacter
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <div className="col-12">
                    <div className="col-lg-6">
                          <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                            <div className="service-icon color-1 mb-4" style={{"backgroundColor":"#2C0E03"}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                              </svg>
                            </div>
                            <div className="service-contents">
                              <a href="https://mail.google.com/mail/u/0/#search/e.rafenosoanirina@gmail.com" target="_blank">e.rafenosoanirina@gmail.com</a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                            <div className="service-icon color-1 mb-4" style={{"backgroundColor":"#2C0E03"}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                              </svg>
                            </div>
                            <div className="service-contents">
                              <a href="https://wa.me/41793206297" target="_blank" rel="noopener noreferrer">+41 79 320 62 97</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                  <a href="https://www.google.fr/maps/place/Mananara+Avaratra/@-16.1696688,49.7466514,14z/data=!3m1!4b1!4m6!3m5!1s0x2218beaf49ad779d:0xfb341c8a398a7991!8m2!3d-16.1705547!4d49.765208!16s%2Fm%2F03wbp4q?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" >
                      <img className="img-fluid" src="/Image/Localisation.png" alt="Blueline" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
