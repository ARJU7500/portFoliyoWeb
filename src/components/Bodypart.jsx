import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from '../Context';
const Bodypart = () => {
  const { name, image }= useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="body_data">
          <p className="bodyTop">This Is Me</p>
          <h1 className="bodyHeading">{name}
          </h1>
          <p className="bodyPara">
            I'm {name}. A Full Stack Developer.I have done my diploma with
            INFORMATION TECHNOLOGY and now i'm pursing B.Tech. with COMPUTER
            SCIENCE & ENGINEERING.{" "}
          </p>
          <Button className="btn hireme_btn">
            <NavLink to="/contact">HIRE ME &#8594;</NavLink>
          </Button>
        </div>
        <div className="bodyImg">
        <picture>
        <img src={image} alt="" className="imgBody"/>
        </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 9rem 0;
  .body_data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .bodyTop {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .bodyHeading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .bodyPara {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .bodyImg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .imgBody {
    max-width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }

`;
export default Bodypart;   
