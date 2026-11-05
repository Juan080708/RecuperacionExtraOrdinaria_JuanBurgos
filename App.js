import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Proveedor } from "./context/Datos.js";

import Inicio from "./screens/Inicio.js";
import Lista from "./screens/Lista.js";
import Formulario from "./screens/Formulario.js";
import Detalle from "./screens/Detalle.js";

const stack = createNativeStackNavigator();

export default function App(){
  return (
    <Proveedor>
      <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name = "Inicio" component={Inicio}/>
        <stack.Screen name = "Lista" component={Lista}/>
        <stack.Screen name = "Formulario" component={Formulario}/>
        <stack.Screen name = "Detalle" component={Detalle}/>
        </stack.Navigator>
        </NavigationContainer>
        </Proveedor>
       );
}