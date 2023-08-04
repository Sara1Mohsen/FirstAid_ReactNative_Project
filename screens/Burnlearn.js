////////////////////////الحروق تعليمي//////////////////////

import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class Burnlearn extends React.Component {

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
            paddingBottom:"5%"
          
          }}>
            <ScrollView>


            <Text style={styles.titel}>اجراءات حروق الدرجه الاولى </Text>
              <Text style={styles.text}>.ضع الجزء المصاب في تيار  ماء جاري  لمده 10الي 15دقيقه  </Text>
              <Text style={styles.text}>.قم بوضع مرهم مضاد للحروق</Text>
              <Text style={styles.text}>.ضع شاش طبى على المنطقه</Text>
              <Image source={require("../images/msg950968557-4265.jpg")} style={{ height: 130, width:230,alignSelf:"center",opacity:.8}}/>

              <Text style={styles.titel}>اجراءات حروق الدرجه الثانيه </Text>
              <Text style={styles.text}>.ضع الجزء المصاب في تيار  ماء جاري  لمده 10الي 15دقيقه  </Text>
              <Text style={styles.text}>.ضع شاش طبي علي المنطقه المصابه ثم قم بالتوجهه الي المستشفي </Text>
              <Text style={styles.text}>.لا تقم بلمس الفقعات علي الجزء المصاب  </Text>
              <Image source={require("../images/image45.png")} style={{ height: 130, width:230,alignSelf:"center",opacity:.8}}/>

              <Text style={styles.titel}>اجراءات حروق الدرجه الثالثه </Text>
              <Text style={styles.text}>.حالة الحرق حرجه عليك التوجه الى  مستشفى الحروق </Text>
              <Text style={{marginTop: '5%',
              transform:[{
                translateX:80
              },{translateY:-4}],
              marginBottom:"20%"
              ,fontSize: 12,marginRight: 20,color: '#159da9' }}>https://youtu.be/HaC2oiBB7sI </Text>
              {/* <Image source={require("../images/image4.png")} style={{ height: 130, width:230,alignSelf:"center",opacity:.8}}/> */}
            </ScrollView>
          </View>




                

          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
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
    color: '#159da9'
  },
  text: {
    marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  }
})
/////////////////////////////