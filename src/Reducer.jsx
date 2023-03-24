const Reducer=(state, action)=>
{
    if(action.type=== "HOME_UPDATE")
    {
        return{
            ...state,
            name:action.payload.name,
            image:action.payload.image,
        };
    }

    if(action.type=== "ABOUT_UPDATE")
    {
        return{
            ...state,
            name:action.payload.name,
            image:action.payload.image,
        };
    }
return state;
};

export default Reducer;