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
    Alert

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

    const toggleCheckbox = () => setChecked(!checked);
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    // const handleRegister = () => {
    //     console.log(" check box " + checked + ' This is my email ' + email + ' this is the password ' + password + " full name " + fullName + ' phone number ' + phoneNum);

    //     //navigation.navigate("Dashboard");
    // }
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };


    const handleRegister = () => {
        console.log('This is my email ' + email + ' this is the password ' + password);

        const validationErrors = {};

        // Validate name
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        }

        if (!phoneNum.trim()) {
            validationErrors.phoneNum = 'Phone number is required';
        }

        // Validate email
        if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }

        // Validate password
        if (password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters';
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        // Set the errors state
        setErrors(validationErrors);

        // If there are no errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            // Perform registration logic here
            if (checked == true) {
                console.log('check is true');
                axios.post('https://f138-41-113-84-176.ngrok-free.app/api/register', {
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

                        //navigation.navigate("Dash", { param1: 'value1', param2: 'value2' });
                        navigation.navigate('Dashboard', {
                            screen: 'Dash',
                            params: { user: user },
                        })
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

            } else {
                console.log('check is false');
                Alert.alert('Error', "Please select the checkbox to accept terms and conditions");
            }

        }




    }

    const backToLogin = () => {
        navigation.navigate("Login");
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                <ScrollView style={styles.scrollView} contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>

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
                                    onChangeText={setEmail}
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
                                    <Text style={{ color: '#226188', fontWeight: 700, marginTop: 6, marginBottom: -4, fontSize: 12, lineHeight: 18 }}>
                                        terms of use.
                                    </Text>
                                </TouchableOpacity></Text>
                            </View>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                <Text style={styles.termText}>Already on FinnLitt? <TouchableOpacity onPress={backToLogin}>
                                    <Text style={{ fontSize: 12, color: '#226188', fontWeight: 700, marginTop: 6, marginBottom: -4 }}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Arrange children horizontally
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'

    },
    scrollView: {
        backgroundColor: '#072a40',
        flex: 1,
        // marginHorizontal: ,
    },
    imageBackground: {
        //flex: 1, // Take half of the screen width
        resizeMode: 'contain',
        backgroundColor: 'white',
        marginTop: "-15%"
        //height:30
    },
    whiteBackground: {
        //flex: 2, // Take the other half of the screen width
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
        width: 277,
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