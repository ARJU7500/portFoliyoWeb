import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Err = () =>
{
  return(
   <Wrapper>
    <img src="../image/err.jpg" alt='err page' width='50%' />
   <NavLink to='/'><button className='errbutn'>Go Back</button></NavLink>
   </Wrapper>
  )};
  const Wrapper = styled.section`
  padding:5rem 0 0 0;
  text-align:center;

.errbutn{
    width: 10rem;
    height:5rem;
    align-item:center;
    border:none;
   background-color:#6254F3;
   color:white;
   margin-left:2rem;
   cursor:pointer;

  }
  `;

export default Err;