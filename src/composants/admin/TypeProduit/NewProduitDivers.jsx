import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewProduitDivers = () => {
    const [nom,setNom] = useState('');
    const token = sessionStorage.getItem('token');
    const insertion = async (e) => {
        if(e){
            e.preventDefault();
        }
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Type_divers/insertion_Type_divers`,{nom:nom},{
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            });
            toast.success('Type de produit inserer!');
            setNom('');
        } catch (error) {
            console.error(error);
            toast.error("Erreur d'insertion!");
        }
        
    }
  return (
    <>
        <Toaster />
        <h3 className='mt-3 mb-3'>Nouveau type de produit divers</h3>
        <div className='w-100'>
            <form onSubmit={insertion}>
                <div className='col-6'>
                    <input type="text" placeholder='entrer le type' className='form-control' value={nom} onChange={(e) => setNom(e.target.value)}/>
                </div>
                <div className='col-3'>
                    <button type='submit' className='btn btn-success mt-2'>inserer</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default NewProduitDivers