import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Produit = () => {
	const [disponible,setDisponible] = useState('');

	const ListeDispo = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Disponible/select_Disponible`);
			setDisponible(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(()=> {
		ListeDispo();
	},[])
  return (
    <>
        <div class="product-section" style={{"marginTop": "20px", "paddingTop": "0px", "paddingBottom": "10px"}} id='produits'>
			<div style={{"width": "90%"}} class="m-auto">
				<div class="row">
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h4 class="mb-4 section-title">Voici des échantillons de nos produits</h4>
						<p class="mb-4">Tous des Vanilles préparé avec grand soin a MADAGASCAR </p>
						<p><a href="assets/front/shop.html" class="btn" style={{"backgroundColor": "#2C0E03"}}>Commander</a></p>
					</div> 
					
					{Array.isArray(disponible) && disponible.length > 0 ? (
						disponible.map((disponible) => (
							<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"> 
								<a class="product-item" href="assets/front/cart.html">
									<img src={`${process.env.REACT_APP_BACKEND_URL}${disponible.idvanille.image}`} class="img-fluid product-thumbnail" style={{'minHeight':'25vh','maxHeight':'25vh'}} alt=''/>
									<h2 class="product-title">{disponible.idvanille.nom}</h2>
									<div className='w-100 d-flex flex-end+ flex-column'>
										{/* <h6 style={{'fontSize':'13px'}}>Disponible entre :</h6>
										<h6 style={{'fontSize':'13px'}}>
											{new Date(disponible.debut).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })} 
											&nbsp; et &nbsp;
											{new Date(disponible.fin).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
										</h6> */}
									</div>
									
									{disponible.affichage ? ( 
										<p><i class="fas fa-check-circle" style={{'fontSize': '1.5em', 'color': 'green'}}></i> Disponible</p> ) : (
										<p><i class="fas fa-ban" style={{'fontSize': '1.5em', 'color': 'red'}}></i> Non Disponible</p> )
									}
									
									
								</a>
							</div> 
						))
					):(
						<div className='text-center'>
							<h4 className='mt-4 mb-4'>Les vaniles sont encore en production en ce moment</h4>
						</div>
					)}
					
				</div>
			</div>
		</div>
    </>
  )
}

export default Produit