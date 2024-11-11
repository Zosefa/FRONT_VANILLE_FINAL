import React from 'react';
import './Tete.css'

const Tete = () => {
  return (
    <>
        <div className="hero" style={{"background": "linear-gradient(to right, #2C0E03, #EADCB5)","minHeight":"70vh"}}>
            <div style={{"width": "90%"}} className="m-auto">
                <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-6">
                    <div className="intro-excerpt">
                    <h1 className="text-white mb-4">Entreprise productrice de Vanille <br/> <span className="d-block">à MADAGASCAR</span></h1>
                    <p className="mb-4 text-white-50">Découvrez la qualité exceptionnelle de notre vanille cultivée avec soin dans les terres fertiles de Madagascar.</p>
                    <p><a href="#a-propos" className="btn btn-light">En savoir plus</a></p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center">
                    <img src="assets/front/images/vanille2.jpg" style={{"maxWidth": "50%", "height": "auto"}} alt='Vanille de Madagascar' />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tete