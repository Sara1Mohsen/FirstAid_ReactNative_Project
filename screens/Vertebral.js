/////////////////////كسر الرقبة والعمود الفقري//////////////////////////
import * as React from 'react'

import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SpeakerComponent from './../Navigation/SpeakerComponent';
import CustomVideoPlayer from './../Navigation/CustomVideoPlayer';
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default function Vertebral () {

  const video = React.useRef(null);
  const callref=React.useRef()
  const [status, setStatus] = React.useState({});
  
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

          <View ref={callref} style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
            paddingHorizontal:'2%'
          
          }}>
            <ScrollView>


            
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                <Text style={styles.titel}>كسر الرقبه و العمود الفقري</Text>
              <SpeakerComponent Custom_ref={callref} />
          </View>
            <Text style={styles.text}>.لا يجب تحريك المصاب الا من قبل رجال الاسعاف   </Text>  
            <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
               <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>.انتبه اذا كان المصاب فاقد للوعي فلا يجب  تحريكه قد يتسبب تحريكه بالشلل او الموت  عليك  انتظار تدخل       رجال الاسعاف  </Text>
               <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30}}/>
            </View>
            {/* <VideoPlayer
                video={require('./videos/Vertebral.mp4')}
                style={{ marginTop: '8%' }}
              /> */}


              
              <CustomVideoPlayer
                  vid_url={  require("../videos/Vertebral.mp4")}
                  styles={{ marginTop: '8%' , width:"100%" , height:200 }}
                />
            </ScrollView>
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