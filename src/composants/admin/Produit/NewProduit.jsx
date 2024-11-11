import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewProduit = () => {
    const [formData, setFormData] = useState({
        nom: '',
        idType: '',
        description: '',
    });
    const [images, setImages] = useState([]);
    const [Type, setType] = useState('');
    const token = sessionStorage.getItem('token');

    const AllType = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Type/selectAll_Type', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setType(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const insertion = async (e) => {
        if (e) {
            e.preventDefault();
        }
        const data = new FormData();
        data.append('credentials', JSON.stringify({
            nom: formData.nom,
            description: formData.description,
            id_type: formData.idType,
        }));
        images.forEach((image) => {
            data.append('image', image);
        });

        try {
            const response = await axios.post('http://localhost:8080/Vanille/insertion_Vanille', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            toast.success("Produit ajouté avec succès !");
            
            setFormData({ nom: '', idType: '', description: '' });
            setImages([]);
        } catch (error) {
            console.error(error);
            toast.error("Erreur d'insertion !");
        }
    }

    useEffect(() => {
        AllType();
    }, []);

    return (
        <>
            <Toaster />
            <h3 className='mt-3 mb-3'>Nouveau produit</h3>
            <div className='w-100'>
                <form onSubmit={insertion}>
                    <div className='d-flex'>
                        <div className='col-lg-6'>
                            <input
                                type="text"
                                placeholder='entrer le nom du produit'
                                className='form-control'
                                value={formData.nom}
                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                            />
                        </div>
                        <div className='col-lg-6'>
                            <input
                                type="file"
                                placeholder="choisir l'image"
                                className='form-control'
                                multiple
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='col-lg-12'>
                            <select
                                value={formData.idType}
                                onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                                className='form-control'
                            >
                                <option>Choisir le type</option>
                                {Array.isArray(Type) && Type.length > 0 ? (
                                    Type.map((type) => (
                                        <option key={type.id_type} value={type.id_type}>{type.nom}</option>
                                    ))
                                ) : (
                                    <option className='text-center'>Aucun type disponible</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className='col-12 mt-3'>
                        <textarea
                            type="text"
                            placeholder="description du produit"
                            className='form-control'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>
                    <div className='col-12 text-right'>
                        <button type='submit' className='btn btn-success mt-2'>inserer</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewProduit;
