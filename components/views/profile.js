import { ImageBackground, StyleSheet, Text, View, Pressable, Alert, Image, TextInput, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Buttons = [
    { name: "Photography", open: true },
    { name: "Karaoke", open: false },
    { name: "Cooking", open: false },
    { name: "Run", open: false },
    { name: "Art", open: true },
    { name: "Extreme", open: false },
    { name: "Drink", open: false },
    { name: "Shopping", open: false },
    { name: "Yoga", open: false },
    { name: "Tennis", open: false },
    { name: "Swimming", open: false },
    { name: "Traveling", open: true },
    { name: "Music", open: false },
    { name: "Video games", open: false },
]
export default function Profile() {
    const [jsoninterset, setjsoninterset] = useState(Buttons);

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        image: {
            flex: 1,
            justifyContent: "center"
        },
        container0: {
            display: "flex",
            flexDirection: "column",
            marginHorizontal: "7%"
        },
        container1: {
            marginBottom: "4%"
        },
        titleh1: {
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
        },
        titleh2: {
            fontSize: 28,
            color: "black",
            textAlign: "center"
        },
        imagepic: {
            width: 150,
            height: 150,
            resizeMode: "contain"
        },
        container2: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: '6%',
        },
        container21: {
            display: "flex",
            flexDirection: "column",
        },
        input: {
            backgroundColor: "white",
            fontSize: 22,
            opacity: 0.93,
            borderRadius: 10,
            marginBottom: "3%",
            padding: "5%",
        },
        container4: {
            display: "flex",
            flexDirection: "column",
            marginBottom: '4%',
        },
        container3: {
            marginBottom: '4%',
        },
        btn: {
            backgroundColor: "white",
            padding: "5%",
            borderWidth: 1,
            borderColor: "#E8E6EA",
            borderRadius: 15,
            margin: "2%",
            width: "45%"
        },
        btnrouge: {
            backgroundColor: "#FF6584",
            padding: "5%",
            borderWidth: 1,
            borderColor: "#E8E6EA",
            borderRadius: 15,
            margin: "2%",
            width: "45%"
        },
        btntext: {
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22
        },
        container5: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap",
            marginBottom: '8%',
        },
        btnsave: {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#2CF1E5",
            marginBottom: "10%",
            padding: "5%",
            borderRadius: 10,
        },
        btnsavetext: {
            fontSize: 22,
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
        },
        texttext: {
            fontSize: 22
        }
    });

    function ItemInterset() {
        return jsoninterset.map((element, index) => (
            <Pressable key={index} style={element.open ? styles.btnrouge : styles.btn}>
                <Text style={styles.btntext} onPress={() => {
                    let newJson = [...jsoninterset];
                    element.open = !element.open;
                    newJson[index] = element
                    setjsoninterset(newJson);
                }}>{element.name}</Text>
            </Pressable>
        )
        );
    }

    return (
        <ImageBackground source={require("../../assets/background-sign.png")} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.container0}>
                        <View style={styles.container1}>
                            <Text style={styles.titleh1}>Profile details</Text>
                            <Text style={styles.texttext}>Update your profile with your information.</Text>
                        </View>
                        <View style={styles.container2}>
                            <View style={styles.container21}>
                                <Text style={styles.titleh2} width="150">Picture</Text>
                                <Image source={require("../../assets/picture.png")} style={styles.imagepic}></Image>
                            </View>
                            <View style={styles.container21}>
                                <Text style={styles.titleh2} width="150">Avatar</Text>
                                <Image source={require("../../assets/avatar.png")} style={styles.imagepic}></Image>
                            </View>
                        </View>
                        <View style={styles.container3}>
                            <TextInput
                                style={styles.input}
                                placeholder="First name"
                                value="Gustavo"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Last name"
                                value="Fring"
                            />
                        </View>
                        <View style={styles.container4}>
                            <Text style={styles.titleh1}>Your interests</Text>
                            <Text style={styles.texttext}>Select a few of your interests and let everyone know what you're passionate about.</Text>
                        </View>
                        <View style={styles.container5}>
                            <ItemInterset></ItemInterset>
                        </View>
                        <View style={styles.container6}>
                            <Pressable style={styles.btnsave} onPress={() => navigation.navigate('Map view')}>
                                <Text style={styles.btnsavetext}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}