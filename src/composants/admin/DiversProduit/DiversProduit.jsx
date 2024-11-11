import React, { useState } from 'react'
import ListeProduitDivers from './ListeProduitDivers';
import NewProduitDivers from './NewProduitDivers';

const DiversProduit = () => {
  const [page,setPage] = useState(0);
  return (
    <>
        <div className='col-xl-12 col-md-12 mb-2'>
            <button className='btn btn-warning' style={{"width":"10%"}} onClick={() => {setPage(0)}}>Liste</button>
            <button className='btn btn-primary' style={{"width":"10%","marginLeft":"1%"}} onClick={() => {setPage(1)}}>Nouveau</button>
        </div>

        <div className='col-xl-12 col-md-12 mb-2'>
            { page===0 && <ListeProduitDivers /> }
            { page===1 && <NewProduitDivers /> }
        </div>
    </>
  )
}

export default DiversProduit