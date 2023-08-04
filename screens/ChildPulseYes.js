import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions, Linking  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers';

import SpeakerComponent from './../Navigation/SpeakerComponent';
const { width, height } = Dimensions.get('window')
export default class ChildPulseYes extends React.Component {

  constructor() {
    super()
    this.callref = React.createRef();
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
              <Text style={styles.titel}>الاجراءات </Text>
              <SpeakerComponent Custom_ref={this.callref} />
            </View>

            <Text style={styles.text}>.قم باعطاء الطفل اى شىء به سكر وتجنب ان يقوم ببلعه</Text>

            <View style={{width:"80%",backgroundColor:'#159da9',height:"30%",alignSelf:"center",marginTop:"30%",borderRadius:10}}>
            <Text style={{fontSize:20,textAlign:"center",marginTop:'20%'}}>هل تمت افاقته؟ </Text>
               <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:"7%"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ChildBreatheNo")} style={{width:80,height:40,backgroundColor:"white",borderRadius:5,alignItems:"center",justifyContent:"center"}}>
                  <Text style={{color:'#159da9',fontSize:18}}>لا</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Chbreath")} style={{width:80,height:40,backgroundColor:"white",borderRadius:5,alignItems:"center",justifyContent:"center"}}>
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
