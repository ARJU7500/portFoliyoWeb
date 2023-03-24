import React from "react";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { TbBrandCpp,TbLocation } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>So, What you think</h3>
            <h3>Hire Me &#8594;</h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          {/* 1-coloumn */}
          <div className="footer-about">
            <h3>Arjun Negi</h3>
            <p>Hii Welcome</p>
          </div>

          {/* 2-column */}
          <div className="footer-subscribe">
            <h3>Address</h3>
            <p><TbLocation title="Location" />Chamoli, Uttarakhand</p>
          </div>

          {/* 3-column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com/ARJU7500" target="_blank">
                  <FaGithub className="icons" title="GitHub Profile" />
                </a>
              </div>
              <div>
                <a href="linkedin.com/in/arjun-negi-a28ba61b8" target="_blank">
                  <FaLinkedinIn className="icons" title="Linkedin Profile" />
                </a>
              </div>
              <div>
                <a href="https://auth.geeksforgeeks.org/user/an096237/profile" target="_blank">
                  <TbBrandCpp className="icons" title="Code Practice in GFG" />
                </a>
              </div>
            </div>
          </div>

          {/* 4-column */}
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <h3>+91 7668213002</h3>
                <h3>+91 7500978265</h3>
                <h3>an096237@gmail.com</h3>
            </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
            <hr />
                <p className="btm-para">@{new Date().getFullYear()} Arjun Negi.All Rights Reserved</p>
            </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    border:1px solid #0A1435;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 140px 0px 3px 0px;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 4px;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
      .btm-para{
        text-align:center;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
  h3{
    margin-bottom:3px;
  }
    }
  }
`;
export default Footer;
