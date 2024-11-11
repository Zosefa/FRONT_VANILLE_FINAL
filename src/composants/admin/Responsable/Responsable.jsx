import React, { useState } from 'react'
import Profil from './Profil';
import NewResponsable from './NewResponsable';

const Responsable = () => {
  const [page,setPage] = useState(0);
  return (
    <>
        <div className="col-xl-12 col-md-12 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className='w-100 d-flex mb-5' style={{'columnGap':'1%'}}>
              <button className='btn btn-primary' onClick={() => {setPage(0)}}>Profil</button>
              <button className='btn btn-success' onClick={() => {setPage(1)}}>Nouveau responsable</button>
            </div>
            { page===0 && <Profil /> }
            { page===1 && <NewResponsable /> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Responsable