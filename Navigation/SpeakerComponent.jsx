
import * as Speech from 'expo-speech'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import  innerText  from 'react-innertext';
import Tts from 'react-native-tts';
// Tts.setDefaultLanguage('ar-sa');
import Config from '../configs/VoiceConfig' 

export default function SpeakerComponent({Custom_ref , styles}){
   const speaker_func = async () => {
   // Tts.speak('Hello, world!');

        // Speech.speak("" , {
        //   voice:"en-gb-x-gbc-network"
        // })
        if( await Speech.isSpeakingAsync()){
          await Speech.stop()
          return
        }

        console.log()
        var text = innerText(Custom_ref.current._internalFiberInstanceHandleDEV.memoizedProps.children)
        .split(" ").
        filter(el => !el.match("www")).
        join(" ")
        
        Config.BannedWords.forEach(word => text = text.replace(word , ""))


        
        Speech.speak( text , {
          language:"ar-SA",
          rate:Config.speed,
          pitch:Config.pitch,
          voice:Config.choices[1]

        })
      }
    return (
        <FontAwesome5 onPress={speaker_func} name='volume-up'
        size={30} style={styles ? styles : { color: '#159da9', marginTop: 35, marginLeft: 20 }} />
    )
 
}