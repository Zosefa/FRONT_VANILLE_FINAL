import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewResponsable = () => {
  const [tel,setTel] = useState('');
  const [nom, setNom] = useState('');
  const token = sessionStorage.getItem('token');

  const selectLastPersonneAndInsertionUtilisateur = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Personne/select_Last_Personne`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      const personne = response.data.data;

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Utilisateur/insertion_Utilisateur`,{
        id_personne : personne[0].id_personne
      },{
        headers:{
          'Content-Type' : 'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  const insertionPersonne = async (e) => {
    if(e) e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Personne/insertion_Personne`,{nom:nom,tel:tel},{
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      });
      await selectLastPersonneAndInsertionUtilisateur();
      setNom('');setTel('');
      toast.success('Responsable inserer!');
    } catch (error) {
      console.error(error);
      toast.error("Erreur d'insertion");
    }
  }

  return (
    <>
    <Toaster />
        <div className="row no-gutters align-items-center flex-column">
              <h3 className='text-center mb-5'>Ajout de nouveau responsable</h3>
              <form className='w-100' onSubmit={insertionPersonne}>
                <div className="d-flex mt-3">
                  <div className="col-6">
                    <label>Telephone</label>
                    <input type="number" className="form-control" placeholder="Entrer son numero" value={tel} onChange={(e) => setTel(e.target.value)}/>
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <label>Entrer son nom</label>
                    <input type="text" className="form-control" placeholder="Entrer le nom du responsable" value={nom} onChange={(e) => setNom(e.target.value)}/>
                  </div>
                </div>
                <div className="col-12 mt-3 text-right">
                  <button className='btn btn-success' type='submit'>Enregistrer</button>
                </div>
              </form>
        </div>
    </>
  )
}

export default NewResponsable