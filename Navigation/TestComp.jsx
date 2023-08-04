import React, {useEffect, useState} from 'react';
import * as Speech from 'expo-speech'

import Tts from 'react-native-tts';

import Config from '../configs/VoiceConfig'

//Tts.setDefaultLanguage('ar');
import * as Location from 'expo-location';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator } from 'react-native';
import Voice from '@react-native-community/voice';
const App = () => {
  const [result, setResult] = useState('لا يستجيب  يستجيب للوخز');
  const [isLoading, setLoading] = useState(false);
  const [speed, setSpeed] = useState(1);
  const speechStartHandler = e => {
    console.log('speechStart successful', e);
  };
  const speechEndHandler = e => {
    setLoading(false);
    console.log('stop handler', e);
  };
  const speechResultsHandler = e => {
    const text = e.value[0];
    setResult(text);
  };
  const startRecording = async () => {
    setLoading(true);
    try {
      await Voice.start('ar-SA');
    } catch (error) {
      console.log('error', error);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  const clear = () => {
    setResult('');
  };
  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headingText}>Text to Speech Test</Text>
        <View style={styles.textInputStyle}>
          <TextInput
            value={result}
            multiline={true}
            placeholder= "say something!"
            style={{
              flex: 1,
              height: '50%',
            }}
            onChangeText={text => setResult(text)}
          />

          
        </View>

        <TextInput style={ {height:20}} placeholder="Enter Speeed" onChangeText={speed => setSpeed(speed)}  />
        <View style={styles.btnContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <View >
                    <TouchableOpacity onPress={ async () => {
               //       await Tts.setDefaultRate(1)
                    //  await Tts.setDefaultVoice("ar-language")
                      // console.log(result)
                          Tts.speak(result)
                    }} style={[styles.speak , {backgroundColor:"purple"}]}>
                      <Text style={{color: 'white', marginVertical:5 ,fontWeight: 'bold'}}>Choice #1</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={ async () => {
                    //  Tts.setDefaultRate(1)
                      await Tts.setDefaultVoice("ar-xa-x-are-network")
                      // console.log(result)
                          Tts.speak(result)
                    }} style={[styles.speak , {backgroundColor:"purple" , marginTop:5}]}>
                      <Text style={{color: 'white', marginVertical:5 ,fontWeight: 'bold'}}>Choice #1.5</Text>
                          </TouchableOpacity>
              
          
            </View>
    
          )}
          <TouchableOpacity style={[styles.stop , {height:50}]} onPress={() => {
            var text = result
            // Config.BannedWords.forEach(word => text = text.replace(word , ""))

            console.log(speed)
             Speech.speak(text, {
            //  language : "ar-SA",
              rate:Config.speed,
              voice:Config.choices[1],
              pitch : Config.pitch
           })
          }}>
            <Text  style={{color: 'white', fontWeight: 'bold'}}>Custom</Text>
          </TouchableOpacity> 


          <View>
          <TouchableOpacity onPress={ () => {
                         Speech.speak(result , {
                            language : "ar-SA",
                            rate: Number(speed),
                            voice:"ar-xa-x-arc-network",
                            pitch : 1
                         })
                    }} style={[styles.speak , {marginTop:5}]}>
              <Text style={{color: 'white', marginVertical:2, fontWeight: 'bold'}}>Choice #2</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => {
                          Speech.speak(result , {
                            language : "ar-SA",
                            rate:1.1,
                            voice:"ar-xa-x-arc-network",
                            pitch : 1
                         })
                    }} style={[styles.speak , {marginVertical:5}]}>
              <Text style={{color: 'white', marginVertical:5, fontWeight: 'bold'}}>Choice #3</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => {
                          Speech.speak(result , {
                            language : "ar-SA",
                            rate:1.4,
                            voice:"ar-xa-x-arc-network",
                            pitch : 1
                         })
                    }} style={styles.speak}>
              <Text style={{color: 'white', marginVertical:5, fontWeight: 'bold'}}>Choice #4</Text>
              </TouchableOpacity>
              
          </View>
        </View>
        {/* <TouchableOpacity style={styles.clear} onPress={clear}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Clear</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
    color: '#000',
  },
  speak: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  stop: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  clear: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    with: '50%',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
});
export default App;