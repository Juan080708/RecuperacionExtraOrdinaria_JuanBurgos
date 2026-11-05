import {View , Text, Button} from "react-native";
import {CONFIG} from "../config";

export default function Inicio ({navigation}){
    return (
        <View style = {{flex : 1, justifyContent :"center", alignItems : "center"}}>
            <Text style = {{fontSize : 28 , fontWeight :"bold",}}>{CONFIG.nombre}</Text>
            <Text>Bienvendio a mi aplicacion</Text>
            <Button title= "Comenzar"onPress={()=>navigation.navigate("Listo")}/>
        </View>
    )
}