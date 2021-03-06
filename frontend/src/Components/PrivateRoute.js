import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {

    const user = useSelector(state => state.User.User);

    return (
        user ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute