import {Link, router} from 'expo-router';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {auth} from '../../firebaseConfig';

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
            if(!email || !password){
                alert("Please fill all the fields.");
                return;
            }

            try{
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                console.log("Logged in User:",user);
                alert("Login Successful!");

                router.push("/Home");
            }catch(error:any)
            {
                console.error("Login Unsuccessful", error);
            }
        };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Enter Email..." value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Enter the password..." value={password} secureTextEntry onChangeText={setPassword} />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Link href="/Register" style={styles.linkText}>
                <Text>Don't have an account? Register</Text>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});