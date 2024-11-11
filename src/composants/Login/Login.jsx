import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate('');
    const [tel,setTel] = useState('');
    const [psw,setPsw] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const connexion = async (e) => {
      if(e) e.preventDefault();
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Utilisateur/checking`, {
          tel: tel,
          pswd: psw
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.data.data) {
          sessionStorage.setItem('token', response.data.data);
          navigate('/Admin');
        } else {
          setErrorMessage(response.data.Erreur || 'Erreur de connexion');
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Erreur de connexion, veuillez réessayer.');
      }
    };


    
    useEffect(() => {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = '/login/vendor/bootstrap/css/bootstrap.min.css'; 
        document.head.appendChild(link1);
    
        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = '/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'; 
        document.head.appendChild(link2);

        const link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = '/login/vendor/animate/animate.css'; 
        document.head.appendChild(link3);

        const link4 = document.createElement('link');
        link4.rel = 'stylesheet';
        link4.href = '/login/vendor/css-hamburgers/hamburgers.min.css'; 
        document.head.appendChild(link4);

        const link5 = document.createElement('link');
        link5.rel = 'stylesheet';
        link5.href = '/login/vendor/animsition/css/animsition.min.css'; 
        document.head.appendChild(link5);

        const link6 = document.createElement('link');
        link6.rel = 'stylesheet';
        link6.href = '/login/vendor/select2/select2.min.css'; 
        document.head.appendChild(link6);

        const link7 = document.createElement('link');
        link7.rel = 'stylesheet';
        link7.href = '/login/vendor/daterangepicker/daterangepicker.css'; 
        document.head.appendChild(link7);

        const link8 = document.createElement('link');
        link8.rel = 'stylesheet';
        link8.href = '/login/css/util.css'; 
        document.head.appendChild(link8);

        const link9 = document.createElement('link');
        link9.rel = 'stylesheet';
        link9.href = '/login/css/main.css'; 
        document.head.appendChild(link9);


        // const script1 = document.createElement('script');
        // script1.src = '/login/vendor/jquery/jquery-3.2.1.min.js'; 
        // script1.async = true;
        // document.body.appendChild(script1);
    
        // const script2 = document.createElement('script');
        // script2.src = '/login/vendor/animsition/js/animsition.min.js';
        // script2.async = true;
        // document.body.appendChild(script2);

        // const script3 = document.createElement('script');
        // script3.src = '/login/vendor/bootstrap/js/popper.js';
        // script3.async = true;
        // document.body.appendChild(script3);

        // const script4 = document.createElement('script');
        // script4.src = '/login/vendor/bootstrap/js/bootstrap.min.js';
        // script4.async = true;
        // document.body.appendChild(script4);

        // const script5 = document.createElement('script');
        // script5.src = '/login/vendor/select2/select2.min.js';
        // script5.async = true;
        // document.body.appendChild(script5);

        // const script6 = document.createElement('script');
        // script6.src = '/login/vendor/daterangepicker/moment.min.js';
        // script6.async = true;
        // document.body.appendChild(script6);

        // const script7 = document.createElement('script');
        // script7.src = '/login/vendor/daterangepicker/daterangepicker.js';
        // script7.async = true;
        // document.body.appendChild(script7);

        // const script8 = document.createElement('script');
        // script8.src = '/login/vendor/countdowntime/countdowntime.js';
        // script8.async = true;
        // document.body.appendChild(script8);

        // const script9 = document.createElement('script');
        // script9.src = '/login/js/main.js';
        // script9.async = true;
        // document.body.appendChild(script9);
        console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
    
        return () => {
          document.head.removeChild(link1);
          document.head.removeChild(link2);
          document.head.removeChild(link3);
          document.head.removeChild(link4);
          document.head.removeChild(link5);
          document.head.removeChild(link6);
          document.head.removeChild(link7);
          document.head.removeChild(link8);
          document.head.removeChild(link9);
        //   document.body.removeChild(script1);
        //   document.body.removeChild(script2);
        //   document.body.removeChild(script3);
        //   document.body.removeChild(script4);
        //   document.body.removeChild(script5);
        //   document.body.removeChild(script6);
        //   document.body.removeChild(script7);
        //   document.body.removeChild(script8);
        //   document.body.removeChild(script9);
        };
      }, []);



  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-178" style={{'backgroudColor':'#2C0E03'}} onSubmit={connexion}>
					<span className="login100-form-title">
						Se connecter
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Entrer votre telephone">
						<input className="input100" type="text" name="tel" placeholder="Entrer votre Telephone" value={tel} onChange={(e) =>  setTel(e.target.value) }/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate = "Entrer votre mot de passe">
						<input className="input100" type="password" name="pass" placeholder="mot de passe" value={psw} onChange={(e) => setPsw(e.target.value)}/>
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" style={{'backgroundColor':'#2c0e03d7'}} type='submit'>
							Connexion
						</button>
					</div>

					<div className="flex-col-c p-t-25 p-b-40">

						<a href="/" className="txt3" style={{'color':'#2c0e03d7'}}>
							Acceuil
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
  )
}

export default Login