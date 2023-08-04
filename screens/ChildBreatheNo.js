import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SpeakerComponent from './../Navigation/SpeakerComponent';
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class ChildBreatheNo extends React.Component {

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
              <Text style={styles.titel}>الاجراءات </Text>
              <SpeakerComponent Custom_ref={this.callref} />
            </View>

            <Text style={styles.text}>.قم بوضع كحول عند الأنف</Text>
            <Text style={styles.text}>.اذا تمت افاقته راقبه وقم بمراجعة الطبيب</Text>

            {/* <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Image source={require("../images/image6.png")} style={{ height: 225, width: 220,alignSelf:"center",marginTop:50}}/>

            </TouchableOpacity> */}

            
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
