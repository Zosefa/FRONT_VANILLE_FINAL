import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Statistic = () => {
    const [vanille,setVanille] = useState(0);
    const [divers,setDivers] = useState(0);
    const token = sessionStorage.getItem('token');

    const TotalVanille = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Vanille/total`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setVanille(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const TotalDivers = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Divers/total`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setDivers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        TotalDivers();
        TotalVanille();
    },[])
  return (
    <>
    <div className="col-xl-6 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Total Produit</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{vanille.total}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-6 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Total produit divers</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{divers.total}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

        
    </>
  )
}

export default Statistic