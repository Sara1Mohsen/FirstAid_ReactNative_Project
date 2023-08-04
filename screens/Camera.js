 import * as React from 'react'
 //import ImagePicker from 'react-native-image-crop-picker'
 import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking } from 'react-native'
 import Icon from 'react-native-vector-icons/FontAwesome5'
 import Ionicons from 'react-native-vector-icons/Ionicons'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 const { width, height } = Dimensions.get('window')
 export default class Camera extends React.Component {
 
   constructor() {
     super()
 
     this.state = {
 
     }
   }
   render() {
     return (
       <>
         <View style={{ backgroundColor: "#1C273A", flex: 1 }}>
 
 
           <View style={{
             flex: 1,
             alignItems: 'center',
             justifyContent: 'center'
           }}>
 
             <Image source={require("../images/camera.png")}
               style={{ width: 210, height: 210 }} />
 
           </View>
 
         </View>
       </>
     )}}
 