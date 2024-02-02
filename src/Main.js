import { createStackNavigator } from '@react-navigation/stack';
import Signin from './pages/signin';
import MainApp from './MainApp';

const Stack = createStackNavigator();

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainApp" component={MainApp}  options={{headerShown:false}}/>
      <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default Main;