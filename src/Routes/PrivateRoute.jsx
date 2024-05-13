import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className="flex justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div></div >
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
};

export default PrivateRoute;