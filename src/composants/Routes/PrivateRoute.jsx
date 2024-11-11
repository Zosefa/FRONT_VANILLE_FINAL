import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    if(!token){
        return <Navigate to="/Login" />;
    }
  return children;
}

export default PrivateRoute
