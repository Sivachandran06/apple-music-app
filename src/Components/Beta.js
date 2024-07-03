import React, { useState } from "react";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';

function Beta(){

    const [buttonText,setButtonText]= useState("Try Beta");

    const handelClick = ()=>{
        setButtonText(prevtext => prevtext === 'Try Beta'? 'Exit Beta':'Try Beta');
    };


    return(
        <>
        <button className="beta-btn" onClick={handelClick}>{buttonText}<CallMadeRoundedIcon /></button>        
        </>
    );
}

export default Beta;