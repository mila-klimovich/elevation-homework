import React from "react";

export default function Contact({name, display}){

    return(
        <div onClick={()=>display(name)}>{name}</div>
    )
}