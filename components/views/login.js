import { ImageBackground, StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';

export default function LogInForm() {
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
                    placeholder="Enter your email or username"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                />
                <Pressable style={styles.btnLog} onPress={() => Alert.alert('Log in button pressed')}>
                    <Text style={styles.btnText}>Log In</Text>
                </Pressable>
                <Text style={styles.textnoacc}>Don't have an account? <Text style={{ color: "blue" }}>Sign Up</Text></Text>
            </View>
        </ImageBackground>
    )
}