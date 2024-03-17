import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterForm from '../screens/UserForm/RegisterForm';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <UserForm />
    </NavigationContainer>
  );
}

const UserForm = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RegisterForm" component={RegisterForm} />
    </Stack.Navigator>
  );
};
