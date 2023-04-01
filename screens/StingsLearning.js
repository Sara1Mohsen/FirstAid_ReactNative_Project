import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window')
export default class StingsLearning extends React.Component {

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
            paddingHorizontal:"2%"
          
          }}>
            <ScrollView>
            <Text style={styles.titel}>كيفية التعامل مع لدغة الثعبان:-</Text>
               
              <Image source={require("../images/snake.png")} style={{ height: 50, width:50}}/>
              <Text style={{color:"black",fontSize:16,marginRight:20}}>.يمنع سحب السم بالفم</Text>         
              <Text style={styles.text}>.وضع مكان اللدغة أسفل الماء الجارى لمدة خمس دقائق</Text>
              <Text style={styles.text}>.ربط حبل أعلى موضع اللدغة ربطة خفيفة</Text>
              <Text style={styles.text}>.وضع الجزء المصاب لأسفل أقل من مستوى القلب</Text>
              <Text style={styles.text}>.الذهاب الى المستشفى لأخذ المصل</Text>
              <Text style={{fontSize:12,fontWeight:"bold",color:"#159da9",marginTop:"8%"}}>https://www.youtube.com/watch?v=EPX1eXbHNdc</Text>


               <Text style={styles.titel}>كيفية التعامل مع لدغة النحلة:-</Text>

               <Image source={require("../images/bean.png")} style={{ height: 50, width:50}}/>             
               <Text style={{color:"black",fontSize:16,marginRight:20}}>.ازالة الكيس مكان اللدغة ببطاقة</Text>            
               <Text style={styles.text}>.عمل كمادات ماء بارد لمدة ربع ساعه كل نصف ساعه لمده 24 ساعه</Text> 
              
        

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
    color: '#159da9'
  },
  text: {
     marginTop: '8%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  }

})