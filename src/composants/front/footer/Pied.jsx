import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pied = () => {
    const [Entreprise, setEntreprise] = useState([]);

    const selectEntreprise = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Vanilla/selectAll_Vanilla`);
            setEntreprise(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        selectEntreprise();
    }, []);

    return (
        <>
            <div className="row g-5 mb-3">
                <div className="col-lg-4">
                    <div className="mb-3 footer-logo-wrap">
                        <a href="#" className="footer-logo" style={{ color: "#2C0E03" }}>
                            {Entreprise[0]?.nom}<span>.</span>
                        </a>
                    </div>
                    <p>{Entreprise[0]?.dascription}</p>
                </div>
            </div>

            <div className="border-top copyright">
                <div className="row pt-4">
                    <div className="col-lg-6">
                        <p className="text-center text-lg-start">
                            Copyright &copy; <script>document.write(new Date().getFullYear());</script>. 
                            <a href="mailto:razafindrakotomickael77@gmail.com">razafindrakotomickael77@gmail.com</a> /
                            <a href="mailto:zosephatoky@gmail.com">zosephatoky@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pied;
