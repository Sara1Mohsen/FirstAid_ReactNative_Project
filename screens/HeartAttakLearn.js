//////////////////الازمه القلبية تعليمي/////////////////////////
import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window')
export default class HeartAttakLearn extends React.Component {

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

            <Image source={require("./images/medicine.png")}
              style={{ width: 321, height: 329, opacity: 0.1 }} />

          </View>

          <View style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
          
          }}>
            <ScrollView>


            <Text style={styles.titel}>الازمه القلبيه :-</Text>
              <Text style={styles.text}>.قد يعانى الشخص من الم مستمر فى الصدر او فى الرقبه او الظهر ويحدث هذا بسبب انسداد تدفق الدم الى عضلة القلب ولن يخف هذا الالم مع الراحه </Text>

              <Text style={styles.text}>.قم بالاتصال بالاسعافات اذا كان الشخص يعانى من هذه الالام  لان الازمه القلبيه قد تكون خطيرة للغايه </Text>
              <Text style={styles.text}>.قم باعطاء المريض الاسبرين اذا كان لا يعانى من الحساسيه</Text>
              <Text style={styles.text}>.تاكد من ان المريض فى وضع مريح مثل جعله متكئا على الحائط او الكرسى </Text>
              <Text style={styles.text}>.سوف يخفف هذا الضغط على القلب وكما ان جلوسهم على الارض يعنى ايضا انهم اقل عرضة للخطر  </Text>
              <Text style={styles.text}>.امنح المريض الطمأنينه حتى قدوم سيارة الاسعاف</Text>
              <Text style={{marginTop: '8%',fontSize: 12,marginRight: 20,color: '#159da9' }}>https://www.youtube.com/watch?v=RE0IOYXofZg </Text>
              <Text style={{marginTop: '8%',fontSize: 12,marginRight: 20,color: '#159da9' }}>https://www.youtube.com/watch?v=VpP0V0wtgsk </Text>
            </ScrollView>
          </View>




                      <View style={{ backgroundColor: '#39A9B3', height: 68, width: '100%', marginTop: "17%", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
             <Ionicons name='settings' size={32} style={{ color: '#fff' }} />
               <FontAwesome5 name='book-open' size={32} style={{ color: '#fff' }} />
             <FontAwesome5 name='briefcase-medical' size={32} style={{ color: '#fff' }} />
             </View>

          <View style={{ position: 'absolute', bottom: 80, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff', }} />

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