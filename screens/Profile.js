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
    Modal
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import WavePattern from '../components/wavePattern';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';
import { useRef } from 'react';

export default function ProfileScreen({ navigation, route }) {
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;
    const navigationRef = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [editable, setEditable] = useState(false);
    const [editableEmail, setEditableEmail] = useState(false);
    const [editablePassword, setEditablePassword] = useState(false);

    const [user, setUser] = useState('');
    const [userId, setUserID] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    // const { userData } = route.params;
    // console.log(userData);



    useEffect(() => {
        getUserData();
        console.log(userId);

    }, []);

    const handleEditToggle = () => {
        // Toggle the edit state when the icon is clicked
        setEditable(true);
        console.log(editable);
    };
    const handleEditToggleEmail = () => {
        // Toggle the edit state when the icon is clicked
        setEditableEmail(true);
        console.log(editableEmail);
    };
    const handleEditTogglePassword = () => {
        // Toggle the edit state when the icon is clicked
        setEditablePassword(true);
        console.log(editablePassword);
    };

    const handleTextChange = (newText) => {
        setName(newText);
    };

    const updateUserProfile = () => {
        navigation.navigate("Registration");
    }

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const handleYesPress = async () => {
        // Handle 'Yes' button click here
        console.log('Yes button clicked ' + userId);

        try {
            const response = await fetch(`https://finnlitt.co.za/api/deleteuser/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 200) {
                // The update was successful
                console.log('User Deleted successfully');
                await AsyncStorage.removeItem('userid');
                await AsyncStorage.removeItem('user');
                await AsyncStorage.removeItem('authenticated');

                navigation.navigate('Home');

                // Reset the navigation stack to redirect to the login screen
                // const resetAction = StackActions.reset({
                //     index: 0,
                //     actions: [NavigationActions.navigate({ routeName: 'Home' })],
                // });
                // navigation.dispatch(resetAction);

            } else {
                // Handle other response statuses (e.g., validation errors)
            }
        } catch (error) {
            // Handle request error (e.g., network error)
            console.error('Error:', error);
        }

        closeModal();
    };

    const handleNoPress = () => {
        // Handle 'No' button click here
        console.log('No button clicked');
        closeModal();
    };

    const getUserData = async () => {
        try {
            const userId = await AsyncStorage.getItem('userid');
            if (userId !== null) {
                // User data was found in AsyncStorage
                const parsedUserData = JSON.parse(userId);


                try {
                    const response = await axios.get(`https://finnlitt.co.za/api/showuser/${parsedUserData}`);
                    // Handle the response data here
                    console.log('User Data:', response.data);
                    setUserID(response.data.id);
                    setUser(response.data);

                    setName(response.data.name);
                    setEmail(response.data.email);
                    setPassword(response.data.password);
                } catch (error) {
                    // Handle any errors that occurred during the request
                    console.error('Error:', error);
                }


                console.log('User Data:', parsedUserData);
                // You can now use the user data in your component
            } else {
                // User data was not found in AsyncStorage
                console.log('User Data not found in AsyncStorage');
            }
        } catch (error) {
            console.error('Error retrieving user data:', error);
        }
    };

    const updateUser = async () => {
        console.log(name + "  " + email + "  " + password + " id: " + userId)
        try {
            const response = await fetch(`https://finnlitt.co.za/api/updateuser/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            if (response.status === 200) {
                // The update was successful
                console.log('User updated successfully');
            } else {
                // Handle other response statuses (e.g., validation errors)
            }
        } catch (error) {
            // Handle request error (e.g., network error)
            console.error('Error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            let keys = ['user', 'userid', 'authenticated'];
            await AsyncStorage.multiRemove(keys, err => {
                console.log('user has logged out');
            });
            //setIsLoggedIn(false);

            navigation.navigate('Login');

            ///console.log("isloggedin " + isLoggedIn);

        } catch (e) {
            console.error('Error clearing user data from AsyncStorage: ', e);
        }
    }


    return (
        // <SafeAreaView style={styles.container}>
        //     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //         style={styles.container}>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ marginTop: '5%', alignContent: 'center' }}>
                    <View style={styles.imageCont}>
                        <Image source={require('../assets/icons/Vector.png')} style={styles.image} />
                        <Text style={{ alignItems: 'center', fontWeight: '700', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15 }}>Profile</Text>
                    </View>
                    <View style={styles.section}>
                        <Image source={require('../assets/icons/username.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            value={name}
                            onChangeText={(newUsername) => setName(newUsername)}
                            editable={editable}
                            onBlur={handleEditToggle}
                            autoFocus
                            selectTextOnFocus
                        />
                        <TouchableOpacity onPress={handleEditToggle} >
                            <Image source={require('../assets/icons/pen.png')} style={styles.icon} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.section}>
                        <Image source={require('../assets/icons/emailAdr.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="email@gmail.com"
                            value={email}
                            onChangeText={(newEmail) => setEmail(newEmail)}
                            editable={editableEmail}
                            onBlur={handleEditToggleEmail}
                            autoFocus
                            selectTextOnFocus
                        />
                        <TouchableOpacity onPress={handleEditToggleEmail} >
                            <Image source={require('../assets/icons/pen.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section}>
                        <Image source={require('../assets/icons/password.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder=".........."
                            value={password}
                            onChangeText={(newPassword) => setPassword(newPassword)}
                            editable={editablePassword}
                            onBlur={handleEditTogglePassword}
                            autoFocus
                            selectTextOnFocus
                        />
                        <TouchableOpacity onPress={handleEditTogglePassword}>
                            <Image source={require('../assets/icons/pen.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>


                </View>


                <View style={styles.content}>
                    <TouchableOpacity style={styles.button} onPress={updateUser}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.contentTwo}>
                    <TouchableOpacity style={styles.button} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={{ textDecorationLine: 'underline', color: '#CC6D3D', fontWeight: 700, marginTop: 10, marginBottom: -4, fontSize: 12 }}>
                            Delete my account
                        </Text>
                    </TouchableOpacity>
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
                            <Text style={styles.subOneText}>Delete
                                <Text style={styles.subTwoText}>Account</Text>
                            </Text>
                            <Text>You are about to delete your account Permantly,Click "Yes" to detele and "NO" to cancel the oparation</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={handleYesPress} style={[styles.buttonModalTwo, { width: '45%' }]}>
                                    <Text style={styles.buttonTextTwo}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleNoPress} style={[styles.buttonModal, { width: '45%' }]}>
                                    <Text style={styles.buttonText}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
        </View>
        //     </KeyboardAvoidingView>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    scrollViewContent: {
        flexGrow: 1,
        //alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
    imageCont: {
        marginBottom: "7%",
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center',
        justifyContent: 'center', // Center vertically
    },

    subOneText: {
        color: '#CC6D3D',
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 60,
    },
    subTwoText: {
        color: '#072A40',
        fontWeight: '300',
        fontSize: 30,
        lineHeight: 60,
        marginTop: -40,
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
        width: '96%'
    }
    ,
    buttonContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,

    },
    buttonTextTwo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#226188',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        justifyContent: 'center',
    },
    buttonModal: {
        color: 'white',
        backgroundColor: '#226188',
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        padding: 10
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
        padding: 10
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',

    },
    contentTwo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',

    },
    image: {
        //flex: 1,
        width: 26,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        paddingHorizontal: 10
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