import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import VideoPlayer from 'react-native-video-player'
const { width, height } = Dimensions.get('window')
export default class CprBaby extends React.Component {

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
              <Text style={styles.titel}>*الاجراءات :-</Text>
              <FontAwesome5 name='volume-up'
                size={30} style={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
            </View>

            <Text style={styles.text}>.قم باستخدام اصبعى الابهام والوسطى بالضغط فى منتصف صدر الرضيع 30 ضغطة بشكل سريع</Text>
            
               <Text style={styles.text}>.قم بعمل التنفس الصناعى للرضيع مرتين فى مدة لا تتجاوز 10 ثوانى بعد كل 15 ضغطة</Text>
               <Text style={styles.text}>.يتم التنفس الصناعى للرضيع من خلال الفم والأنف وليس الفم فقط</Text>
               <VideoPlayer video={require("../videos/baby_cpr.mp4")}  
                 showDuration={true}
                 autoplay
                 //disableControlsAutoHide={true}
                 defaultMuted={true}
                 disableSeek={true}
                 pauseOnPress={true}
                  style={{marginTop:"8%"}}/>
               <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
                 <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>لا تتوقف حتى يستجيب الرضيع او حتى تصل الاسعاف</Text>
                 <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30,alignSelf:"center"}}/>
               </View>
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
    color: '#000'
  },
  text: {
    marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  },
})

