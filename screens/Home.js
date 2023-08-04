import * as React from 'react'
import {ActivityIndicator , Text, View, Image, TextInput,TouchableOpacity, Button, Alert  } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Voice from '@react-native-community/voice';
import ImagePicker from 'react-native-image-crop-picker';

import { PermissionsAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ToastAndroid , Linking } from 'react-native'
import PhoneNumbers from '../Navigation/PhoneNumbers'
import innerText from 'react-innertext';
import Recorder from './Home2';
import axios from 'axios';
import { PermissionStatus } from 'expo-location';
import my_axios from '../my_axios';




const ArrayOfPages = [
  {
    DisplayName : "الازمه القلبيه",
    LearningName : "HeartAttakLearn",
    EmergencyName : "HeartAttackQuestion"
  },
  {
    DisplayName : "الاغماء",
    LearningName : "Faintinglearn",
    EmergencyName : "Faint2"
  },
  {
    DisplayName : "الكسور",
    LearningName : "FractionsLearn",
    EmergencyName : "FractionQuestion"
  },
  {
    DisplayName : "التسمم",
    LearningName : "PoisonLearning",
    EmergencyName : "Poison_Question"
  },
  {
    DisplayName : "انسداد مجرى التنفس",
    LearningName : "BlockLearning",
    EmergencyName : "BlockQuestion"
  },
  {
    DisplayName : "الحروق",
    LearningName : "Burnlearn",
    EmergencyName : "Home"
  },
  {
    DisplayName : "العضات",
    LearningName : "BitesLearning",
    EmergencyName : "BitesQuestion"
  },
  {
    DisplayName : "اللدغات",
    LearningName : "StingsLearning",
    EmergencyName : "StingQuestion"
  }
]

export default function Home({LearningState , navigation , rando}){


 

  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');


  const search = (searchedText) => {
    const regex = new RegExp(searchedText , "g")

    let found = ArrayOfPages.find(el => el.DisplayName.match(regex ))

    return found
  }

  const startRecording = async () => {
 
    if(isLoading){ await stopRecording()
    }
    setLoading(true);

   // Voice.destroy().then(Voice.removeAllListeners);
    const speechStartHandler = e => {
      console.log('speechStart successful', e);
    };
  
  
     const  speechEndHandler = e => {
        setLoading(false)
        console.log('stop handler', e);
      };
  
  
      const  speechResultsHandler = async e => {
        const text = e.value[0];
  
       

        setText(text)

        let result = search(text)
        
        if(result){
          console.log({LearningState : LearningState , result : result})
          
          navigation.navigate(LearningState ? result.LearningName : result.EmergencyName)
        }
  
       
      };


      
     
      Voice.onSpeechStart = speechStartHandler;
      Voice.onSpeechEnd = speechEndHandler;
      Voice.onSpeechResults = speechResultsHandler;










    try {
      await Voice.start('ar-SA');
    } catch (error) {
      console.log('error', error);
    }
  };
  const stopRecording = async () => {
    console.log("shoud have stopped")
    try {
      await Voice.stop();
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  
  async function requestGalleryPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,

        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('File permissions granted');
      } else {
        console.log('File permissions denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
 




    React.useEffect(() => {

    
 
      return () => {
      
        Voice.destroy().then(Voice.removeAllListeners);
      }
    },[])


    const BurnsHandler = async () => {
     
       await requestGalleryPermission()
      ImagePicker.openPicker({
        cropping:false
      }).then( async image => {
       // console.log(image);
        let formdataer = new FormData()
        formdataer.append("image" , {
          uri: image.path,
          type: 'image/jpeg',
          name: 'image.jpg',
        })
        axios.post(my_axios+"/ImageProcess" , formdataer,{
          headers:{
            
            'Content-Type': 'multipart/form-data',
            
          }
        })
        .then(res => {
          let result = res.data.Result[0]
          console.log(result.label)
          switch(result.label){
            case "First Degree":
              navigation.navigate("Burn1")
              break;
            case "Second Degree":
              navigation.navigate("Burn2")
              break;
            default :
              navigation.navigate("Burn3")
          }
       
        })
        .catch(err => console.log(JSON.stringify(err)))
   

      });
    }

  
 
  //  console.log(LearningState)
    return (
      <>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={{ width: "100%", height:50 , alignSelf: "center", marginTop: 20, paddingHorizontal: "2.5%", flexDirection: 'row' }}>
              <TouchableOpacity onPress={isLoading ? stopRecording : startRecording}  style={{ zIndex:20000000000 , position:"relative" ,backgroundColor: '#39A9B3', height: '100%', width: '20%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent:'center'}} >
                {isLoading ? 
               
                
                <ActivityIndicator  size={30} style={{ color: '#FFF', alignSelf: 'center' }} /> : 


                      <FontAwesome5  name='microphone' size={25} style={{ color: '#FFF', alignSelf: 'center' }} />

                
                }
              </TouchableOpacity>

              <TextInput editable
                multiline
                value={text}
                onChangeText={(text) => setText(text)}
                style={{ width: "60%", textAlign: "right", backgroundColor: "#EDEDED", alignSelf: "center", height: '100%' }}
                placeholder="البحث......" />
              <View  style={{ backgroundColor: "#EDEDED", height: '100%', width: '20%', borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent:'center'}} >
                <FontAwesome5 onPress={() => {
                 
                  if(text==""){
                    ToastAndroid.show("يرجى تقديم شيء للبحث",200)
                    return;

                  }
                  let result = search(text)

                  if(result){
                    console.log({LearningState : LearningState , found : result})
                    
                    navigation.navigate(LearningState ? result.LearningName : result.EmergencyName)
                  }else{
                    ToastAndroid.show("لا توجد مثل هذه الحالة",200)

                  }
                }} name='search' size={25} style={{ color: 'gray', alignSelf: 'center' }} />
              </View>
            </View>


            <View ref={this.callref} style={{ flexDirection: "column", marginTop: 20 }}>
              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate( LearningState ? "Faintinglearn" : "Faint2")} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الاغماء.png")} style={{ height:80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>   الاغماء</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate( LearningState ? "HeartAttakLearn" : "HeartAttackQuestion")} style={{ width: "45%", height: 130, backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الازمة.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الازمه القلبيه     </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate( LearningState ? "PoisonLearning" : "Poison_Question")} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/التسمم.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>التسمم    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate( LearningState ? "BlockLearning" : "BlockQuestion")}} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الانسداد.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 10 }}>انسداد مجرى التنفس  </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={() => LearningState ? navigation.navigate( "Burnlearn" ) :  BurnsHandler()} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الحروق.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الحروق   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate( LearningState ? "FractionsLearn" : "FractionQuestion")} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الكسور.png")} style={{ height: "66%", width: "51%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الكسور    </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row" , paddingBottom:25 , marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {navigation.navigate(  LearningState ? "BitesLearning" : "BitesQuestion")}} style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/العضات.png")} style={{ height: "69%", width: "53%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>العضات   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate(  LearningState ? "StingsLearning" : "StingQuestion")}}  style={{ height: 130, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/اللدغات.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}> اللدغات    </Text>
                </TouchableOpacity>

              </View>

            </View>
      
          </View>

          <View  style={{ position: 'absolute', bottom: 2, left: 15, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome5 onPress={() => Linking.openURL(PhoneNumbers.Emergency)}  name='phone-alt' size={25} style={{ color: '#fff', }} />

          </View>

              {isLoading ? <Recorder StopRecording={stopRecording} /> : null}

          </View>


        

      </>
    )
  }