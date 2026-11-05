import {CONFIG} from "../config.js"

export async function consultar (){
    const r = await fetch (CONFIG.api);
    if (!r.ok) throw new Error ("Error");
    return r.json();
}

export async function guardar (dato){
    const r = await fetch ((CONFIG.api,{
        method :"post",
        headers :{"content-type":"applicationjson"},
        body: Json.stringfy(dato)
    }))
    if (!r.ok)  throw new Error("Error");
    return r.json();
}

export async function eliminar (id){
    const r = await fetch (`$ {CONFIG.api}/${id}`,{
        method :"DELETE"
    });
    if (!ok) throw new Error ("Error");
}