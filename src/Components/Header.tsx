import React from "react";

interface IHeaderProps{
    label?:string;
    children?: JSX.Element | JSX.Element[];
}

//label

const Header =({label="Default Props",children}:IHeaderProps)=>{
   return(
    <>
    <h1>{label}</h1>
    {children}
    </>
   )
}

export  default Header;