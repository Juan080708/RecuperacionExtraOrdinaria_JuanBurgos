import {View,Text} from "react-native";
import { CONFIG } from "./config";
export default function Detalle ({route}){
  const {item} = route.params;
  return(
    <View style ={{padding :20}}>
      <Text style = {{fontSize :23 , fontWeight:"bold"}}>Detalles</Text>
      {CONFIG.campos.MAP (C=>(
        <Text key ={c} style = {{marginTop:15}}>
          {c}:{item[c]}
        </Text>
      ))}
    </View>
  );
}
