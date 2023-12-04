import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
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
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Linking,
    ActivityIndicator

} from 'react-native';
import { CheckBox } from '@rneui/themed';
import Svg, { Path } from 'react-native-svg';

import WavePattern from '../components/wavePattern';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
    const [checked, setChecked] = React.useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [authenticated, setauthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleCheckbox = () => setChecked(!checked);
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const { height, width } = Dimensions.get('window');
    const isIpad = width > 768 && height > 1024;

    // const handleRegister = () => {
    //     console.log(" check box " + checked + ' This is my email ' + email + ' this is the password ' + password + " full name " + fullName + ' phone number ' + phoneNum);

    //     //navigation.navigate("Dashboard");
    // }
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleLinkPress = () => {
        // Define the URL you want to open when the link is pressed
        const url = 'https://finnlitt.co.za/terms-and-conditions';

        // Open the URL using the Linking API
        Linking.openURL(url);
    };


    const handleRegister = () => {
        console.log('This is my email ' + email + ' this is the password ' + password);
        setLoading(true);
        const validationErrors = {};

        // Validate name
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
            setLoading(false);
        }

        if (!phoneNum.trim()) {
            validationErrors.phoneNum = 'Phone number is required';
            setLoading(false);
        }

        // Validate email
        if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
            setLoading(false);
        }

        // Validate password
        if (password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters';
            setLoading(false);
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
            setLoading(false);
        }

        // Set the errors state
        setErrors(validationErrors);

        // If there are no errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            // Perform registration logic here
            if (checked == true) {
                console.log('check is true');
                axios.post('https://finnlitt.co.za/api/register', {
                    name, phoneNum, email, password
                })
                    .then(function (response) {
                        console.log(response.data.user);
                        setauthenticated(true);
                        AsyncStorage.setItem("authenticated", JSON.stringify(true));

                        AsyncStorage.setItem('userid', JSON.stringify(response.data.user.id));
                        AsyncStorage.setItem('user', JSON.stringify(response.data.user))
                        const user = JSON.stringify(response.data.user);
                        console.log("User data from screen " + user);

                        setName('');
                        setPhoneNum('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');

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
                            setLoading(false);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            Alert.alert('Error', 'Network error occurred');
                            setLoading(false);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            Alert.alert('Error', error.message);
                            setLoading(false);
                        }
                    });

            } else {
                console.log('check is false');
                setLoading(false);
                Alert.alert('Error', "Please select the checkbox to accept terms and conditions");
            }

        }




    }
    const handleEmailChange = (text) => {
        // Remove any extra spaces from the email input
        const formattedEmail = text.trim();
        setEmail(formattedEmail);
    };

    const backToLogin = () => {
        navigation.navigate("Login");
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (

        <View style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
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
                        <View style={[styles.whiteBackground, { paddingBottom: 20 }]}>
                            <View style={styles.section}>
                                <Image source={require('../assets/icons/username.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name & Surname"
                                    value={name}
                                    onChangeText={setName}

                                />

                            </View>
                            {errors.name && <Text style={{ color: 'red', paddingHorizontal: 30 }}>{errors.name}</Text>}
                            <View style={styles.section}>
                                <Image source={require('../assets/icons/phone.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Phone"
                                    value={phoneNum}
                                    onChangeText={setPhoneNum}
                                />
                            </View>
                            {errors.phoneNum && <Text style={{ color: 'red', paddingHorizontal: 30 }}>{errors.phoneNum}</Text>}
                            <View style={styles.section}>
                                <Image source={require('../assets/icons/emailAdr.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={handleEmailChange}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                />
                            </View>
                            {errors.email && <Text style={{ color: 'red', paddingHorizontal: 30 }}>{errors.email}</Text>}
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
                            {errors.password && <Text style={{ color: 'red', paddingHorizontal: 30 }}>{errors.password}</Text>}
                            <View style={styles.section}>
                                <Image source={require('../assets/icons/password.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    secureTextEntry={true}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                            </View>
                            {errors.confirmPassword && <Text style={{ color: 'red', paddingHorizontal: 30 }}>{errors.confirmPassword}</Text>}
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                <CheckBox
                                    checked={checked}
                                    onPress={toggleCheckbox}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor="#226188"
                                />
                                <Text style={styles.termText}>I consent to and accept the <TouchableOpacity>
                                    <Text style={[styles.termsOfUse, isIpad && styles.termsOfUseIpad]} onPress={handleLinkPress}>
                                        terms of use.
                                    </Text>
                                </TouchableOpacity></Text>
                            </View>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                {loading && (
                                    <View style={styles.loadingContainer}>
                                        <ActivityIndicator size="large" color="white" />
                                    </View>
                                )}
                                <Text style={styles.termText}>Already on FinnLitt? <TouchableOpacity onPress={backToLogin}>
                                    <Text style={[styles.termsOfUse, isIpad && styles.termsOfUseIpad]}>
                                        Login
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
        flexDirection: 'column',
        fontFamily: 'poppins-regular' // Arrange children horizontally
    },
    content: {
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',


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
    termsOfUse: {
        color: '#226188',
        fontWeight: 700,
        marginTop: 6,
        marginBottom: -4,
        fontSize: 12,
        lineHeight: 18,
        
    },
    termsOfUseIpad: {
        color: '#226188',
        fontWeight: 700,
        marginTop: 4,
        marginBottom: -3,
        fontSize: 12,
        lineHeight: 18
    },
    scrollViewContent: {
        flexGrow: 1,
        //alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
    imageBackground: {
        flex: 1, // Take half of the screen width
        resizeMode: 'contain',
        backgroundColor: 'white',
        marginTop: "-15%"
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
        marginTop:'30%'
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
        //shadowOpacity: 0.20,
        //shadowRadius: 1.41,
        //elevation: 2,
        justifyContent: 'center',
        marginBottom: '3%'
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
        color: '#94999D',
        marginTop:'1%',
        marginBottom:'2%',
        marginLeft: -15,
        fontFamily: 'poppins-regular'
    }
});