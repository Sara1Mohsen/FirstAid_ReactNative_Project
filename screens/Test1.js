import * as React from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'

export default class Test1 extends React.Component {

    constructor(props){
        super(props)
            this.state={

            }
        }
    
  render() {
    return (
      <>
      <View style={{flex:1,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontWeight:"bold",fontSize:50,color:"black",marginBottom:50}}>Test1</Text>
        <TouchableOpacity style={{height:50,width:200,alignItems:"center",borderRadius:15,backgroundColor:"red",justifyContent:"center",marginBottom:50}}>
            <Text>GO To Test2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:200,alignItems:"center",borderRadius:15,backgroundColor:"red",justifyContent:"center"}}>
            <Text>GO back</Text>
        </TouchableOpacity>
      </View>

      </>)}}