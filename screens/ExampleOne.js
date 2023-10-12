import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import ImageCard from '../components/ImageCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');
export default function ExampleOne({navigation}) {
    const handleLogin = () => {
        navigation.navigate("Login");
    }

    const handleWelcome = () => {
        navigation.navigate("Welcome");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* header */}
                {/* <View style={styles.header} /> */}

                {/* main */}
                <View style={styles.main}>
                    <View style={styles.section1}>
                        <Text style={styles.mainText}>Welcome to </Text>
                        <Image source={require("../assets/logo.png")} style={styles.image} />
                        
                            <TouchableOpacity style={styles.button} onPress={handleWelcome}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                                <Text style={styles.buttonTextLogin}>Login</Text>
                            </TouchableOpacity>
                        
                        <StatusBar style="auto" />
                    </View>
                    
                </View>
            </ScrollView>

            {/* footer */}
            {/* <View style={styles.footer} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        justifyContent:'center'
    },
    header: {
        flex: 1,
        backgroundColor: 'tomato'
    },
    mainText: {
        //marginTop: 130,
        //paddingVertical:150,
        textAlign: 'center',
        color: '#000C14',
        fontSize: 16,
        // fontFamily:'Poppins',
        lineHeight: 24,
        fontWeight: 'normal',

    },
    image: {
        //flexShrink: 0,
        width:hp(34),
        padding: 25,
        //margin: 25,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    main: {
        flex: 1,
        //gap: 4,
        display: 'flex',
        justifyContent: 'center'
        // flexDirection: 'row'

    },
    button: {
        backgroundColor: '#226188',
        padding: 10,
        borderRadius: 42,
        marginTop: 60,
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
        borderWidth: 2,
        borderColor: '#226188',
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
    section1: {
        flex: 2,
        backgroundColor: 'pink',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:wp(22)

    },
    section2: {
        padding: 10,
        flex: 3,
        backgroundColor: 'skyblue',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    footer: {
        flex: 1,
        backgroundColor: 'lightgreen'
    },
    content: {
        fontSize: hp(3)
    }
});