import * as React from 'react'
import phones from '../Navigation/PhoneNumbers'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class PoisonLearning extends React.Component {

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
            paddingHorizontal:"2%",
            paddingBottom:"5%"
          
          }}>
            <ScrollView>
           
          <Text style={styles.titel}>تسمم الغاز</Text>   
            <Text style={styles.text}>.قم بفحص الشخص</Text>
            <Text style={styles.text}>.قم بفحص العلامات الحيوية</Text>
            <Text style={styles.text}>.قم بطلب الاسعاف</Text>

            <Text style={styles.titel}>تسمم الطعام</Text>
              <Text style={styles.text}>.عدم جعله يتقيأ</Text>
              <Text  style={styles.text}>.قم بالاتصال بمركز السموم</Text>
              <Text onPress={() => Linking.openURL("https://www.youtube.com/watch?v=KEfLi97i_mI")} style={{color:"#159da9",fontSize:12,fontWeight:"bold",marginTop:"8%"}}>https://www.youtube.com/watch?v=KEfLi97i_mI</Text>

            <Text style={styles.titel}>التسمم بسبب بلع قرص غلة</Text>
              <Text style={styles.text}>.قم بالاتصال بمركز السموم</Text>
              <Text  style={[styles.text , {marginBottom:"20%"}]}>.أخذ اربع زجاجات من زيت البارافين</Text>
              
        

            </ScrollView>
          </View>

    

          <View  style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Toxics)}>
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
    color: '#159da9'
  },
  text: {
     marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  }

})