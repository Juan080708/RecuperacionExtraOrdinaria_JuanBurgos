import { useState, useEffect } from "react";
import {CONFIG} from "../config";
import {consultar,guardar,eliminar} from "../services/api"

export default function useDatos () {
    const [datos, setDatos]=useState([
        {id:"1",nombre : "Ejemplo",descripcion :"Registro local",categoria "General"}
    ]);

    const [cargando,setCargando]= useState (CONFIG.usarAPI);
    async function cargar (){
        if (!CONFIG.usarAPI) return ;
        try {
            setCargando (true);
            setDatos (await consultar());
        } catch (e){
            console.log (e);
        }finally{
            set cargando (false);
        }
    }
    useEffect(()=> {
        cargar ();
    },[]);

    async function agregar (dato){
        if (CONFIG.usarAPI){
            await guardar (dato);
            await cargar ();
        }else{
            setDatos (prev => [...prev,{...dato,id:Date.now().toString()}]);
        }
    }
    async function borrar (id){
        if(CONFIG.usarAPI){
            await eliminar (id);
            await cargar ();
        }else{
            setDatos (prev => prev.filter(x=>String (x.id)!==String (id)));
        }
    }
    return {datos , cargando, agregar, borrar, cargar};
}