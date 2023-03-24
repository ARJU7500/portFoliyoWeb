import React, { useContext, useReducer } from "react";
import Reducer from "./Reducer";
const AppContext = React.createContext(); //creatye context
import JSON from "./components/DATA/data.json";
const intialState =
{
    name:"",
    image:"",
};

const AppProvider = ({children})=>
{
    const [state, dispatch ]= useReducer(Reducer, intialState);
    const updateHomePage = () =>
{
    return dispatch(
        {
            type:"HOME_UPDATE",
            payload:{
                name:"Arjun Negi",
                image:"./image/body1.jpg",
            },
        });
};

const UpdateAboutPage =()=>
{
    return dispatch(
        {
            type:"ABOUT_UPDATE",
            payload:{
                name:"Arjun Negi",
                image:"./image/about1.jpg",
            },
        });
};

// to call the api

// useEffect(()=>
// {
//     getSkill(API);
// },[]);

return(
    <AppContext.Provider value={{...state, updateHomePage, UpdateAboutPage }}>
        {children}
    </AppContext.Provider>
);
};

// global coustom hoook
const useGlobalContext = ()=>
{
    return useContext(AppContext);
};

export { AppContext, AppProvider,useGlobalContext};