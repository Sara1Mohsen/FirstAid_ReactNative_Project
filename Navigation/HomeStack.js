import Home from '../screens/Home';
import Faint1 from '../screens/Faint1';
import Signin from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ChildBreathYes from '../screens/ChildBreathYes';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Faint2 from '../screens/Faint2';
import Faint3 from '../screens/Faint3';
import SugarAndPressure from '../screens/SugarAndPressure';
import BitesQuestion from '../screens/BitesQuestion'
import DogBite from '../screens/Dog'
import CatBite from '../screens/Cat'

import StingQuestion from '../screens/StingsQuestion'
import BeeSting from '../screens/BeeSting'
import SnakeSting from '../screens/SnakeSting'

import BlockQuestion from '../screens/BlockQuestion'
import CprQuestion from '../screens/CprQuestion'
import BreathYes from '../screens/BlockBreatheYes'
import CprChild from '../screens/CprChild'
import BreathNo from '../screens/BlockBreatheNo'
import Home2 from '../screens/Home2'

import BlockChild from '../screens/BlockChild'
import BlockAdult from '../screens/BlockAdult'

import FractionQuestion from '../screens/FractionQuestion'
import FingerFraction from '../screens/Finger'
import Foot from '../screens/Foot'
import Vertebral from '../screens/Vertebral';
// import Breath from '../screens/BlockQuestion'
// import BlockQuestion from '../screens/BlockQuestion'
//  import PoisoningYes from '../screens/PoisoningYes';
// import Test1 from '../screens/Test1';
import PoisonQuestion from '../screens/PoisonQuestion';
import GazPoisonYes from '../screens/GazPoisonYes';
import GazPoisonNo from '../screens/GazPoisonNo';
import FoodPoisonNo from '../screens/FoodPoisonNo';
import FoodPoisonYes from '../screens/FoodPoisonYes';
import WheatPoison from '../screens/WheatPoison';
import PressureOrNot from '../screens/PressureOrNot';
import HeartAttackQuestion from '../screens/HeartAttackQuestion';
import Order1HeartAttack from '../screens/Order1HeartAttack';
import Order2HeartAttack from '../screens/Order2HeartAttack';
import Burn1 from '../screens/Burn1';
import Burn2 from '../screens/Burn2';
import Burn3 from '../screens/Burn3';
import HeartAttakLearn from '../screens/HeartAttakLearn';
import PoisonLearning from '../screens/PoisonLearning';
import StingsLearning from '../screens/StingsLearning';
import BitesLearning from '../screens/BitesLearning';
import Burnlearn from '../screens/Burnlearn';
import Faintinglearn from '../screens/Faintinglearn';
import BlockLearning from '../screens/BlockLearning';
import FractionsLearn from '../screens/FractionsLearn';
import { useNavigation } from '@react-navigation/native';
import Settings from '../screens/Setting'
import AdultCheck from './../screens/AdultCheck';
import ChildVitalSigns from './../screens/ChildVitalSigns';
import ChildPulseYes from './../screens/ChildPulseYes';
import CprAdult from './../screens/CprAdult';
import CprBaby from './../screens/CprBaby';
import ChildBreatheNo from './../screens/ChildBreatheNo';
import PulseYes from './../screens/PulseYes';
import Test from '../Navigation/TestComp.jsx'
import { StyleSheet, Text , Linking } from 'react-native';



