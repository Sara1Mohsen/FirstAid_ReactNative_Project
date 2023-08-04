import * as React from 'react';
import axios from 'axios';
import base_Url from '../my_axios'
import * as Location from 'expo-location'
const MedicalContext = React.createContext({})
export function  GetContext ()  { return React.useContext(MedicalContext)}
export default function Context({children}){
   // console.log(props)

    const [userData,SetUser] = React.useState({})
  
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
      
        //  setLocation([location.coords.latitude,   location.coords.longitude])
         // setIsLoading(false)
          return [location.coords.latitude,   location.coords.longitude]
        } catch (error) {
          console.log(error)
        }
     
       
      }
    async function sendata(Test_data){
        //  const location = await GetLocation()
          // showLocation({
          //   latitude: location[0],
          //   longitude: location[1],
        
          //  directionsMode: 'car', // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
          // });
          const location = await GetLocation()
       
          Test_data.location = {
            latitude: location[0],
            longitude: location[1]
          }
        
                console.log(Test_data)
                try {
                  const response = await axios.post(base_Url+"/ev2" , Test_data)
                  console.log( response.data)
                  console.log("done")
        
        
                } catch (error) {
                  console.log( JSON.stringify(error))
                }
           
              }
           
    const login = async (email , password) => {
        console.log(email , password)
        try {
            const reponse = await axios.post(base_Url+"/auth/login" , {
                email: email,
                password: password
            })
            const resulst = reponse.data
            SetUser(resulst)
            return resulst
        } catch (error) {
            console.log(error)
        }
    
    }

    return(
        <MedicalContext.Provider value={{userData , login , sendata }}>
            {children}
        </MedicalContext.Provider>
    )
}
