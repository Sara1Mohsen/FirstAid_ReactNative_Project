import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking, ToastAndroid } from 'react-native'
import axios from 'axios'
import base_url from '../my_axios'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SpeakerComponent from '../Navigation/SpeakerComponent'
import PhoneNumbers from '../Navigation/PhoneNumbers'
import * as Location from 'expo-location'
import {showLocation} from 'react-native-map-link';

const { width, height } = Dimensions.get('window')

import {GetContext} from '../Navigation/Context'

export default function Order1HeartAttack () {

  const INITIAL_REGION = {
    latitude: 52.5,
    longitude: 19.2,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };

   const [isLoading,setIsLoading] = React.useState({})
   const callref  = React.useRef()
   const [errorMsg,setErrorMsg] = React.useState([])

   const [locatoion,setLocation] = React.useState([])
 context = GetContext();




  async function GetLocation(){


    try {
      const perm = await Location.requestForegroundPermissionsAsync()

      if(!perm.granted){
        ToastAndroid.show("ينبغى الموافقة لمعرفة المكان لارسال البلاغ الى المسعف" , 500)
        this.setState({errorMsg : "Permisson Not Granted"})
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({
        accuracy :  Location.LocationAccuracy.BestForNavigation
      })
  
      setLocation([location.coords.latitude,   location.coords.longitude])
      setIsLoading(false)
      return [location.coords.latitude,   location.coords.longitude]
    } catch (error) {
      setErrorMsg(error.message)
    }
 
   
  }






 async function sendata(){
//  const location = await GetLocation()
  // showLocation({
  //   latitude: location[0],
  //   longitude: location[1],

  //  directionsMode: 'car', // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
  // });
  const location = await GetLocation()
  console.log("sometihng")
    const Test_data = 
        {
          userID: this.context.userData.userID,
          username: this.context.userData.username,
          status : "not_seen",
          location: {
            latitude: location[0],
            longitude: location[1]
          },
          emergencies: [
            {
              caseTitle: "ازمة قلبية",
              q_As: [
                {
                  question: "هل تشعر بألم فى الصدر اتجاه القلب؟",
                  answer: "نعم"
                },{
                  question: "هل يوجد ألم فى الكتف؟",
                  answer: "نعم"
                }
              ]
            }
          ]
        }

        console.log(Test_data)
        try {
          const response = await axios.post(base_url+"/ev2" , Test_data)
          console.log( response.data)
          ToastAndroid.show("Data Sent To the paramedics",500 )


        } catch (error) {
          console.log( JSON.stringify(error))
        }
   
      }
   

  
  
    // let text = this.state.isLoading ? "Loading ...." : this.state.location 
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
         

            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
              <Text style={styles.titel}>الاجراءات </Text>
              <SpeakerComponent Custom_ref={callref} styles={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
            </View>

            <View style={{flexDirection:"row",marginTop: '8%',alignSelf:"flex-end"}}>
                 <Text style={{ fontSize: 16, color: '#e81025',marginTop:5}}>عليك التوجه الى المستشفى لتلقى الرعاية الطبية</Text>
                  <Image source={require("../images/warning-sign.png")} style={{ height: 25, width: 30,alignSelf:"center"}}/>
                </View>            
            
            <TouchableOpacity onPress={sendata}>
              <Image source={require("../images/image6.png")} style={{ height: 225, width: 220,alignSelf:"center",marginTop:50}}/>

            </TouchableOpacity>

            
          </View>

        
{/* 
          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <FontAwesome5 name='phone-alt' size={25} style={{ color: '#fff', }} />

            </TouchableOpacity>
          </View> */}

          {/* <View>
            <Text>{locatoion}</Text>
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