export default function Home_Stack({LearningState }) {

    const Stack = createNativeStackNavigator();
    // const [LearningState , SetLearningState] = useState(false)
    //const navigation = useNavigation();
    options={ headerTitleAlign:"center"  , headerTitleStyle:styles.text}
    return (
  
      <>
   
  
    
      <Stack.Navigator initialRouteName='Home'>
           {/* <Stack.Screen  options={{...options , title:""}} name='test' component={Test} />    */}
        <Stack.Screen  options={{headerShown:false}} name='Home'  >
        {(props) => <Home {...props} LearningState={LearningState} />}
        </Stack.Screen>
      
      
        
        
        <Stack.Screen  options={{...options , title:""}} name='Home2' component={Home2} />
 
  
        {/* Registration*/}
    
        <Stack.Screen  options={{...options , title:"التسجيل" , headerTitle:""}} name='Sign Up' component={SignUp} />
          
  
          {/* Bites */}
        <Stack.Screen  options={{...options , title:"نوع العضة"}} name='BitesQuestion' component={BitesQuestion} />
        <Stack.Screen  options={{...options , title:"عضة كلب"}} name='DogBite' component={DogBite} />
        <Stack.Screen  options={{...options , title:"عضة قطة"}} name='CatBite' component={CatBite} />
        <Stack.Screen  options={{...options , title:"العضات"}} name='BitesLearning' component={BitesLearning} />
  
        {/* Stings   */}
        <Stack.Screen  options={{...options , title:"نوى اللدغة"}} name='StingQuestion' component={StingQuestion} />
        <Stack.Screen  options={{...options , title:"لدغة ثعبان"}} name='SnakeSting' component={SnakeSting} />
        <Stack.Screen  options={{...options , title:"لدغة دبور"}} name='BeeSting' component={BeeSting} />
        <Stack.Screen  options={{...options , title:"اللدغات"}} name='StingsLearning' component={StingsLearning} />
  
        {/* Breathing   */}
        <Stack.Screen  options={{...options , title:"انسداد مجرى التنفس"}} name='BlockQuestion' component={BlockQuestion} />
      
        <Stack.Screen  options={{...options , title:"انسداد مجرى التنفس"}} name='BreathYes' component={BreathYes} />  
        <Stack.Screen  options={{...options , title:"انسداد مجرى التنفس" }} name='BreathNo' component={BreathNo} />  
        <Stack.Screen  options={{...options , title:"الطفل"}} name='BlockChild' component={BlockChild} />  
        <Stack.Screen  options={{...options , title:"البالغ"}} name='BlockAdult' component={BlockAdult} />  
        <Stack.Screen  options={{...options , title:"انسداد مجرى التنفس"}} name='BlockLearning' component={BlockLearning} />  
  
  
        {/* Fractions   */}
        <Stack.Screen  options={{...options , title:"نوع الكسر"}} name='FractionQuestion' component={FractionQuestion} />
        <Stack.Screen  options={{...options , title:"القدم"}} name='Foot' component={Foot} />
        <Stack.Screen  options={{...options , title:"الظهر"}} name='Vertebral' component={Vertebral}/>
        <Stack.Screen  options={{...options , title:"اليد"}} name='FingerFraction' component={FingerFraction}/>
        <Stack.Screen  options={{...options , title:"الكسور"}} name='FractionsLearn' component={FractionsLearn}/>
  
          
  
        {/* Faints */}
          <Stack.Screen  options={{...options , title:"حالة المريض"}} name='Faint' component={Faint1} />
          <Stack.Screen  options={ {...options,title:"حالة المريض"}} name='Faint2' component={Faint2} />
          <Stack.Screen  options={{...options , title:"حالة المريض"}} name='Faint3' component={Faint3} />
          <Stack.Screen  options={{...options , title:"السكر و الضغط"}} name='SugarAndPressure' component={SugarAndPressure} />
          <Stack.Screen  options={{...options , title:"لا يعانى من السكر و الضغط"}} name='PressureOrNot' component={PressureOrNot} />
          <Stack.Screen  options={{...options , title:"البالغ"}} name='AdultCheck' component={AdultCheck} />
          <Stack.Screen  options={{...options , title:"العلامات الحيوية الخاصة بالطفل"}} name='ChildVitalSigns' component={ChildVitalSigns} />
          <Stack.Screen  options={{...options , title:"تنفس الطفل"}} name='Chbreath' component={ChildBreathYes} />


          <Stack.Screen  options={{...options , title:"يوجد نبض"}} name='PulseYes' component={PulseYes} />

          <Stack.Screen  options={{...options , title:"يوجد نبض"}} name='ChildPulseYes' component={ChildPulseYes} />

          <Stack.Screen  options={{...options , title:"C.P.R"}} name='CprQuestion' component={CprQuestion} />
          <Stack.Screen  options={{...options , title:" للاطفال C.P.R"}} name='CprChild' component={CprChild} />

 
         <Stack.Screen  options={{...options , title:"لا يوجد نفس"}} name='ChildBreatheNo' component={ChildBreatheNo} /> 

          <Stack.Screen  options={{...options , title:"  للبالغين C.P.R"}} name='CprAdult' component={CprAdult} />

          <Stack.Screen  options={{...options , title:" للرضيع C.P.R"}} name='CprBaby' component={CprBaby} />
          <Stack.Screen  options={{...options , title:"الاغماء"}} name='Faintinglearn'  component={Faintinglearn} />
          
        {/* Posioning */}
  
        <Stack.Screen  options={{...options , title:"نوع التسمم"}} name='Poison_Question'  component={PoisonQuestion} />
        <Stack.Screen  options={{...options , title:"تسمم غاز"}} name='GazPoisonYes' component={GazPoisonYes} />
        <Stack.Screen  options={{...options , title:"نوع التسمم"}} name='GazPoisonNo' component={GazPoisonNo}/>
        <Stack.Screen  options={{...options , title:"تسمم الطعام"}} name='FoodPoisonYes' component={FoodPoisonYes} />
        <Stack.Screen  options={{...options , title:"نوع التسمم"}} name='FoodPoisonNo' component={FoodPoisonNo}/>
        <Stack.Screen  options={{...options , title:"تسمم غلة القمح"}} name='WheatPoison' component={WheatPoison}/>
  
        <Stack.Screen  options={{...options , title:"التسمم"}} name='PoisonLearning' component={PoisonLearning}/>
  
  
        {/* Heart Attack */}
        <Stack.Screen  options={{...options , title:"ازمة قلبية"}} name='HeartAttackQuestion'  component={HeartAttackQuestion} />
        <Stack.Screen  options={{...options , title:"ازمة قلبية" }} name='Order1HeartAttack'  component={Order1HeartAttack} />
        <Stack.Screen  options={{...options , title:"ازمة قلبية"}} name='Order2HeartAttack'  component={Order2HeartAttack} />
        <Stack.Screen  options={{...options , title:"ازمة قلبية"}} name='HeartAttakLearn'  component={HeartAttakLearn} />
  
        {/* Burns */}
  
        <Stack.Screen  options={{...options , title:"درجة اولى"}} name='Burn1'  component={Burn1} />
        <Stack.Screen  options={{...options , title:"درجة تانية"}} name='Burn2'  component={Burn2} />
        <Stack.Screen  options={{...options , title:"درجة الثالثة"}} name='Burn3'  component={Burn3} />
        <Stack.Screen  options={{...options , title:"الحروق"}} name='Burnlearn'  component={Burnlearn} />
  
  
        </Stack.Navigator>

  
  
   
     
     
     
  
        
  
     </>
      // <View style={styles.container}>
      //   <Text>Open up App.js to startsd working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
    );
  }

  const styles = StyleSheet.create({
    
    text: {
      marginTop: '80%',
      fontSize: 26,
      fontWeight:"bold",
      backgroundColor:"white",
      width:"100%",
      marginRight: "100%",
      color: '#000',
      position:"absolute",
      right:"100%",
      left:50
  
    },
  })