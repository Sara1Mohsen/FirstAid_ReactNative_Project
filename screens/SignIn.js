///sign in///////////////////////
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import baseUrl from '../my_axios'
import {GetContext} from '../Navigation/Context'
import { ToastAndroid , Linking } from 'react-native';
export default function SignIn ({navigation}){

  
  // constructor() {
  //   super()
  //   this.state = {
  //     البريدالالكتروني: '',
  //     كلمةالمرور: '',
  //     error_fname: "",
  //     error_lname: "",
  //     error_email: "",
  //     error_pass: "",
  //   }
  // }

  const [email , setEmail] = React.useState("")
  const [pass , setPass] = React.useState("")
  const [Error , setError] = React.useState("")
  const context = GetContext()
  

   function login() {
    
    if (email == '' || pass == "") {
      setError('Empty Email or Password')
    }


  
 context.login(email , pass).then((res) => {
    console.log(res) 
     ToastAndroid.show(`Welcome Back , ${res.username}` , 200)
     navigation.navigate("rest")
    }).catch(err => {
      console.log(err)
      setError("Wrong Email or Password")
    })
 

  }
  
    return (
      <>
        <View style={{ justifyContent: "space-between" ,marginTop:50,marginRight:20}}>
          <View>
            <Text >مرحبا بك,
            </Text>
            <Text>
              قم بالتسجيل للمتابعه
            </Text>
          </View>

            <Image source={require("../images/emergency(1).png")}  style={{ transform:[{translateX:30 } , {translateY:-50}] ,height:60,width:60}}/>


        </View>






        <View style={{ justifyContent: 'center' , transform:[{translateY:50}] }}>

          <View style={{ padding: 10 }}>
            <Text style={{fontWeight:"bold"}}>البريدالالكتروني</Text>
            <TextInput
              value={email}
              onChangeText={value => {
                setEmail(value)
              }}
              placeholder='البريدالالكتروني'
              style={{
                marginTop: 5,
                backgroundColor: '#cbcbcb',
                borderRadius:10

              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{fontWeight:"bold"}}>كلمةالمرور</Text>
            <TextInput
              value={pass}
              onChangeText={value => {
                setPass(value)

              }}
              placeholder='كلمةالمرور'
              style={{
                marginTop: 5,
                backgroundColor: '#cbcbcb'
                , borderRadius:10
              }}
            />
             <View style={{ paddingRight:10 }}>
          <Text style={{fontWeight:"bold"}}>هل نسيت كلمة المرور؟</Text>
          </View>
            <Text style={{
              color: '#f00'
            }}>{Error}</Text>

          </View>

          <TouchableOpacity
              onPress={login}
              style={{
                paddingHorizontal:30,
                paddingVertical:15,
                backgroundColor:'#159da9',
                width:"90%",
                marginTop:30,
                alignSelf:"center",
                borderRadius:10

              }}
            >
              <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold"}}>تسجيل الدخول</Text>

            </TouchableOpacity>
            <Text onPress={() => {  navigation.navigate("register")}} style={{fontWeight:'bold', textAlign:'center',marginTop:'5%'}}>تسجيل </Text>
            <Text style={{fontWeight:'bold', textAlign:'center',marginTop:'80%'}}>الشروط والاحكام </Text>
        </View>
      </>
    )
  
}