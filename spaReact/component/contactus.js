import React from 'react';

export const ContactUs=(props)=>{
    return(
        <div>
        <h1>information about {props.match.params.name}</h1>
        </div>
    );
}