import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Vanilla.css';
import toast, { Toaster } from 'react-hot-toast';

const Vanilla = () => {
    const [vanilla, setVanilla] = useState([]); 
    const [loading, setLoading] = useState(true);
    const token = sessionStorage.getItem('token');

    const selectEntreprise = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Vanilla/selectAll_Vanilla`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setVanilla(response.data.data); 
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        selectEntreprise();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVanilla((prev) => [{ ...prev[0], [name]: value }]); // Mettre à jour l'état avec le nouveau champ
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const dataToUpdate = {
            id: vanilla[0].id_vanilla, // Assurez-vous d'avoir l'ID dans l'objet vanilla
            nom: vanilla[0].nom,
            email: vanilla[0].email,
            tel: vanilla[0].tel,
            dirigeant: vanilla[0].dirigeant,
            dascription: vanilla[0].dascription,
        };

        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Vanilla/update_Vanilla`, dataToUpdate, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success("Information modifier avec succès !");
            await selectEntreprise();
        } catch (error) {
            console.error('Erreur lors de la mise à jour :', error);
            toast.error("Erreur lors de la modification !");
        }
    };

    return (
        <>
            {loading && ( 
                <div className="loader-overlay">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Chargement...</span>
                    </div>
                </div>
            )}
            <div className="col-xl-12 col-md-12 mb-4">
                <Toaster />
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center flex-column">
                            {vanilla.length > 0 ? (
                                <>
                                    <h3 className='text-center'>Entreprise {vanilla[0].nom}</h3>
                                    <form className='w-100' onSubmit={handleSubmit}>
                                        <div className="d-flex">
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    name="nom"
                                                    className="form-control"
                                                    placeholder="Nom de l'entreprise"
                                                    value={vanilla[0].nom}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email de l'entreprise"
                                                    value={vanilla[0].email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    name="tel"
                                                    className="form-control"
                                                    placeholder="Téléphone de l'entreprise"
                                                    value={vanilla[0].tel}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    name="dirigeant"
                                                    className="form-control"
                                                    placeholder="Dirigeant de l'entreprise"
                                                    value={vanilla[0].dirigeant}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <div className="col-12">
                                                <textarea
                                                    name="dascription"
                                                    className="form-control"
                                                    placeholder="Description de l'entreprise"
                                                    value={vanilla[0].dascription}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3 text-right">
                                            <button type="submit" className='btn btn-success'>Modifier ces informations</button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <h3 className='text-center'>Aucune donnée disponible.</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vanilla;
