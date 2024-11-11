import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Conseil.css'; 
import axios from 'axios';


const Conseil = () => {
  const [solde,setSolde] = useState('');

	const ListeDispo = async () => {
		try {
			const response = await axios.get('http://localhost:8080/Solde/select_Solde');
			setSolde(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(()=> {
		ListeDispo();
	},[])
  return (
    <>
      <div
        className="testimonial-section"
        style={{ marginTop: '0px', paddingTop: '30px', paddingBottom: '10px' }}
        id='conseil'
      >
        <Container>
          <Row>
            <Col lg={7} className="mx-auto text-center">
              <h4 className="section-title">IMAGE REPRESENTANT LA PRESERVATION DE VANILLE</h4>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="testimonial-slider-wrap text-center">
                <Carousel
                  prevIcon={<span className="custom-carousel-icon carousel-control-prev-icon" />}
                  nextIcon={<span className="custom-carousel-icon carousel-control-next-icon" />}
                >
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col lg={8} className="mx-auto">
                        <div className="testimonial-block text-center">
                          <div className="author-info">
                            <div style={{ width: '100%', height: '50vh' }}>
                              <img
                                src="http://localhost:8080/Uploads/1726219800_comment-conserver-gousse-de-vanille-efficacement.jpg"
                                alt="Conseil 1"
                                className="img-fluid image"
                                style={{ width: '100%', height: '100%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col lg={8} className="mx-auto">
                        <div className="testimonial-block text-center">
                          <div className="author-info">
                            <div style={{ width: '100%', height: '50vh' }}>
                              <img
                                src="http://localhost:8080/Uploads/images (1).jpg"
                                alt="Conseil 2"
                                className="img-fluid"
                                style={{ width: '100%', height: '100%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>

                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col lg={8} className="mx-auto">
                        <div className="testimonial-block text-center">
                          <div className="author-info">
                            <div style={{ width: '100%', height: '50vh' }}>
                              <img
                                src="http://localhost:8080/Uploads/IMG_3061.jpg"
                                alt="Conseil 3"
                                className="img-fluid"
                                style={{ width: '100%', height: '100%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="why-choose-section" style={{"marginTop": "0px", "paddingTop": "3%", "paddingBottom": "10px"}} id='divers'>
			<div style={{"width": "90%"}} class="m-auto">
				<div class="row justify-content-between">
					<div class="col-lg-12">
						<h2 class="section-title">Produit en promotion</h2>
						<p>Profiter des promotions sur quelques une de nos produits en ce moment.</p>

						<div class="row my-5">
							
							{Array.isArray(solde) && solde.length > 0 ? (
									solde.map((solde) => (
										<div class="col-lg-3 col-md-6">
											<div class="feature">
												<div class="w-50 m-auto" style={{"height":"15vh"}}>
													<img src={`http://localhost:8080${ solde.id_disponible.idvanille.image }`} alt="" style={{"width": "100%","height": "100%"}}/>
												</div>
												<h3 class="mt-3 text-center">Remise de { solde.remise } % sur { solde.id_disponible.idvanille.nom }</h3>
                        <div className='w-100 text-center'>
                          <a className='btn mt-3 btn-sm' style={{"background":""}} href='#contact'>Commander</a>
                        </div>
                        
												{/* <p class="text-center">Remise de { solde.remise } % sur </p> */}
											</div>
										</div>
									))
								):(
									<div className='text-center'>
										<h4 className='mt-4 mb-4'>Aucune produit en promotion pour le moment</h4>
									</div>
								)}
						</div>
					</div>

				</div>
			</div>
		</div>
    </>
  );
};

export default Conseil;
