import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  import Signin from './screens/SignIn';
  import SignUp from './screens/SignUp';
  
import DownBar from './Navigation/DownBar';
import Context from './Navigation/Context';










const AuthStack = createNativeStackNavigator()

export default function App () { 

  return (
    <Context>


    <NavigationContainer>
      <AuthStack.Navigator initialRouteName='Login'>
        
      <AuthStack.Screen options={{headerShown:false}} name='rest' component={DownBar} />
        <AuthStack.Screen  name='Login' component={Signin} />
        <AuthStack.Screen name='register' component={SignUp} />
       


      </AuthStack.Navigator>
    </NavigationContainer>
    </Context>
  )

 }