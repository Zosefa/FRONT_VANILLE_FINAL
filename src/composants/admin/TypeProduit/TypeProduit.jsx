import React, { useState } from 'react'
import TypeProduitPrincipale from './TypeProduitPrincipale';
import TypeProduitDivers from './TypeProduitDivers';

const TypeProduit = () => {
    const [page,setPage] = useState(0);
  return (
    <>
        <div className='col-xl-6 col-md-6 mb-4'>
            <a href='#Liste' onClick={() => {setPage(0)}}>
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Type de produit produit principal</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <div className='col-xl-6 col-md-6 mb-4'>
            <a href='#Nouveau' onClick={() => {setPage(1)}}>
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Type de produit produit Divers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        { page === 0 && <TypeProduitPrincipale /> }
        { page === 1 && <TypeProduitDivers /> }
        
    </>
  )
}

export default TypeProduit