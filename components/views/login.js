import { ImageBackground, StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LogInForm() {
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputPass, setTextInputPass] = useState('');
    const navigation = useNavigation();

    const checkTextInput = () => {
        if (!textInputPass.trim()) {
          alert('Please Enter Password');
          return;
        }
        if (!textInputEmail.trim()) {
          alert('Please Enter Email');
          return;
        }
        navigation.navigate('Map view')
      };

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            justifyContent: "center"
        },
        btnLog: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#2CF1E5",
            padding: "5%",
            borderRadius: 10,
        },
        btnText: {
            fontSize: 22,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
        },
        div: {
            display: "flex",
            marginTop: "45%",
            marginHorizontal: "7%",
        },
        input: {
            backgroundColor: "white",
            fontSize: 22,
            opacity: 0.93,
            borderRadius: 30,
            marginBottom: "6%",
            padding: "5%",
        },
        inputred: {
            backgroundColor: "white",
            opacity: 0.93,
            borderRadius: 30,
            marginBottom: "6%",
            padding: "5%",
            borderWidth: 2,
            borderColor: "red",
        },
        textnoacc: {
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "2%"
        }
    });


    return (
        <ImageBackground source={require("../../assets/background-login.png")} resizeMode="cover" style={styles.image}>
            <View style={styles.div}>
                <TextInput
                    style={!textInputEmail.trim() ? styles.inputred : styles.input}
                    placeholder="Enter your email or username"
                    onChangeText={
                        (value) => setTextInputEmail(value)
                    }
                />
                <TextInput
                    style={!textInputPass.trim() ? styles.inputred : styles.input}
                    placeholder="Enter password"
                    onChangeText={
                        (value) => setTextInputPass(value)
                    }
                />
                <Pressable style={styles.btnLog} onPress={checkTextInput}>
                    <Text style={styles.btnText}>Log In</Text>
                </Pressable>
                <Text style={styles.textnoacc}>Don't have an account? <Text style={{ color: "blue" }} onPress={() => navigation.navigate('Sign-in')}>Sign Up</Text></Text>
            </View>
        </ImageBackground>
    )
}