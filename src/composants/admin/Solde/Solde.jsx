import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Modal, Button } from 'react-bootstrap';

const Solde = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [produitDispo, setProduitDispo] = useState('');
    const [idDispo, setIdDispo] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [remise, setRemise] = useState('');
    const [promotion, setPromotion] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPromotion, setSelectedPromotion] = useState(null);
    const token = sessionStorage.getItem('token');

    const selectProduitDispo = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Disponible/selectAll_Disponible', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProduitDispo(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const insertionPromotion = async (e) => {
        if (e) e.preventDefault();
        try {
            await axios.post('http://localhost:8080/Solde/insertion_Solde', {
                id_disponible: idDispo,
                remise: remise,
                debut: dateDebut,
                fin: dateFin,
                affichage: isToggled
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Promotion ajoutée !');
            setDateDebut('');
            setIsToggled(false);
            setDateFin('');
            setRemise('');
            AllPromotion(); // Rafraîchir les promotions
        } catch (error) {
            console.error(error);
            toast.error("Une erreur s'est produite");
        }
    }

    const AllPromotion = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Solde/selectAll_Solde', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPromotion(response.data.data);
        } catch (error) {
            console.error(error)
        }
    }

    const handleEdit = (promotion) => {
        setSelectedPromotion(promotion);
        setShowModal(true);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/Solde/modifier_Solde/${selectedPromotion.id_solde}`, {
                debut: selectedPromotion.debut,
                fin: selectedPromotion.fin,
                remise: selectedPromotion.remise,
                affichage: selectedPromotion.affichage
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success("Modification réussie !");
            AllPromotion(); 
            setShowModal(false);
        } catch (error) {
            console.error(error);
            toast.error("Erreur lors de la modification !");
        }
    };

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        selectProduitDispo();
        AllPromotion();
    }, [])

    return (
        <>
            <Toaster />
            <div className="col-xl-12 col-md-12 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center flex-column">
                            <h3 className='text-center'>Solde des produits</h3>
                            <form className='w-100' onSubmit={insertionPromotion}>
                                <div className="d-flex">
                                    <div className="col-6">
                                        <label>Choisir un produit</label>
                                        <select className='form-control' value={idDispo} onChange={(e) => setIdDispo(e.target.value)}>
                                            <option>choisir un produit</option>
                                            {Array.isArray(produitDispo) && produitDispo.length > 0 ? (
                                                produitDispo.map((produit) => (
                                                    <option key={produit.id_disponible} value={produit.id_disponible}>{produit.idvanille.nom}</option>
                                                ))
                                            ) : (
                                                <option className='text-center'>Aucun type disponible</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label>Date debut de la remise</label>
                                        <input type="date" className="form-control" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-6">
                                        <label>Date fin de la remise</label>
                                        <input type="date" className="form-control" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
                                    </div>
                                    <div className="col-6">
                                        <label>Remise (%)</label>
                                        <input type="number" className="form-control" value={remise} onChange={(e) => setRemise(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="col-6">
                                        <label htmlFor="">Afficher dans le site</label>
                                        <label className="toggle-switch mt-2" style={{ 'marginLeft': '10px' }}>
                                            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                                            <span className="slider" />
                                        </label>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className='btn btn-success' type='submit'>Enregistrer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='w-100 mt-4'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Date debut de la remise</th>
                                        <th>Date fin de la remise</th>
                                        <th>Remise (%)</th>
                                        <th>Affichable</th>
                                        <th>Modifier</th>
                                    </tr>
                                </thead>
                                <tbody className='w-100 bg-white'>
                                    {Array.isArray(promotion) && promotion.length > 0 ? (
                                        promotion.map((promo) => (
                                            <tr key={promo.id_divers}>
                                                <td>{promo.id_disponible.idvanille.nom}</td>
                                                <td>{promo.debut}</td>
                                                <td>{promo.fin}</td>
                                                <td>{promo.remise}%</td>
                                                <td>
                                                    <label className="toggle-switch mt-2">
                                                        <input type="checkbox" checked={promo.affichage} onChange={() => {
                                                            promo.affichage = !promo.affichage;
                                                            handleEdit(promo);
                                                        }} />
                                                        <span className="slider" />
                                                    </label>
                                                </td>
                                                <td className='text-center'>
                                                    <button className='btn btn-primary' onClick={() => handleEdit(promo)}>Modifier</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center' colSpan="6">Aucun type de produit disponible</td>
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
                    <Modal.Title>Modifier la promotion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Date début de la remise</label>
                    <input type="date" className="form-control" value={selectedPromotion?.debut || ''} onChange={(e) => setSelectedPromotion({ ...selectedPromotion, debut: e.target.value })} />

                    <label className="mt-2">Date fin de la remise</label>
                    <input type="date" className="form-control" value={selectedPromotion?.fin || ''} onChange={(e) => setSelectedPromotion({ ...selectedPromotion, fin: e.target.value })} />

                    <label className="mt-2">Remise (%)</label>
                    <input type="number" className="form-control" value={selectedPromotion?.remise || ''} onChange={(e) => setSelectedPromotion({ ...selectedPromotion, remise: e.target.value })} />

                    <label className="mt-2">Afficher dans le site</label>
                    <label className="toggle-switch mt-2" style={{ 'marginLeft': '10px' }}>
                        <input type="checkbox" checked={selectedPromotion?.affichage || false} onChange={() => setSelectedPromotion({ ...selectedPromotion, affichage: !selectedPromotion.affichage })} />
                        <span className="slider" />
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Enregistrer les modifications
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Solde;
