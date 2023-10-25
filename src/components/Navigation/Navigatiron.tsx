
import { useAppDispatch, useAppSelector } from "../../hooks/hook"
import { selectIsLoggedIn } from "../../redux/Authorization/selectors";
import { logOut } from "../../redux/Authorization/operation";
import { Nav, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
    const isLogin = useAppSelector(selectIsLoggedIn);
    const dispatch = useAppDispatch();

    const logout = () => { 
        dispatch(logOut());
    }

    return (
        <Nav>
            <StyledLink to="/">Home</StyledLink>
            {isLogin ? <><StyledLink to="/table">Table</StyledLink><button type="button" onClick={() => logout()}>Logout</button></> : <StyledLink to="/login">Login</StyledLink>}

        </Nav>
    )
}