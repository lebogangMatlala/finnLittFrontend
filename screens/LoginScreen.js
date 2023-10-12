import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    RefreshControl,
    Alert,
    ActivityIndicator
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import WavePattern from '../components/wavePattern';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setauthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const handleRegister = () => {
        navigation.navigate("Registration");
    }



    const handleLogin = () => {
        console.log('This is my email ' + email + ' this is the password ' + password);
        setLoading(true);
        axios.post('https://finnlitt.co.za/api/login', {
            email, password
        })
            .then(function (response) {
                console.log(response.data.user);
                setauthenticated(true);
                AsyncStorage.setItem("authenticated", JSON.stringify(true));

                AsyncStorage.setItem('userid', JSON.stringify(response.data.user.id));
                AsyncStorage.setItem('user', JSON.stringify(response.data.user))
                const user = JSON.stringify(response.data.user);
                console.log("User data from screen " + user);

                setEmail('');
                setPassword('');
                //navigation.navigate("Dash", { param1: 'value1', param2: 'value2' });
                navigation.navigate('DashTabs', {
                    screen: 'Dash',
                    params: { user: user },
                })
                setLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const message = error.response.data.message || 'An error occurred';
                    Alert.alert('Error', message);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    Alert.alert('Error', 'Network error occurred');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    Alert.alert('Error', error.message);
                }
            });

        //navigation.navigate("Dashboard");
    }

    return (

        <View style={styles.container}>
            <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        {/* Half screen with image */}
                        <ImageBackground
                            source={require('../assets/LoginBackgroundImage.png')}
                            style={[styles.imageBackground, { height: halfScreenWidth }]}
                        >
                            <Image source={require("../assets/logoBlue.png")} style={styles.image} />
                        </ImageBackground>
                        {/* Half screen with white background */}
                        <View style={[styles.whiteBackground, { height: halfScreenWidth * 2 }]}>
                            <View style={{ marginTop: '5%' }}>


                                <View style={styles.section}>
                                    <Image source={require('../assets/icons/emailAdr.png')} style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={setEmail}
                                    // other TextInput props
                                    />
                                </View>
                                <View style={styles.section}>
                                    <Image source={require('../assets/icons/password.png')} style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                </View>
                            </View>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                {loading && (
                                    <View style={styles.loadingContainer}>
                                        <ActivityIndicator size="large" color="white" />
                                    </View>
                                )}
                                <Text style={styles.termText}>Don't have an account? <TouchableOpacity onPress={handleRegister}>
                                    <Text style={{ textDecorationLine: 'underline', color: '#226188', fontWeight: 700, marginTop: 6, marginBottom: -4, fontSize: 12 }}>
                                        Register
                                    </Text>
                                </TouchableOpacity></Text>

                            </View>

                        </View>

                        <StatusBar
                            barStyle="auto" animated={false}
                            backgroundColor="#072a40"
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Arrange children horizontally

    },
    scrollViewContent: {
        flexGrow: 1,
        //alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
    content: {
        // flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: '34%'

    },
    loadingContainer: {
        position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '72%',
        height: 48,
    },
    imageBackground: {
        flex: 1, // Take half of the screen width
        resizeMode: 'cover',
        backgroundColor: 'white',
        marginTop: "-10%"
        //height:30
    },
    whiteBackground: {
        flex: 1, // Take the other half of the screen width
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        width: 146,
        height: 124,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    section: {

        marginTop: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 28,
        marginRight: 28,
        borderBottomWidth: 1.5,
    },
    icon: {
        width: 22,
        height: 22,
        marginRight: 17,
        resizeMode: 'contain'
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        // You can change the border color here
    },
    button: {
        backgroundColor: '#226188',
        padding: 10,
        borderRadius: 42,
        //marginTop: 10,
        width: '72%',
        height: 48,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FBFBFB',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        fontWeight: '600',
    },
    termText: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: '#94999D'
    }
});