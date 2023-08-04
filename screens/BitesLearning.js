import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TouchableOpacity, Button, Dimensions , Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers'

const { width, height } = Dimensions.get('window')
export default class BiresLearning extends React.Component {

  constructor() {
    super()
    this.callref = React.createRef()
    this.state = {
      
    }
  }


  render() {
    return (
      <>
        <View ref={this.callref} style={{ backgroundColor: "#fff", flex: 1 }}>


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
             <Text style={styles.titel}>كيفية التعامل مع عضة الكلب</Text>
              <Image source={require("../images/dog.png")} style={{ height: 50, width:50}}/>
              <Text style={{color:"black",fontSize:16,marginRight:20}}>.التوجه الى المستشفى لتنظيف الجرح</Text>         
              <Text style={styles.text}>.أخذ المصل المضاد لعضة الكلب</Text>

              <Text style={styles.titel}>كيفية التعامل مع عضة القطة:-</Text>

              <Image source={require("../images/cat.png")} style={{ height: 50, width:50}}/>             
              <Text style={{color:"black",fontSize:16,marginRight:20}}>.ضع مكان الجرح أسفل الماء الجارى لمدة خمس دقائق</Text>            
              <Text style={styles.text}>.قم بتطهير الجرح بالبيتادين أو الكحول</Text> 
                         

            </ScrollView>
          </View>

      

          <View  style={{ position: 'absolute', bottom: 2, left: 10, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
          
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
    color: '#000'

  }

})