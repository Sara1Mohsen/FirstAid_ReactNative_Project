///////////////////الاغماء تعليمي/////////////////////////////////////
import * as React from 'react'
//import ImagePicker from 'react-native-image-crop-picker'
import { Text, StyleSheet, View, Image, ScrollView, ImageBackground, StatusBar, TextInput, TouchableOpacity, Dimensions,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PhoneNumbers from '../Navigation/PhoneNumbers'
const { width, height } = Dimensions.get('window')
export default class Faintinglearn extends React.Component {

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
            paddingBottom:"5%"
          
          }}>
            <ScrollView>


              <Text style={styles.titel}> قم اولا بفحص درجه الوعي:</Text>
              <Text style={styles.text}> اذا  كان المريض يقظ ولكن يشعر بالدوران:</Text>
              <Text style={styles.text}>.و يستجيب للكلام </Text>
              <Text style={styles.text}>.و يستجيب للوخز </Text>
              <Text style={styles.titel}> قم بسؤال  المريض اذا كان يعاني من السكر والضغط:-</Text>
              <Text style={styles.titel}> اذا كان المريض يعاني من الضغط فقط او لايعاني  من الضغط او السكر :-</Text>
              <Text style={styles.text}>.لا تغسل راسه بالماء او اى سائل اخر</Text>
              <Text style={styles.text}>.ساعد المصاب علي الاستلقاء</Text>
              <Text style={styles.text}>.تاكد من جودة التهويه </Text>
              <Text style={styles.text}>.ارفع ساقيه الي 30 سم اعلي عضله القلب </Text>
              <Text style={styles.text}>.قم بفك الملابس الضيقه</Text>
              <Text style={styles.text}>.قم باعطائه شى مالح او سوائل</Text>
              <Text style={styles.text}>.راقب  المصاب اذا فقد الوعي  يجب استدعاء  الاسعاف </Text>
              <Text style={styles.titel}> اذاكان المريض يعاني من السكر فقط او السكر  والضغط معا :-</Text>
              <Text style={styles.text}>.ساعد المصاب على الاستلقاء</Text>
              <Text style={styles.text}>.تاكد من جودة التهويه </Text>
              <Text style={styles.text}>.اذا لم يتم اخذ جرعة الأنسولين يجب القيام باخذه</Text>
              <Text style={styles.text}>.لو تم أخذه قم باعطاء أي شئ به سكر</Text>
              <Text style={styles.text}>.قم بقياس السكر  اذا كان فى ارتفاع او انخفاض  يجب  مراجعة الطبيب المعالج</Text>

              <Text style={styles.titel}> في حاله عدم استجابه المريض للكلام او للوخز</Text>
              <Text style={styles.titel}>  في حالات الاغماء يختلف التعامل مع المريض حسب العمر  </Text>
              <Text style={styles.titel}> طريقه فحص العلامات الحيوية للكبار :-</Text>
              <Text style={styles.text}>.فحص النبض من الشريان السباتي</Text>
              <Image source={require("../images/image3.png")} style={{ height: 130, width: 230,  resizeMode:"contain" , alignSelf: "center" , opacity: .8}} />
              <Text onPress={() => {Linking.openURL("https://www.youtube.com/watch?v=EBZONfy43do")}} style={{ marginTop: '15%', fontSize: 12, marginRight: 20, color: '#159da9' }}>https://www.youtube.com/watch?v=EBZONfy43do </Text>
              <Text style={styles.text}>.فحص مجرى الهواء</Text>
              <Text style={styles.text}>.فحص مجرى التنفس</Text>
              <Image source={require("../images/image2.png")} style={{ height: 130, width: 230,resizeMode:"contain" , resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />

              <Text style={styles.titel}> طريقه فحص العلامات الحيوية للاطفال </Text>
              <Text style={styles.text}>.فحص النبض من الشريان العضدي</Text>
               <Image source={require("../images/image4.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} /> 
              <Text style={styles.text}>.فحص مجرى الهواء</Text>
              <Text style={styles.text}>.فحص مجرى التنفس</Text>
               <Image source={require("../images/image5.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} /> 
              <Text onPress={() => {Linking.openURL("https://www.youtube.com/watch?v=IDMQZ4Ap9xo")}} style={{ marginTop: '15%', fontSize: 12, marginRight: 20, color: '#159da9' }}>https://www.youtube.com/watch?v=IDMQZ4Ap9xo</Text>

              <Text style={styles.titel}> في حاله وجود نبض للمريض البالغ  </Text>
              <Text style={styles.text}>.عدم اعطائه اى سوائل </Text>
              <Text style={styles.text}>.قم بطلب الاسعاف</Text>
              <Text style={styles.text}>.ضعه فى وضع الافاقة</Text>
               <Image source={require("../images/img.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} /> 
              <Text style={styles.text}>.قم باعطائه اى شىء به سكر وضع اصبعك فوق لسانه لتجنب البلع</Text>

              <Text style={styles.titel}> في حاله وجود نبض للطفل  </Text>
              <Text style={styles.text}>.قم باعطاء الطفل اى شىء به سكر وتجنب  ان يقوم ببلعه </Text>
              <Text style={styles.text}>.قم باعطائه نفس الشىء مرة اخرى  بعد دقيقتين</Text>

              <Text style={styles.titel}> في حاله استمرار النبض مع التنفس للطفل  </Text>
              <Text style={styles.text}>.قم باعطائه  المزيد من السكر او السوائل </Text>
              <Text style={styles.text}>.راجع طبيبك المعالج </Text>

              <Text style={styles.titel}>في انقطاع التنفس للطفل   </Text>
              <Text style={styles.text}>.قم بوضع كحول عند الانف </Text>
              <Text style={styles.text}>.اذا تم افاقته راقبه وقم بمراجعه الطبيب</Text>

              <Text style={styles.titel}>في حاله عدم وجود نبض للطفل او البالغ يتبع اجراءات انعاش القلب الرئوي    </Text>
              <Text style={styles.titel}> كيفية عمل انعاش القلب الرئوى للبالغين:-</Text>
              <Text style={styles.text}>. قم بوضع كف يدك بالتشابك  مع يدك  الاخري في منتصف صدر المريض قم بعمل 30 ضغطه كما هو موضح</Text>
              <Image source={require("../images/msg950968557-4267.jpg")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.قم بالتنفس الصناعي للمريض مرتين في مده لا تتجاوز 10ثواني بعد كل 30 ضغطه</Text>
              <Image source={require("../images/image14.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.لا تتوقف  حتي يستجيب المريض  </Text>
              <Text style={styles.text}>.او حتي وصول المسعفين  </Text>
              <Text onPress={() => {Linking.openURL("https://www.youtube.com/watch?v=BvdwbjPQqpk")}} style={{ marginTop: '15%', fontSize: 12, marginRight: 20, color: '#159da9' }}>https://www.youtube.com/watch?v=BvdwbjPQqpk</Text>

              <Text style={styles.titel}>كيفية عمل انعاش القلب الرئوى للاطفال  </Text>
              <Text style={styles.text}>.قم باستخدام يديك الاقوي ثم قم بالضغط في منتصف صدر الطفل 30 ضغطه  </Text>
              <Image source={require("../images/image8.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.م بالتنفس الصناعي للطفل مرتين في مده لاتتجاوز 10ثواني بعدكل 30 ضغطه  </Text>
              <Image source={require("../images/image14.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.لا تتوقف  حتي يستجيب المريض  </Text>
              <Text style={styles.text}>.او حتي وصول المسعفين  </Text>


              <Text style={styles.titel}>كيفية عمل انعاش القلب الرئوى للرضع   </Text>
              <Text style={styles.text}>.قم باستخدام اصبعي الابهام ثم قم بالضغط في منتصف الصدر  الرضيع 30 ضغطه بشكل سريع </Text>
              <Image source={require("../images/image11.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.قم بالتنفس الصناعي للرضيع مرتين في مده لاتتجاوز 10ثواني بعدكل 15 ضغطه </Text>
              <Text style={styles.text}>.يتم التنفس الصناعي للرضيع من خلال الانف والفم ليس الفم فقط </Text>
              <Image source={require("../images/image12.png")} style={{ height: 130, width: 230,resizeMode:"contain" , alignSelf: "center", opacity: .8 }} />
              <Text style={styles.text}>.لا تتوقف  حتي يستجيب المريض  </Text>
              <Text style={styles.text}>.او حتي وصول المسعفين  </Text>
              <Text onPress={() => {Linking.openURL("https://www.youtube.com/watch?v=zNdF6iaPdI8")}} style={{ marginTop: '15%', fontSize: 12, marginRight: 20, color: '#159da9' }}>https://www.youtube.com/watch?v=zNdF6iaPdI8 </Text>


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
    marginTop: '8%',
    marginBottom:'3%',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 1,
    color: '#159da9'
  },
  text: {
    marginTop: '5%',
    fontSize: 16,
    marginRight: 20,
    color: '#000'

  }

})