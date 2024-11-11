import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Profil = () => {
  const [profil, setProfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mdp,setMdp] = useState('');
  const [conf,setConf] = useState('');
  const [nom,setNom] = useState('');
  const [tel,setTel] = useState('');
  const token = sessionStorage.getItem('token');

  const selectUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/Utilisateur/select_Utilisateur',
        { token: token },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      setProfil(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors du chargement des données !");
    } finally {
      setLoading(false);
    }
  };

  const updateProfil = async (e) => {
    if (e) e.preventDefault();
    let password = ''; 
    if (mdp === '' && conf === '') {
      password = profil?.pswd || ''; 
    } else if (mdp !== conf) {
      toast.error("Veuillez bien confirmer votre mot de passe");
      setMdp('');
      setConf('');
      return;
    } else {
      password = mdp;
    }
    try {
      await axios.post('http://localhost:8080/Utilisateur/update_Utilisateur', {
        psw: password,
        nom: nom,
        tel: tel,
        token: token,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success("Profil bien mis à jour!");
      await selectUser();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    selectUser();
    if (profil) {
      setTel(profil?.id_personne?.tel || '');
      setNom(profil?.id_personne?.nom || '');
    }
  }, [profil]);

  return (
    <>
      <Toaster />
      {loading ? (
        <div className="loader-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Chargement...</span>
          </div>
        </div>
      ) : (
        <div className="row no-gutters align-items-center flex-column">
          <h3 className='text-center mb-3'>Votre profil</h3>
          <form className='w-100' onSubmit={updateProfil}>
            <div className="d-flex mt-3">
            <div className="col-6">
              <label>Telephone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Entrer son numero"
                value={tel} 
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div className="col-6 d-flex flex-column">
              <label>Entrer son nom</label>
              <input
                type="text"
                className="form-control"
                placeholder="Entrer le nom du responsable"
                value={nom} 
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            </div>
            <div className="d-flex mt-3">
              <div className="col-6 d-flex flex-column">
                <label>Entrer votre mot de passe</label>
                <input type="password" className="form-control" placeholder="Entrer votre mot de passe" onChange={(e) => setMdp(e.target.value)}/>
              </div>
              <div className="col-6 d-flex flex-column">
                <label>Confirmer le mot de passe</label>
                <input type="password" className="form-control" placeholder="confirmer votre mot de passe" onChange={(e) => setConf(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 mt-3 text-right">
              <button className='btn btn-success' type='submit'>Modifier</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Profil;
