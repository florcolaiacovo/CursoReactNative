import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

import Inicio from './src/screens/Inicio';
import CursoDeMotricidad from './src/screens/CursoDeMotricidad';
import CursoPAyRCP from './src/screens/CursoPAyRCP';
import TodosLosCursos from './src/screens/TodosLosCursos';


export default StackNavigation = () => {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Cursos y talleres" component={TodosLosCursos} />
        <Stack.Screen name="Curso de Juegos y Motricidad" component={CursoDeMotricidad} />
        <Stack.Screen name="Curso de Primeros Auxilios y RCP" component={CursoPAyRCP} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
