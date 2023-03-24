import React, { useEffect } from 'react';
import Bodypart from './components/Bodypart';
import { useGlobalContext } from './Context';
import Skill from "./Skill";
import Contact from "./Contact";
const Home = () =>
{
  const { updateHomePage}= useGlobalContext();
  useEffect(()=>
  {
    updateHomePage();
  },[]);
  return(
    <>
       <Bodypart />
    <Skill />
    <Contact />
    </>
  )
}

export default Home;