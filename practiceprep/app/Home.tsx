import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome To Practice React_Native</Text>
            <Text style={styles.subtitle}>Open for More Details</Text>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"rgba(179, 134, 179, 0.47)",
            alignItems:'Center',
            justifyContent:'center',
            paddingHorizontal:25,
        },
        title:{
            fontSize:36,
            fontWeight:"800",
            marginTop:20,
            color:"#111",
            letterSpacing:0.5,
        },
        subtitle:{
            fontSize:17,
            color:"#6a6a6a",
            textAlign:'center',
            paddingHorizontal:25,
            marginTop:10,
            lineHeight:22,
        }
    }
)