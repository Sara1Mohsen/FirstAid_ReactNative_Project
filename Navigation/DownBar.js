import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react';
import Voice from '@react-native-community/voice';
import Home_Stack from './HomeStack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View , ToastAndroid  , Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../screens/Setting';



const Tab = createBottomTabNavigator()

export default function TabNavigation(){
   
    return (
    
     
  
       
        <Tab.Navigator initialRouteName='Learning'  screenOptions={({route}) => ({
          tabBarIcon:({focused , color}) => {
            let iconName;
            let x= focused ? <Text style={{backgroundColor:"white" , borderRadius:50 , transform:[{translateY:5}] , fontWeight:"900" , width:10 , height:10}}></Text > : <Text style={{position:"absolute"}} ></Text>
            if(route.name == "Learning" || route.name == "Emergency"){
              iconName= route.name == "Emergency" ? "briefcase-medical" : "book-open"  
  
              return (
                        <>
                          <FontAwesome5 name={iconName} size={32} style={{ color: color   }} /> 
                          {x}
                          
                        </>  
              ) 
            }else{
              return (<>
              <Ionicons name='settings' size={32} style={{ color: color }} />
              {x}
              </>)  
            }
  
            
          },
          // tabBarBackground:"#159DA9",
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor:"#fff",
       
          tabBarStyle: {paddingVertical:5 , paddingBottom:5 , height:68 ,  backgroundColor: "#159DA9"},
          
       //   
          
        })}>
      
      <Tab.Screen name="Settings" component={Setting} options={{title:"الاعدادات" , tabBarLabel:""}} />
  
  
  
  
        <Tab.Screen name="Learning"   options={{  tabBarLabel:"" ,headerShown:false}}>
          
        {(props) => {
              Voice.destroy().then(Voice.removeAllListeners);
          return ( <Home_Stack {...props} LearningState={true} />)
        }}
  
        </Tab.Screen>
      
         <Tab.Screen name="Emergency" options={{tabBarLabel:"" , headerShown:false}}>
        {(props) => {
            Voice.destroy().then(Voice.removeAllListeners);
          return <Home_Stack {...props} LearningState={false}  />
        } }
  
        </Tab.Screen>

  
      </Tab.Navigator>

   
  
     
    )
  }
  