import { NavLink,  } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { selectIsLoggedIn } from "../../redux/Authorization/selectors";
import { logOut } from "../../redux/Authorization/operation";

export const Navigation = () => {
    const isLogin = useAppSelector(selectIsLoggedIn);
    const dispatch = useAppDispatch();

    const logout = () => { 
        dispatch(logOut());
    }

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {isLogin ? <><NavLink to="/table">Table</NavLink><button type="button" onClick={() => logout()}>Logout</button></> : <NavLink to="/login">Login</NavLink>}

        </nav>
    )
}