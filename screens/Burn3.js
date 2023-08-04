////////////////حروق الدرجة الثالثة/////////////////
import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Phones from '../Navigation/PhoneNumbers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers';
const { width, height } = Dimensions.get('window')
export default class Burn3 extends React.Component {

  constructor() {
    super()

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

          <View style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
            paddingHorizontal:'2%'
          
          }}>
            <ScrollView>


            
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
              <Text style={styles.titel}>اجراءات حروق الدرجه الثالثة:</Text>
              <FontAwesome5 name='volume-up'
                size={30} style={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
          </View>
            <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
              <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>.حالة الحرق حرجه عليك التوجه الى
              مستشفى الحروق</Text>
              <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30,alignSelf:"center"}}/>
            </View>
          <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Burning)}>
          <Image source={require("../images/image6.png")} style={{ height: 220, width: 220,alignSelf:"center",marginTop:50}}/>
            </TouchableOpacity>
            </ScrollView>
          </View>




                  

          <View onPress={()=>{Linking.openURL("tel+"+Phones.Burning)}} style={{ position: 'absolute', bottom: 80, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Burning)}>
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