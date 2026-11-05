import {View,textInput,Button,Alert, TextInput} from "react-native";
import {useState} from "react";
import { CONFIG } from "../config";
import { useAppDatos } from "../context/Datos";

export default function Formulario ({navigation}){
    const {Agregar} =useAppDatos ();
    const [form,setForm]= useState({});
    async function guardar (){
        if (CONFIG.campos.some (c=> !String (form [c]|| "").trim())){
            return Alert.alert ("Error","Completa todos los campos");
        }
        try {
            await agregar (form);
            navigation.goBack(;)
         }catch{
            Alert.alert ("Error","No se guardo")
         }
    }
    return (
        <View style = {{padding: 20}}>
            <CONFIG.campos.map (c => (
                <textInput
                key={c}
                placeHolder = {c}
                Value = {form[c]||""}
                onChangeText ={v => setForm ({...form,[c]:v})}
                style = {{borderWidth: 1 , padding : 12,marginBottom:12}}
                />
            ))

            <Button title ="Guardar"onPress={guardar}/>
        </View>
    );
}