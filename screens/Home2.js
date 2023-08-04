import { View, Text, Image, TouchableOpacity , Linking } from 'react-native';
export default function Recorder({StopRecording}){

  return (
    <View style={{
      position: "absolute",
      width: "100%",
      height:"100%",
      zIndex:10,
      bottom:0,
      backgroundColor: "rgba(0,0,0,0.2)"
      ,justifyContent:"flex-end"
    }}>

      <TouchableOpacity onPress={StopRecording} style={{
        width:"100%",
        paddingVertical: 20,
        backgroundColor: "#39A9B3",
        alignItems:'center'
        ,borderRadius:10,
        height:"45%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      }}>
        <Text  style={{fontSize:20}}>يرجى ادخال اسم الحالة</Text>
        <Text  style={{fontSize:15}}> او اضغط للالغاء</Text>

        <Image  source={require("../images/rec.png")} style={{ height: 145, width:145,marginTop:"5%"}}/>

      </TouchableOpacity>

    </View>
  )
}