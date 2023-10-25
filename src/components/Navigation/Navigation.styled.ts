import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  position: relative;
  color: rgb(255 254 254);
  padding: 16px 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  &.active {
    color: rgb(134 227 188);
    text-shadow: 0px 2px 17px rgba(246, 246, 246, 1);
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: rgb(255 254 254);
    border-radius: 4px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  :hover::before {
    transform: scaleX(1);
  }

  /* &.active:hover:after,
  &.active:focus:after {
    width: 100%;
  } */
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;
