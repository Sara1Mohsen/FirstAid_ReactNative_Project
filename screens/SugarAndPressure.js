import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers';
import SpeakerComponent from './../Navigation/SpeakerComponent';

const { width, height } = Dimensions.get('window')
export default class SugarAndPressure extends React.Component {

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
            paddingHorizontal:"2%"
          
          }}>
           
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
            <Text style={styles.titel}>الاجراءات </Text>
              <SpeakerComponent
                Custom_ref={this.callref} styles={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
            </View>

            
            <Text style={styles.text}>.ساعد المصاب على الاستلقاء</Text>
            <Text style={styles.text}>.تأكد من جودة التهوية</Text>
            <Text style={styles.text}>.اذا لم يتم أخذ جرعة الأنسولين يجب القيام بأخذه</Text>
            <Text style={styles.text}>.لو تم أخذه قم باعطاء اى شىء به سكر</Text>
            <Text style={styles.text}>.قم بقياس السكر اذا كان فى ارتفاع او انخفاض يجب مراجعة الطبيب المعالج</Text>

           
          </View>

   
          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff'}} />

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

  }

})

