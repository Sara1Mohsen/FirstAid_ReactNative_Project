import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity,Dimensions , Linking } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RadioGroup from 'react-native-radio-buttons-group';
import SpeakerComponent from './../Navigation/SpeakerComponent';
import PhoneNumbers from '../Navigation/PhoneNumbers';
const { width, height } = Dimensions.get('window')
export default class Faint3 extends React.Component {

    constructor(props){
              super(props)
              this.callref = React.createRef()
                 this.state = {  
                            
                     radioButtons: [
                          {
                             id: '1', // acts as primary key, should be unique and non-empty string
                             label:'السكر' ,
                             PageName:"SugarAndPressure",
                             value: 'Arabic'
                          },
                          {
                            id: '2',
                            label: 'السكر والضغط',
                            PageName:"SugarAndPressure",
                            value: 'Arabic'
                          },
                          {
                            id: '3',
                            label: 'الضغط',
                            PageName:"PressureOrNot",
                            value: 'Arabic'
                          },
                          {
                            id: '4',
                            label: 'لا اعانى',
                            PageName:"PressureOrNot",
                            value: 'Arabic'
                          }



                                  ]
  }}
    onPressRadioButton = (radioButtonsArray) => {
      let target_index = radioButtonsArray.find(radio => radio.selected).PageName
      this.props.navigation.navigate(target_index)
     // this.setState({selected_item: radioButtonsArray});
       }

  render() {
    return (
      <>
            <Text style={{ display:"none"}} ref={this.callref}>{this.state.radioButtons.reduce( (acc , curr) => acc + curr.label,"") }</Text>

        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={{ width: "100%", height:50 , alignSelf: "center", marginTop: 20, paddingHorizontal: "2.5%", flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#39A9B3', height: '100%', width: '20%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent:'center'}} >
                <FontAwesome5 name='microphone' size={25} style={{ color: '#FFF', alignSelf: 'center' }} />
              </View>

              <TextInput editable
                multiline
                onChangeText={(text) => this.setState({ text })}
                style={{ width: "60%", textAlign: "right", backgroundColor: "#EDEDED", alignSelf: "center", height: '100%' }}
                placeholder="البحث......" />
              <View style={{ backgroundColor: "#EDEDED", height: '100%', width: '20%', borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent:'center'}} >
                <FontAwesome5 name='search' size={25} style={{ color: 'gray', alignSelf: 'center' }} />
              </View>
            </View>


            <View style={{ flexDirection: "column", marginTop: 10 }}>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الاغماء.png")} style={{ height: "75%", width: "60%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>   الاغماء</Text>
                </View>
                <View style={{ width: "45%", height: 120, backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الازمة.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الازمه القلبيه     </Text>
                </View>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/التسمم.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>التسمم    </Text>
                </View>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الانسداد.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 10 }}>انسداد مجرى التنفس  </Text>
                </View>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الحروق.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الحروق   </Text>
                </View>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الكسور.png")} style={{ height: "66%", width: "51%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الكسور    </Text>
                </View>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/العضات.png")} style={{ height: "69%", width: "53%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>العضات   </Text>
                </View>
                <View style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/اللدغات.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}> اللدغات    </Text>
                </View>

              </View>

            </View>
          
          </View>

          <View style={{ position: 'absolute', bottom: 70, left: 15, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL(PhoneNumbers.Emergency)}>
            <FontAwesome5 name='phone-alt' size={25} style={{ color: '#fff', }} />

            </TouchableOpacity>
          </View>

          <View style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            alignItems: 'center',
            justifyContent: 'center',
          }}>

            <View style={{
              width:"80%",
              paddingVertical: 20,
              backgroundColor: "#39A9B3",
              alignItems:'center',
              borderRadius:10
            }}>

            <SpeakerComponent Custom_ref={this.callref} styles={{ color: '#fff',alignSelf:"flex-start",paddingHorizontal:"5%" }} />
              <RadioGroup 
         
            radioButtons={this.state.radioButtons}
            onPress= {this.onPressRadioButton} 
           //onPress={() => this.props.navigation.navigate("SugarAndPressure")}
            layout='column'
             />
            </View>

          </View>
        </View>
      </>
    )
  }

}
