import { ImageBackground, StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

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
            marginBottom: "10%",
            padding: "5%",
            borderRadius: 10,
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
        btnDiv: {
            display: "flex",
            marginTop: "110%",
            marginHorizontal: "7%",
        }
    });

    return (
        <ImageBackground source={require("../../assets/background-login.png")} resizeMode="cover" style={styles.image}>
            <View style={styles.btnDiv}>
                <Pressable style={styles.btnLog} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Log In</Text>
                </Pressable>
                <Pressable style={styles.btnSign} onPress={() => navigation.navigate('Sign-in')}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}