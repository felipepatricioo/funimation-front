import { useNavigate } from 'react-router-dom';

export default function Profile () {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/");
    }

    return ( 
        <div>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    )
}