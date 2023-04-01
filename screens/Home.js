import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput,TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ""



    };
  }

  render() {
    return (
      <>
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
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الاغماء.png")} style={{ height:80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>   الاغماء</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "45%", height: 120, backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الازمة.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الازمه القلبيه     </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/التسمم.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>التسمم    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الانسداد.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 10 }}>انسداد مجرى التنفس  </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الحروق.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الحروق   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/الكسور.png")} style={{ height: "66%", width: "51%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>الكسور    </Text>
                </TouchableOpacity>

              </View>

              <View style={{ width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/العضات.png")} style={{ height: "69%", width: "53%", borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}>العضات   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 120, width: "45%", backgroundColor: "#fff", borderWidth: .5, justifyContent: "center", alignItems: "center" }}>
                  <Image source={require("../images/اللدغات.png")} style={{ height: 80, width: 80, borderRadius: 50 }}></Image>
                  <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold", marginRight: 20 }}> اللدغات    </Text>
                </TouchableOpacity>

              </View>

            </View>
            <View style={{ backgroundColor: '#39A9B3', height: 68, width: '100%', marginTop: "14%", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <Ionicons name='settings' size={32} style={{ color: '#fff' }} />
              <FontAwesome5 name='book-open' size={32} style={{ color: '#fff' }} />
              <FontAwesome5 name='briefcase-medical' size={32} style={{ color: '#fff' }} />
            </View>
          </View>

          <View style={{ position: 'absolute', bottom: 70, left: 15, backgroundColor: "#f00", width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome5 name='phone-alt' size={25} style={{ color: '#fff', }} />

          </View>

         

          </View>


        

      </>
    )
  }}