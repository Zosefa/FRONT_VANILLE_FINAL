import React, { useState } from 'react'
import AllProduitPrincipale from './AllProduitPrincipale';
import NewProduitPrincipale from './NewProduitPrincipale';

const TypeProduitPrincipale = () => {
    const [page,setPage] = useState(0);
  return (
    <>
        <div className='col-xl-12 col-md-12 mb-4'>
            <button className='btn btn-warning' style={{"width":"10%"}} onClick={() => {setPage(0)}}>Liste</button>
            <button className='btn btn-primary' style={{"width":"10%","marginLeft":"1%"}} onClick={() => {setPage(1)}}>Nouveau</button>
        </div>

        <div className='col-xl-12 col-md-12 mb-4'>
            { page===0 && <AllProduitPrincipale /> }
            { page===1 && <NewProduitPrincipale /> }
        </div>
    </>
  )
}

export default TypeProduitPrincipale