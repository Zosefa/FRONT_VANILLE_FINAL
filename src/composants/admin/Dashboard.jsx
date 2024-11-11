// Dashboard.js
import React, { useEffect, useState } from 'react';
import Statistic from './Statistic/Statistic';
import TypeProduit from './TypeProduit/TypeProduit';
import { useNavigate } from 'react-router-dom';
import Produit from './Produit/Produit';
import Vanilla from './Entreprise/Vanilla';
import DiversProduit from './DiversProduit/DiversProduit';
import Disponible from './Disponible/Disponible';
import Solde from './Solde/Solde';
import Responsable from './Responsable/Responsable';

const Dashboard = () => {
    const [page,setPage] = useState(0);
    const navigate = useNavigate();
    const deconnexion = () => {
        sessionStorage.removeItem('token');
        navigate('/Login');
    }
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = '/admin/vendor/fontawesome-free/css/all.min.css'; 
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = '/admin/css/sb-admin-2.min.css'; 
    document.head.appendChild(link2);
    
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);
  return (
    <>    
    <div id="wrapper">

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Bienvenue</div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active" onClick={()=>{
                setPage(0);
            }}>
                <a className="nav-link" href="#dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(1);
            }}>
                <a className="nav-link" href="#entreprise">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Entreprise</span></a>
            </li>

            <hr className="sidebar-divider"/>


            <li className="nav-item" onClick={() => {
                setPage(2);
            }}>
                <a className="nav-link" href="#Type Produit">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Type de produit</span>
                </a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(3);
            }}>
                <a className="nav-link" href="#Produit Principale">
                    <span>Produit Principal</span>
                </a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(4)
            }}>
                <a className="nav-link" href="#Produit Divers">
                    <span>Produit Divers</span>
                </a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(5)
            }}>
                <a className="nav-link" href="#Disponible">
                    <span>Disponible</span>
                </a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(6)
            }}>
                <a className="nav-link" href="#Promotion">
                    <span>Promotion</span>
                </a>
            </li>

            <li className="nav-item" onClick={() => {
                setPage(7)
            }}>
                <a className="nav-link" href="#Responsable">
                    <span>Responsable</span>
                </a>
            </li>

            <hr className="sidebar-divider"/>

            <li className="nav-item" onClick={deconnexion}>
                <a className="nav-link" href="/Login">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Déconnexion</span></a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


        </ul>
        <div id="content-wrapper" className="d-flex flex-column pt-5">
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        {page === 0 && <Statistic />}
                        {page === 1 && <Vanilla />}
                        {page === 2 && <TypeProduit />}
                        {page === 3 && <Produit />}
                        {page === 4 && <DiversProduit />}
                        {page === 5 && <Disponible />}
                        {page === 6 && <Solde />}
                        {page === 7 && <Responsable />}
                    </div>
            </div>
        </div>

    </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

</div>
    </>
  );
};

export default Dashboard;
