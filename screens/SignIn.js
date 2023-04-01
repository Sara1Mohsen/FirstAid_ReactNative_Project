///sign in///////////////////////
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      البريدالالكتروني: '',
      كلمةالمرور: '',
      error_fname: "",
      error_lname: "",
      error_email: "",
      error_pass: "",
    }
  }
  login() {
    let lname = this.state.البريدالالكتروني.trim()
    let email = this.state.كلمةالمرور.trim()

    let err_email = ''
    let err_pass = ''

    if (email == '') {
      err_email = 'Invalid email'
    }
    if (pass == '') {
      err_pass = 'Invalid pass'
    }
    this.setState({ error_email: err_email, error_pass: err_pass })
  }
  render() {
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

            <Image source={require("./images/emergency (1).png")}  style={{height:"3%",width:"15%"}}/>


        </View>






        <View style={{ justifyContent: 'center' }}>

          <View style={{ padding: 10 }}>
            <Text style={{fontWeight:"bold"}}>البريدالالكتروني</Text>
            <TextInput
              value={this.state.البريدالالكتروني}
              onChangeText={value => {
                this.setState({
                  البريدالالكتروني: value
                })
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
              value={this.state.كلمةالمرور}
              onChangeText={value => {
                this.setState({
                  كلمةالمرور: value
                })
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
            }}>{this.state.error_email}</Text>

          </View>

          <TouchableOpacity
              onPress={() => {
                this.login()
              }}
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
            <Text style={{fontWeight:'bold', textAlign:'center',marginTop:'5%'}}>تسجيل </Text>
            <Text style={{fontWeight:'bold', textAlign:'center',marginTop:'80%'}}>الشروط والاحكام </Text>
        </View>
      </>
    )
  }
}