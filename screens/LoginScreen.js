import React, { useEffect, useState } from 'react';
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
    ActivityIndicator,
    Modal,
    Linking
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
    const [token, setToken] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loadingforgot, setLoadingforgot] = useState(false);
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    const handleYesPress = async () => {

        // Handle 'Yes' button click here
        console.log('Submit button clicked ' + email);
        setLoadingforgot(true);
        try {
            // Make a POST request to the forgot password API
            const response = await axios.post('https://0ef2-154-66-210-135.ngrok-free.app/api/password/forgot', {
                email: inputValue,
            });
            // Handle the response, you might want to check if the request was successful
            // and show an appropriate message to the user
            if (response.data.message) {
                Alert.alert('Success', response.data.message);
                setToken(response.data.token);
                setInputValue('');
                setLoadingforgot(false);
            } else {
                Alert.alert('Error', 'Password reset request failed.');
                setInputValue('');
                setLoadingforgot(false);
            }
        } catch (error) {
            console.error('Forgot password error:', error);
            Alert.alert('Error', 'An error occurred. Please try again.');
            setInputValue('');
            setLoadingforgot(false);
        }
        closeModal();
    }

    const handleNoPress = async () => {
        // Handle 'Yes' button click here
        console.log('Close button clicked ');
        setModalVisible(false);
    }

    const handleRegister = () => {
        navigation.navigate("Registration");
    }
    const handleInput = (text) => {
        setInputValue(text);
    };

    const handlePasswordReset = () => {

        openModal();
        //navigation.navigate("PasswordReset");
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

                    const message = error.response.data.message || 'An error occurred';
                    Alert.alert('Error', message);
                    setLoading(false);
                } else if (error.request) {
                    Alert.alert('Error', 'Network error occurred');
                    setLoading(false);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    Alert.alert('Error', error.message);
                    setLoading(false);
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
                                <View style={{ alignSelf: 'flex-end', paddingHorizontal: 30 }}>
                                    <TouchableOpacity onPress={handlePasswordReset}>
                                        <Text style={{ textDecorationLine: 'underline', color: '#226188', fontWeight: 'bold', marginTop: 6, marginBottom: -4, fontSize: 12, fontFamily: 'poppins-regular' }}>
                                            Forgot Password?
                                        </Text>
                                    </TouchableOpacity>

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
                                    <Text style={{ textDecorationLine: 'underline', color: '#226188', fontWeight: '700', marginTop: 6, marginBottom: -4, fontSize: 12, fontFamily: 'poppins-regular' }}>
                                        Register
                                    </Text>
                                </TouchableOpacity></Text>

                            </View>

                        </View>

                        <StatusBar
                            barStyle="auto" animated={false}
                            backgroundColor="#072a40"
                        />
                        {/* Modal */}
                        <Modal
                            animationType="slide" // Change animation type as needed
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={closeModal}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.subOneText}>Forgot
                                        <Text style={styles.subTwoText}>Password</Text>
                                    </Text>
                                    <View>
                                        <Text>You are about to reset your password,Enter your email to continue and click on "Submit" to process your request OR "Close" to cancel the oparation</Text>
                                        <View style={styles.sectionB}>
                                            <Image source={require('../assets/icons/emailAdr.png')} style={styles.icon} />
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Email"
                                                value={inputValue}
                                                onChangeText={setInputValue}
                                            // other TextInput props
                                            />
                                        </View>
                                        {loadingforgot && (
                                            <View style={styles.loadingContainerModal}>
                                                <ActivityIndicator size="large" color="white" />
                                            </View>
                                        )}
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={handleYesPress} style={[styles.buttonModalTwo, { width: '45%' }]}>
                                            <Text style={styles.buttonTextTwo}>Submit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleNoPress} style={[styles.buttonModal, { width: '45%' }]}>
                                            <Text style={styles.buttonText}>Close</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </Modal>
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
        fontFamily: 'poppins-regular'
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
        //marginTop: 20,
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
    loadingContainerModal: {
        position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '100%',
        height: 48,
        marginTop: '28%'
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
        marginTop: '30%'
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
    sectionB: {

        marginTop: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 5,
        marginRight: 5,
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
        marginBottom: 10,
        width: '72%',
        height: 48,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,
        //elevation: 2,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FBFBFB',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        fontWeight: 'bold',
        fontFamily: 'poppins-regular'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        width: '96%',
        fontFamily: 'poppins-regular'
    },
    subOneText: {
        color: '#CC6D3D',
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 60,
        fontFamily: 'poppins-regular'
    },
    subTwoText: {
        color: '#072A40',
        fontWeight: '300',
        fontSize: 30,
        lineHeight: 60,
        marginTop: -40,
        fontFamily: 'poppins-regular'
    },
    buttonContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        fontFamily: 'poppins-regular'

    },
    buttonTextTwo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#226188',
        justifyContent: 'center',
        fontFamily: 'poppins-regular'
    },
    buttonModal: {
        color: 'white',
        backgroundColor: '#226188',
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        padding: 10,
        fontFamily: 'poppins-regular'
    },
    buttonModalTwo: {
        color: '#226188',
        backgroundColor: '#FBFBFB',
        borderColor: '#226188',
        borderWidth: 2,
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        padding: 10, fontFamily: 'poppins-regular'
    },
    termText: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: '#94999D',
        marginTop: '1%',
        marginBottom: '2%',
        marginLeft: -15,
        fontFamily: 'poppins-regular'
    }
});