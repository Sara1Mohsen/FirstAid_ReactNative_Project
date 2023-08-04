import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions , Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Video } from 'expo-av';
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default function BlockBreatheNo ({navigation}){

 
  const video = React.useRef(null);
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

          <View style={{
            position: "absolute",
            width: "100%",
            height: height - 68,
            paddingHorizontal:'2%'
          
          }}>
         

            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
              <Text style={styles.titel}>الاجراءات-</Text>
              <FontAwesome5 name='volume-up'
                size={30} style={{ color: '#159da9', marginTop: 35, marginLeft: 20 }} />
            </View>

            <Text style={styles.text}>.قف خلف المصاب ثم قم بلف يديك حول خصره</Text>
                 <Text style={styles.text}>.ضع قبضة يدك اليسرى فى منتصف البطن عند السرة ثم ضع يدك اليمنى فوق يدك اليسرى</Text>
                 <Text style={styles.text}>.قم بالضغط للداخل ولأعلى بشدة حتى يخرج الجسم الغريب</Text>

                 {/* <VideoPlayer video={require("../videos/adult_block.mp4")}  
                 showDuration={true}
                 autoplay
              // disableControlsAutoHide={true}
                 defaultMuted={true}
                 disableSeek={true}
                 pauseOnPress={true}
                  style={{marginTop:"8%"}}/> */}

                <Video
                  ref={video}
                  style={{marginTop:"0%" , position:"relative" , top:"10%" , height:"30%" , width:"100%"}}
                  source={
                    require("../videos/adult_block.mp4")
                  }
                  useNativeControls
                  isLooping
                  resizeMode="contain"
                  onPlaybackStatusUpdate={status => setStatus(() => status)}

                />
            
            
          </View>

          

          <View style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <Icon name='phone-alt' size={25} style={{ color: '#fff', }} />

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