import {View,Text,Button} from "react-native";
export default function Card ({item,navigation,borrar}){
    return (
        <View style = {{padding : 15 , marginVertical: 6, backgroundColor:"white",
            borderRadius : 10
        }}>
            <Text style = {{fontSize : 18 , fontWeight :"bold"}}>{item.nombre}</Text>
            <Text>item.descripcion</Text>
            <Text>item.categoria</Text>
            <Button title="Ver detalles" onPress={()=> navigation.navigate ("Detalle",{item})}/>
            <Button title="Eliminar" color ="red" onPress={() => borrar (item.id)}/>
    </View>
    );
}