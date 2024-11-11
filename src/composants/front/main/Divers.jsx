import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Divers = () => {
	const [divers,setDivers] = useState('');

	const selectDivers = async () => {
		try {
			const response = await axios.get('http://localhost:8080/Divers/selectAll_Divers');
			setDivers(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		selectDivers();
	},[])
  return (
    <>
		<div className='w-50' style={{"borderBottom":"1px solid #2C0E03","margin":"10px auto 10px auto"}}>

		</div>
        <div class="why-choose-section" style={{"marginTop": "0px", "paddingTop": "3%", "paddingBottom": "10px"}} id='divers'>
			<div style={{"width": "90%"}} class="m-auto">
				<div class="row justify-content-between">
					<div class="col-lg-12">
						<h2 class="section-title">Divers produits</h2>
						<p>Vous pouvez aussi faire des achats d'autre produit chez nous.</p>

						<div class="row my-5">
							
							{Array.isArray(divers) && divers.length > 0 ? (
									divers.map((divers) => (
										<div class="col-lg-3 col-md-6">
											<div class="feature">
												<div class="w-50 m-auto" style={{"height":"15vh"}}>
													<img src={`http://localhost:8080${ divers.image }`} alt="" style={{"width": "100%","height": "100%"}}/>
												</div>
												<h3 class="mt-2 text-center">{ divers.nom }</h3>
												<p class="text-center">{ divers.description }</p>
											</div>
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
			</div>
		</div>
    </>
  )
}

export default Divers