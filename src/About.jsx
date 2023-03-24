import React,{ useEffect } from 'react';
import Bodypart from './components/Bodypart';
import { useGlobalContext } from './Context';
const About = () =>
{
  const { UpdateAboutPage } = useGlobalContext();
  useEffect(()=>
  {
    UpdateAboutPage();
  },[]);
  return(
    <Bodypart />
  )
};

export default About;