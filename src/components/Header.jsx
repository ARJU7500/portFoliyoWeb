import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import style from "styled-components";
const Header = () => 
{
    return(
        <MainHeader>
            <NavLink to="/" alt="" title="">
            <h2><span>A</span>rju<span>N</span>egi</h2>
            </NavLink>
            <Navbar />
        </MainHeader>
    );
};
const MainHeader = style.header`
padding: 0 4.8rem;
height:10rem;
display:flex;
justify-content:space-between;
align-items:center;

h2
{
    font-weight:700;
    color:#6254F3;
}
`;
export default Header;