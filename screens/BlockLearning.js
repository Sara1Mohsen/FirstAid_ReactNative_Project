import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class BlockLearning extends React.Component {

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
            paddingHorizontal:"2%",
            paddingBottom:"5%"
          
          }}>
            <ScrollView>

            <Text style={styles.titel}>كيفية انقاذ الشخص البالغ الذى يتنفس:-</Text>
          
              <Text style={styles.text}>.لا تعطى المصاب ماء حتى خروج الجسم الغريب</Text>
              <Text style={styles.text}>.لا تقم بالضرب على ظهر المصاب أثناء وقوفه</Text>
              <Text style={styles.text}>.فى حالة قدرة المصاب على التنفس مع الكحه اجعله</Text>
              <Text style={{fontSize:16,color:"black"}}>      يستمر فى الكح حتى خروج الجسم الغريب</Text>
           
           <Text style={styles.titel}>كيفية انقاذ الشخص البالغ الذى لا يستطيع</Text>
           <Text style={{ textDecorationLine: 'underline',fontWeight: 'bold',fontSize: 20,color: '#159da9',marginRight:1}}>أن يتنفس:-</Text>
               <Text style={styles.text}>.قف خلف المصاب ثم قم بلف يديك حول خصره</Text>
               <Text style={styles.text}>.ضع قبضة يدك اليسرى فى منتصف البطن عند السرة </Text>
                <Text style={{color:"black",fontSize:16}}>       ثم ضع يدك اليمنى فوق يدك اليسرى</Text>
               <Image source={require("../images/image8.png")} style={{ height: 100, width: 160,alignSelf:"center",marginTop:"5%",opacity:.8}}/>
                <Text style={styles.text}>.قم بالضغط للداخل ولأعلى بشدة حتى يخرج الجسم </Text>
                <Text style={{color:"black",fontSize:16}}>      الغريب</Text>         
                <Image source={require("../images/image9.png")} style={{ height: 100, width:160,alignSelf:"center",marginTop:"5%",opacity:.8}}/>
                <Text onPress={() => {Linking.openURL("https://youtu.be/81BXd2Gi6kg")}} style={{fontSize:12,fontWeight:"bold",color:"#159da9",marginTop:"8%"}}>https://youtu.be/81BXd2Gi6kg</Text>


            <Text style={styles.titel}>كيفية انقاذ الأطفال</Text>
              <Image source={require("../images/image10.png")} style={{ height: 140, width:200,alignSelf:"center",marginTop:"20%",opacity:.8}}/>
              <Text style={styles.text}>.يتم وضع الطفل على يدك اليسرى ورأسه مائلة الى الأسفل</Text>
              <Text style={{color:"black",fontSize:16}}>       وقم بوضع اصابعك على خد الرضيع حتى لا يسقط</Text>
              <Text style={[styles.text , {marginBottom:20}]}>.قم بالخبط على ظهره حتى خروج الجسم الغريب</Text>
              <Text onPress={() => {Linking.openURL("https://youtu.be/2QWIhLvHzp")}} style={{fontSize:12,fontWeight:"bold",color:"#159da9",marginBottom:"20%" , 
              transform:[{translateX:70} , {translateY:5}]
              ,marginTop:"2%"}}>https://youtu.be/2QWIhLvHzpE</Text>

            </ScrollView>
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
    color: '#000',


  }

})