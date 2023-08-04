///////////////////////الكسور تعليمي//////////////////////

import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import SpeakerComponent from '../Navigation/SpeakerComponent'
import PhoneNumbers from '../Navigation/PhoneNumbers'


const { width, height } = Dimensions.get('window')
export default class FractionsLearn extends React.Component {

  constructor() {
    super()
    this.callref = React.createRef()
    this.callref2 = React.createRef()
    this.state = {

    }
  }

  
  render() {
    return (
      <>
        <View   style={{ backgroundColor: "#fff", flex: 1 }}>


          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image source={require("../images/medicine.png")}
              style={{ width: 321, height: 329, opacity: 0.1 }} />

          </View>

           <View style={{
            position: "relative",
            width: "100%",
            height: height - 68,
            paddingHorizontal:'2%'
          
          }}>
            <ScrollView>

      
            <View ref={this.callref}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
             <Text  style={styles.titel}>الكسر في الاصابع </Text>
              <SpeakerComponent Custom_ref={this.callref} styles={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
          </View>
            <Text style={styles.text}>.اذا كان المريض يعاني من: </Text>
            <Text style={styles.text}>1.تورم في الاصبع المصاب </Text>
            <Text style={styles.text}>2.عدم القدره علي تحريك الاصبع </Text>
            <Text style={styles.text}>3.تشوه او اعوجاج </Text>
            <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
              <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>. يجب استخدام جبيره طبيه وتثبيت الاصبع للتقليل من التورم  او الكدمات </Text>
              <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30}}/>
            </View>

            <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
              <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>.في حاله النزيف  مع وجود  الكسر يجب التوجهه للمستشفي قد تحتاج الاصابه الي التدخل الجراحي  </Text>
              <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30}}/>
            </View>
          
            <Text style={{fontSize:12,fontWeight:"bold",color:"#159da9",marginTop:"8%"}}
                  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=UMjAxJoS1N4')}>
              https://www.youtube.com/watch?v=UMjAxJoS1N4
            </Text>
            </View>
         
         <View ref={this.callref2}>
              <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                <Text style={styles.titel}>* الكسر في الاطراف كالذراع والقدم :-</Text>
                <SpeakerComponent Custom_ref={this.callref2} styles={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
              </View>



              <Text style={styles.text}>اذا كان المريض يعاني من  :   </Text>
              <Text style={styles.text}>1.تورم في مكان الاصابه    </Text>
              <Text style={styles.text}>2.آلام حاده في مكان الاصابه   </Text>
              <Text style={styles.text}>3.تشوه او اعوجاج    </Text>
             
             
              <View style={{ flexDirection: "row", marginTop: '8%' , marginBottom:150, alignSelf: "flex-end" }}>
                <Text style={{ fontSize: 15, color: '#e81025', marginTop: 5 }}>.يجب عدم تحريك الجزء المصاب وتثبيت بالحامل  </Text>
                <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30 }} />


             
              </View>
         </View>
           
            </ScrollView>
          </View>

          



                 

          <View   style={{ position: 'absolute', bottom: 20, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff' }} />

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