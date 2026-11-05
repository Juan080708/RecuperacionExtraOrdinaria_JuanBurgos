import {View , Text, Button} from "react-native";
import {CONFIG} from "../config.js";
import { useAppDatos } from "../context/Datos.js";

export default function Inicio ({navigation}){
    return (
        <View style = {{flex : 1, justifyContent :"center", alignItems : "center"}}>
            <Text style = {{fontSize : 28 , fontWeight :"bold",}}>{CONFIG.nombre}</Text>
            <Text>Bienvendio a mi aplicacion</Text>
            <Text>Juan Pablo Burgos Guzman</Text>
            <Text>20240126</Text>
            <Text>Recuperación Ordinaria Módulo 5 – Desarrollo de componentes para
            dispositivos móviles.</Text>
            <Button title= "Comenzar"onPress={()=>navigation.navigate("Listo")}/>
        </View>
    )
}