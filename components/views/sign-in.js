import { ImageBackground, StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';

export default function SignInForm() {
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
            opacity: 0.93,
            borderRadius: 30,
            marginBottom: "6%",
            padding: "5%",
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
                    style={styles.input}
                    placeholder="Enter your email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter a username"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter a password"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                />
                <Pressable style={styles.btnSign} onPress={() => Alert.alert('Sign Up button pressed')}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
                <Text style={styles.textnoacc}>Already have an account? <Text style={{ color: "blue" }}>Log In</Text></Text>
            </View>
        </ImageBackground>
    )
}