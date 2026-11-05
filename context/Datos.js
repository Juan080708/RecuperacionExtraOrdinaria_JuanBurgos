import React, {createContext,useContext}from "react";
import useDatos from "../hooks/useDatos";

const context = createContext ();  
export function Proveedor ({children}){
    const datos = useDatos ();
    return (
        <contexto.provider value = {datos}>
            {children}
            </contexto.provider>
    );
}   

export const useAppDatos = () => useContext(Contexto);