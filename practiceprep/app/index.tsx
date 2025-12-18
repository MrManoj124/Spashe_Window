import { Text, View } from "react-native";
import Lottie from "lottie-react-native";
import {useEffect, useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function SplashScreen()
{
  const [step, setSetp] = useState(0);
  const screens = [
    {
      animation:require(),
      title:"Lottie based files",
      subtitle:"This is the first screen of the app"
    },
    {
      animation:reqiuire(),
      title:"lottie based files",
      subtitle:"This is the second screen of the app"
    },
    {
      animation:require(),
      title:"llm cons",
      subtitle:"This is the third screen of the app"
    ,
  ];

  const gotoHome = () =>router.replace("/Home");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(step < screens.length - 1 ) setSetp(step + 1);
      else.gotoHome();
    },3000);
    return ()=>clearTimeout(timer);
  },[step]);

  
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
