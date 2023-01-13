import { ImageBackground, StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignInForm() {
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputName, setTextInputNamel] = useState('');
    const [textInputPass, setTextInputPass] = useState('');
    const [textInputCoPass, setTextInpuCotPass] = useState('');
    const navigation = useNavigation();

    const checkTextInput = () => {
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        if (!textInputPass.trim()) {
            alert('Please Enter Password');
            return;
        }
        if (!textInputCoPass.trim()) {
            alert('Please Enter Confirm Password');
            return;
        }
        navigation.navigate('Profile')
    };

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            justifyContent: "center"
        },
        btnSign: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#FF6584",
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
            fontSize: 22,
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
                    placeholder="Enter your email"
                    onChangeText={
                        (value) => setTextInputEmail(value)
                    }
                />
                <TextInput
                    style={!textInputName.trim() ? styles.inputred : styles.input}
                    placeholder="Enter a username"
                    onChangeText={
                        (value) => setTextInputNamel(value)
                    }
                />
                <TextInput
                    style={!textInputPass.trim() ? styles.inputred : styles.input}
                    placeholder="Enter a password"
                    onChangeText={
                        (value) => setTextInputPass(value)
                    }
                />
                <TextInput
                    style={!textInputCoPass.trim() ? styles.inputred : styles.input}
                    placeholder="Confirm password"
                    onChangeText={
                        (value) => setTextInpuCotPass(value)
                    }
                />
                <Pressable style={styles.btnSign} onPress={checkTextInput}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
                <Text style={styles.textnoacc}>Already have an account? <Text style={{ color: "blue" }} onPress={() => navigation.navigate('Login')}>Log In</Text></Text>
            </View>
        </ImageBackground>
    )
}