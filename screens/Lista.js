import {View,Text,Button,flatList, FlatList} from "react-native";
import { useAppDatos } from "../context/Datos";
import Card from "../components/Card"

export default function Lista ({navigation}){
    const {datos,cargando,borrar} = useAppDatos();
    if(cargando) return <Text>Cargando ... </Text>;
    return (
        <View style = {{flex : 1, padding : 15}}>
            < Button title = "Agregar" onPress={()=> navigation.navigate("Formulario")}/>
            <FlatList
            data ={datos}
            key keyExtractor={item =>String (item.id)}
            render item = {({item})=>(
                <card item = {item} navigation = {navigation} borrar={navigation}/>
            )}
            ListEmptyComponent={<Text>No hay registros</Text>}
            />
        </View>
    );
}