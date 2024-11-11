import React from 'react';
import './Responsive.css';


const Apropos = () => {
  return (
    <>
        <div class="we-help-section" style={{"marginTop": "0px", "paddingTop": "10%","paddingBottom": "2%"}} id='a-propos'>
			<div style={{"width": "90%"}} class="m-auto">
				<div class="row justify-content-between">
					<div class="col-lg-7 mb-lg-0">
						<div class="imgs-grid">
							<div class="grid grid-1 img1"><img src="Image/IMG-20241021-WA0023.jpg" alt="Untree.co" style={{'width':'100%','height':'auto'}}/></div>
							<div class="grid grid-2 img2"><img src="Image/IMG-20241021-WA0022.jpg" alt="Untree.co"/></div>
							<div class="grid grid-3 img3"><img src="Image/IMG-20241021-WA0014.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div class="col-lg-5 ps-lg-5">
						<h2 class="section-title">VANILLE 7 MADA</h2>
						<p>Nous sommes une Entreprise producteur de vanille basé a MADAGASCAR</p>

						<ul class="list-unstyled custom-list my-4">
							<li>Planter des vanilles</li>
							<li>Secher des vanilles</li>
							<li>Secher des vanilles</li>
							<li>Secher des vanilles</li>
						</ul>
						<p><a herf="#" class="btn" style={{"backgroundColor": "#2C0E03"}}>Voir nos produits</a></p>
					</div>
				</div>
			</div>
		</div>

        <div class="testimonial-section" style={{"marginTop": "0px", "paddingTop": "30px", "paddingBottom": "5%"}}>
			<div style={{"width": "90%"}} class="m-auto">
				<div class="row">
					<div class="col-lg-7 mx-auto text-center">
						<h4 class="section-title mb-3">VOICI QUELQUE VIDEOS AU SEIN DE NOTRE ENTREPRISE</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 mt-3">
                        <video className='video-responsive' controls>
							<source src={`${process.env.REACT_APP_BACKEND_URL}/Uploads/VID-20241021-WA0001.mp4`} type="video/mp4"/>
                        </video>
					</div>
					<div class="col-lg-4 col-md-6 mt-3">
                        <video className='video-responsive' controls>
							<source src={`${process.env.REACT_APP_BACKEND_URL}/Uploads/VID-20241021-WA0002.mp4`} type="video/mp4"/>
                        </video>
					</div>
					<div class="col-lg-4 col-md-6 mt-3">
                        <video className='video-responsive' controls>
							<source src={`${process.env.REACT_APP_BACKEND_URL}/Uploads/VID-20241023-WA0001.mp4`} type="video/mp4"/>
                        </video>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Apropos

