import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

    const handleLogin = () => {
        navigation.navigate("Login");
    }

    const handleWelcome = () => {
        navigation.navigate("Welcome");
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome to </Text>
            <Image source={require("../assets/logo.png")} style={styles.image} />
            <View>
                <TouchableOpacity style={styles.button} onPress={handleWelcome}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        marginTop: 130,
        textAlign: 'center',
        color: '#000C14',
        fontSize: 16,
        // fontFamily:'Poppins',
        lineHeight: 24,
        fontWeight: '300',

    },
    button: {
        backgroundColor: '#226188',
        padding: 10,
        borderRadius: 42,
        marginTop: 160,
        width: 277,
        height: 50,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    buttonLogin: {
    backgroundColor: '#FBFBFB',
    padding: 10,
    borderRadius: 42,
    borderWidth:2,
    borderColor:'#226188',
    marginTop: 25,
    width: 277,
    height: 50,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
},
    buttonText: {
        textAlign: 'center',
        color: '#FBFBFB',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        fontWeight: '600',
    }
    ,
    buttonTextLogin: {
        textAlign: 'center',
        color: '#226188',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        fontWeight: '600',
    },
    image: {
        //flexShrink: 0,
        width: 262,
        height: 222,
        padding: 10,
        margin: 25,
        resizeMode: 'contain',
        alignSelf: 'center',

    }
});