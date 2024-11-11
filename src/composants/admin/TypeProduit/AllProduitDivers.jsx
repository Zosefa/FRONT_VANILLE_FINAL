import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; 
import toast, { Toaster } from 'react-hot-toast';

const AllProduitDivers = () => {
    const [TypeProduit, setTypeProduit] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const [selectedType, setSelectedType] = useState(null); 
    const token = sessionStorage.getItem('token');

    const AllType = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Type_divers/selectAll_Type_divers`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setTypeProduit(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        AllType();
    }, []); 

    const handleShowModal = (type) => {
        setSelectedType(type);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false); 
        setSelectedType(null); 
    };

    const handleUpdate = async () => {
        console.log('Type à mettre à jour:', selectedType);
        
        // S'assurer que id_type existe
        if (!selectedType || !selectedType.id_type_divers) {
            toast.error("ID du type est manquant !");
            return;
        }

        const updatedData = {
            id: selectedType.id_type_divers, 
            nom: selectedType.nom,
        };

        try {
            // Utilisez PUT au lieu de POST
            await axios.post(`http://localhost:8080/Type_divers/update_Type_divers`, updatedData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            await AllType();
            toast.success("Modification réussie !");
        } catch (error) {
            console.error(error);
            toast.error("Échec de la modification !");
        } finally {
            handleCloseModal(); 
        }
    };

    return (
        <>
        <Toaster />
            <div className='w-100'>
                <h3 className='mt-3 mb-3'>Liste des Types de produits Divers</h3>
                <table className='w-100 table table-bordered'>
                    <thead className='w-100 bg-white'>
                        <tr>
                            <th>Type du produit</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='w-100 bg-white'>
                        {Array.isArray(TypeProduit) && TypeProduit.length > 0 ? (
                            TypeProduit.map((type) => (
                                <tr key={type.id_type}>
                                    <td>{type.nom}</td>
                                    <td className='text-center'>
                                        <button 
                                            className='btn btn-primary' 
                                            onClick={() => handleShowModal(type)}
                                        >
                                            modifier
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className='text-center' colSpan="2">Aucun type de produit disponible</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Modal pour la modification */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier Type de Produit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedType && (
                            <div>
                                <label>Nom:</label>
                                <input 
                                    type="text" 
                                    value={selectedType.nom} 
                                    onChange={(e) => 
                                        setSelectedType({ ...selectedType, nom: e.target.value })} // Met à jour le nom dans l'état
                                    className='form-control'
                                />
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Mettre à jour
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default AllProduitDivers;
