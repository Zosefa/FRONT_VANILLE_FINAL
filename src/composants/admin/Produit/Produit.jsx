import React, { useState } from 'react'
import ListeProduit from './ListeProduit';
import NewProduit from './NewProduit';

const Produit = () => {
    const [page,setPage] = useState(0);
  return (
    <>
        <div className='col-xl-12 col-md-12 mb-2'>
            <button className='btn btn-warning' style={{"width":"10%"}} onClick={() => {setPage(0)}}>Liste</button>
            <button className='btn btn-primary' style={{"width":"10%","marginLeft":"1%"}} onClick={() => {setPage(1)}}>Nouveau</button>
        </div>

        <div className='col-xl-12 col-md-12 mb-2'>
            { page===0 && <ListeProduit /> }
            { page===1 && <NewProduit /> }
        </div>
    </>
  )
}

export default Produit