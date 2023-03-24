import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgFormatJustify } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
const Navbar = () =>
{
    const [openMenu, setOpenMenu] = useState(false);
const Nav = styled.nav`
.navList
{
    display:flex;
    gap:4.8rem;

    li{
        list-style:none;

        .nav_Link{
            text-decoration:none;
            &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.2s linear;
          }
          &:hover,
          &:active {
            color:#6254F3;
    text-decoration: underline;
          }
        }}}

  .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      /* hide the original nav menu  */
     .navList {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0A1435;
         display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        li {
          .nav_Link {
            &:link,
            &:visited {
              font-size: 4.2rem;
              color:white;
            }
            &:hover,
            &:active {
              color: #6254F3;
              text-decoration:underline;
            }
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: white;
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .navList {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
`;


   return(
        <Nav>
            <div className={openMenu ? "menuIcon active" : "menuIcon"}>
                <ul className="navList">
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} to="/" className="nav_Link" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} to="/skill" className="nav_Link" > MY Skill</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} to="/about" className="nav_Link" > About ME</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} to="/contact" className="nav_Link" > MY Contact</NavLink>
                    </li>
                </ul>
                {/* mobile navbar buton */}
                <div className="mobile-navbar-btn">
                    <CgFormatJustify  name="menu-outline" className="mobile-nav-icon" onClick={() => setOpenMenu(true)} />
                    <AiOutlineCloseCircle  name="close-outline" className="close-outline mobile-nav-icon" onClick={() => setOpenMenu(false)} />
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;