import React, { useEffect, useState } from 'react';
import './ToggleSwitch.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Modal, Button } from 'react-bootstrap';

const Disponible = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [produit, setProduit] = useState('');
  const [idProduit, setIdProduit] = useState('');
  const [datedebut, setDateDebut] = useState('');
  const [datefin, setDateFin] = useState('');
  const [disponible, setDisponible] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedDisponible, setSelectedDisponible] = useState(null);
  const token = sessionStorage.getItem('token');

  const SelectProduit = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Vanille/select_Vanille`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProduit(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const SelectDisponible = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Disponible/selectAll_Disponible`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDisponible(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const insertion = async (e) => {
    if (e) e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Disponible/insertion_Disponible`, { idvanille: idProduit, debut: datedebut, fin: datefin, affichage: isToggled }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      await SelectProduit();
      await SelectDisponible();
      toast.success("Disponibilité de produit ajoutée !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur d'insertion !");
    }
  };

  const handleEdit = (disponible) => {
    setSelectedDisponible(disponible);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/Disponible/modifier_Disponible/${selectedDisponible.id_disponible}`, {
        debut: selectedDisponible.debut,
        fin: selectedDisponible.fin,
        affichage: selectedDisponible.affichage
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      await SelectDisponible();
      setShowModal(false);
      toast.success("Modification réussie !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la modification !");
    }
  };

  const toggleAffichable = (disponible) => {
    disponible.affichage = !disponible.affichage;
    handleEdit(disponible);
  };

  useEffect(() => {
    SelectProduit();
    SelectDisponible();
  }, []);

  return (
    <>
      <Toaster />
      <div className="col-xl-12 col-md-12 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center flex-column">
              <h3 className='text-center mb-5'>Disponibilité des produits</h3>
              <form className='w-100' onSubmit={insertion}>
                <div className="d-flex">
                  <div className="col-6">
                    <label htmlFor="">Choisir le produit</label>
                    <select className='form-control' value={idProduit} onChange={(e) => setIdProduit(e.target.value)}>
                      <option>choisir un produit</option>
                      {Array.isArray(produit) && produit.length > 0 ? (
                        produit.map((produit) => (
                          <option key={produit.id_vanille} value={produit.id_vanille}>{produit.nom}</option>
                        ))
                      ) : (
                        <option className='text-center'>Aucun type disponible</option>
                      )}
                    </select>
                  </div>
                  <div className="col-6">
                    <label>Date debut disponibilité</label>
                    <input type="date" className="form-control" placeholder="Date debut disponibilité" value={datedebut} onChange={(e) => setDateDebut(e.target.value)} />
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="col-6">
                    <label>Date fin disponibilité</label>
                    <input type="date" className="form-control" placeholder="Date fin disponibilité" value={datefin} onChange={(e) => setDateFin(e.target.value)} />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <label>Afficher dans le site</label>
                    <label className="toggle-switch mt-2">
                      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                      <span className="slider" />
                    </label>
                  </div>
                </div>
                <div className="col-12 mt-3 text-right">
                  <button className='btn btn-success' type='submit'>Enregistrer</button>
                </div>
              </form>
            </div>
            <div className='w-100 mt-3'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Date disponibilité</th>
                    <th>Date fin disponibilité</th>
                    <th>Affichable</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='w-100 bg-white'>
                  {Array.isArray(disponible) && disponible.length > 0 ? (
                    disponible.map((disponible) => (
                      <tr key={disponible.id_disponible}>
                        <td>{disponible.idvanille.nom}</td>
                        <td>{disponible.debut}</td>
                        <td>{disponible.fin}</td>
                        <td>
                          <label className="toggle-switch mt-2">
                            <input type="checkbox" checked={disponible.affichage} onChange={() => toggleAffichable(disponible)} />
                            <span className="slider" />
                          </label>
                        </td>
                        <td className='text-center'>
                          <button className='btn btn-primary' onClick={() => handleEdit(disponible)}>Modifier</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className='text-center' colSpan="5">Aucun type de produit disponible</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de modification */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier la disponibilité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Date début disponibilité</label>
          <input type="date" className="form-control" value={selectedDisponible?.debut || ''} onChange={(e) => setSelectedDisponible({ ...selectedDisponible, debut: e.target.value })} />

          <label className="mt-2">Date fin disponibilité</label>
          <input type="date" className="form-control" value={selectedDisponible?.fin || ''} onChange={(e) => setSelectedDisponible({ ...selectedDisponible, fin: e.target.value })} />

          <label className="mt-2">Afficher dans le site</label>
          <label className="toggle-switch mt-2">
            <input type="checkbox" checked={selectedDisponible?.affichage || false} onChange={(e) => setSelectedDisponible({ ...selectedDisponible, affichage: e.target.checked })} />
            <span className="slider" />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annuler</Button>
          <Button variant="primary" onClick={handleUpdate}>Enregistrer les modifications</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Disponible;
