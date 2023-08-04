import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Speech from 'expo-speech'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import innerText from 'react-innertext';
import SpeakerComponent from './../Navigation/SpeakerComponent';
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class AdultCheck extends React.Component {

  constructor() {
    super()

    this.callref = React.createRef()

    this.state = {

    }
  }



  render() {
    return (
      <>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>


          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image source={require("../images/medicine.png")}
              style={{ width: 321, height: 329, opacity: 0.1 }} />

          </View>

          <View ref={this.callref} style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
            paddingHorizontal:'2%'
          
          }}>
         

            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
              <Text style={styles.titel}>افحص العلامات الحيوية </Text>
              <SpeakerComponent Custom_ref={this.callref} />
            </View>

            <Text style={styles.text}>.النبض من الشريان السباتى</Text>
               <Image source={require("../images/image2.png")} style={{ height: 100, width: 160,alignSelf:"center",marginTop:"5%",opacity:.8}}/>

            <View style={{flexDirection:"row",marginTop: '8%', marginRight: 20,alignSelf:"flex-end"}}>  
             <Text style={{fontSize:16,color: '#000',marginRight:"30%"}}>.مجرى التنفس</Text>
             <Text style={{fontSize:16,color: '#000'}}>.مجرى الهواء</Text>
            </View>

            <Image source={require("../images/image3.png")} style={{ height: 100, width:"80%",alignSelf:"center",marginTop:"5%",opacity:.8}}/>

           <View style={{width:"80%",backgroundColor:'#159da9',height:"20%",alignSelf:"center",marginTop:"7%",borderRadius:10}}>
             <Text style={{fontSize:20,textAlign:"center",marginTop:30}}>هل يوجد نبض؟ </Text>
              <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:"7%"}}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("CprAdult")} style={{width:80,height:40,backgroundColor:"white",borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                 <Text style={{color:'#159da9',fontSize:18}}>لا</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("PulseYes")} style={{width:80,height:40,backgroundColor:"white",borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                 <Text style={{color:'#159da9',fontSize:18}}>نعم</Text>
               </TouchableOpacity>
              </View>
           
           </View>
            
          </View>

           

          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff', }} />

            </TouchableOpacity>
          </View>

        </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  titel: {
    marginTop: '10%',
    marginBottom:'3%',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 1,
    color: '#000'
  },
  text: {
    marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  },
})
