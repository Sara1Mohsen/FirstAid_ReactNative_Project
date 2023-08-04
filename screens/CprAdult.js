import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import CustomVideoPlayer from './../Navigation/CustomVideoPlayer';
import SpeakerComponent from './../Navigation/SpeakerComponent';
import PhoneNumbers from '../Navigation/PhoneNumbers'
import { GetContext } from '../Navigation/Context'

const { width, height } = Dimensions.get('window')
export default function  CprAdult ({navigation})    {

  const speakerRef = React.useRef()
  context = GetContext();
  
  sendData = async () => {

    try {
      await context.sendata(
        {
          userID: this.context.userData.userID,
          username: this.context.userData.username,
          status : "not_seen",
          emergencies: [
            {
              caseTitle: "الغماء",
              q_As: [
                {
                  question: "هل يوجد نبض ؟",
                  answer: "لا"
                },{
                  question: "ما الفئة العمرية ؟",
                  answer: "طفل"
                }
              ]
            }
          ]
        })
      ToastAndroid.show("Data Sent To the paramedics",500 )
    } catch (error) {
      console.log(error.message)
    }
  


  }

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
         
         <ScrollView ref={speakerRef}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
              <Text style={styles.titel}>الاجراءات </Text>
              <SpeakerComponent Custom_ref={speakerRef} />
            </View>
              
               <Text style={styles.text}>.قم بوضع كف يدك بالتشابك مع اليد الأخرى فى منتصف صدر المريض ثم قم بعمل 30 ضغطة كما هو موضح</Text>
               <Text style={styles.text}>.قم بالتنفس الصناعى للمريض مرتين فى مدة لا تتجاوز 10 ثوانى بعد كل 30 ضغطة </Text>
               <CustomVideoPlayer vid_url={ require("../videos/adult_cpr.mp4")}
                  styles={{marginTop:"8%" , height:200}}/>

               <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
                 <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>لا تتوقف حتى يستجيب الطفل او حتى تصل الاسعاف</Text>
                 <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30,alignSelf:"center"}}/>
               </View>
            
         </ScrollView> 
            
            
          </View>
          
          <TouchableOpacity onPress={sendData} >
              <Image source={require("../images/image6.png")} style={{ height: 100, width: 100,alignSelf:"center",marginTop:40,
              transform:[{translateY:-20}],
              marginBottom:20
          
            
            }}/>

</TouchableOpacity>

          {/* <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff', }} />

            </TouchableOpacity>

          </View> */}

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
