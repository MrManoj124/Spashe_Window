import { Text, View } from "react-native";
import Lottie from "lottie-react-native";
import {useEffect, useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function SplashScreen()
{
  const [step, setSetp] = useState(0);
  const screens = [
    {
      animation:require("D:\Projectss\ReactNative\SplashWindow\Spashe_Window\practiceprep\assets\images\canvas.json"),
      title:"Lottie based files",
      subtitle:"This is the first screen of the app"
    },
    {
      animation:require("D:\Projectss\ReactNative\SplashWindow\Spashe_Window\practiceprep\assets\images\lotie.json"),
      title:"lottie based files",
      subtitle:"This is the second screen of the app"
    },
    {
      animation:require("D:\Projectss\ReactNative\SplashWindow\Spashe_Window\practiceprep\assets\images\lottief.json"),
      title:"llm cons",
      subtitle:"This is the third screen of the app"
    ,
  ];

  const gotoHome=()=>router.replace("/Home");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(step<screens.length-1) setStep(step+1);
      else gotoHome();
    },3000);
        return()=>clearTimeout(timer) ;
  },[step]);

  const next=()=>step<screens.length-1 ? setStep(step+1) : gotoHome();
  const prev=()=>step>0 && setStep(step-1);

  return(
    <View style={styles.container}>

        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>

      <Lottie animationData={screens[step].animation}
               loop autoplay style={styles.animation} />
        <Text style={styles.title}>{screens[step].title} </Text>       
        <Text style={styles.subtitle}>{screens[step].subtitle} </Text>     

      <View style={styles.btnRow}>
        { step >0 ? (
                <TouchableOpacity style={styles.navBtn} onPress={prev}>
                  <Text style={styles.navTxt}> Previous </Text>
                </TouchableOpacity>
        ):(
          <View style={{ width:60}}  />
        )
      } ;
        {step === screens.length-1 ? (
            <TouchableOpacity style={styles.getBtn}>
              <Text style={styles.getTxt}> GetStarted </Text>
            </TouchableOpacity>
        ):(
          <TouchableOpacity style={styles.navBtn}>
          <Text style={styles.navTxt}> Next </Text>
        </TouchableOpacity>
        )}

      </View>


    </View>

  )
}


const styles=StyleSheet.create({
  container:{

  }
})