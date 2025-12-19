import {Link, router} from "expo-router";   
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebaseconfig";
import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import {doc, setDoc} from "firebase/firestore";

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        if(!name || !email || !password){
            alert("Please fill the Required fields");
            return;
        }

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid),{
                name, email, createdAt: new Date(),
            });

            alert("Account created successfully!");
            router.push("/Login");
        } catch (error:any) {
            console.log(error);
            alert(error.message);
        }
    };

    return(
        <View style={styles.container}>
            <Text style={StyleSheet.title}>Register</Text>
            <TextInput 
            styles={StyleSheet.input}
            placeholder="Enter Full Name..."
            value={name}
            onChangeText={setName}
            />
            <TextInput 
            styles={StyleSheet.input}
            placeholder="Enter your Email Address..."
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            />
            <TextInput 
            styles={StyleSheet.input}
            placeholder="Enter the Password..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />

            <TouchableOpacity style={StyleSheet.button}onPress={handleRegister}>
                <Text style={StyleSheet.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <Link href="/Login" style={StyleSheet.linkText}>
            Already have an account? Login
            </Link>
        </View>
)
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:20,
        backgroundColor:"#fff",
    },
    title:{
        fontSize:32,
        fontWeight:"bold",
        marginBottom:40,
        textAlign:"center",
    },
    input:{
        width:"100%",
        height:50,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:5,
        paddingHorizontal:10,
        marginBottom:20,
        fontSize:16,
    },
    button:{
        backgroundColor:"#34C759",
        height:50,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        fontSize:16,
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"600",
    },
    linkText:{
        color:"#007AFF",
        fontSize:16,
        textAlign:"center",
    },
});