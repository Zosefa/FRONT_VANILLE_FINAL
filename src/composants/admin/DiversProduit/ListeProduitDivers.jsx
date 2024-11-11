import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const ListeProduitDivers = () => {
    const [Produit, setProduit] = useState([]);
    const [selectedProduit, setSelectedProduit] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        description: '',
        idType: '',
        images: [],
    });
    const [Type, setType] = useState([]);
    const token = sessionStorage.getItem('token');

    const AllProduit = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Divers/selectAll_Divers`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProduit(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTypes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Type_divers/selectAll_Type_divers`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setType(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleShowModal = (produit) => {
        setSelectedProduit(produit);
        setFormData({
            nom: produit.nom,
            description: produit.description,
            idType: produit.id_type_divers.id_type_divers,
            images: []
        });
        setShowModal(true);
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: [...e.target.files] });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('credentials', JSON.stringify({
            nom: formData.nom,
            description: formData.description,
            id_type_divers: formData.idType,
        }));
        formData.images.forEach((image) => {
            data.append('image', image);
        });

        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/Divers/update_Divers/${selectedProduit.id_divers}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            toast.success("Produit modifié avec succès !");
            setShowModal(false);
            AllProduit();
        } catch (error) {
            console.error(error);
            toast.error("Erreur de mise à jour !");
        }
    };

    useEffect(() => {
        AllProduit();
        fetchTypes();
    }, []);

    return (
        <>
            <Toaster />
            <div className='w-100'>
                <h3 className='mt-3 mb-3'>Liste des produits divers</h3>
                <table className='w-100 table table-bordered'>
                    <thead className='w-100 bg-white'>
                        <tr>
                            <th>Produit</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='w-100 bg-white'>
                        {Array.isArray(Produit) && Produit.length > 0 ? (
                            Produit.map((produit) => (
                                <tr key={produit.id_divers}>
                                    <td>{produit.nom}</td>
                                    <td>{produit.description}</td>
                                    <td>{produit.id_type_divers.nom}</td>
                                    <td className='text-center'><img src={`${process.env.REACT_APP_BACKEND_URL}${produit.image}`} alt='' style={{ "width": "100px" }} /></td>
                                    <td className='text-center'>
                                        <Button variant='primary' onClick={() => handleShowModal(produit)}>Modifier</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className='text-center' colSpan="5">Aucun produit disponible</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Modal for Editing */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier Produit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleUpdate}>
                            <Form.Group controlId="formNom">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.nom}
                                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formDescription" className="mt-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formType" className="mt-3">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={formData.idType}
                                    onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                                >
                                    <option>Choisir le type</option>
                                    {Array.isArray(Type) && Type.length > 0 ? (
                                        Type.map((type) => (
                                            <option key={type.id_type_divers} value={type.id_type_divers}>
                                                {type.nom}
                                            </option>
                                        ))
                                    ) : (
                                        <option className='text-center'>Aucun type disponible</option>
                                    )}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formImage" className="mt-3">
                                <Form.Label>Images</Form.Label>
                                <Form.Control
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </Form.Group>

                            <Button variant="success" type="submit" className="mt-3">
                                Enregistrer les modifications
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default ListeProduitDivers;
