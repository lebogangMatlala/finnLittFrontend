import React from 'react';
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
    Alert
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import WavePattern from '../components/wavePattern';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

export default function FeedbackScreen({ navigation }) {
    const navigationRef = useRef(null);
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const [feedback, setFeedback] = useState('');

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    const handleFeedback = () => {
        console.log(feedback);
        axios.post('https://f138-41-113-84-176.ngrok-free.app/api/sendfeedback', {
            feedback
        })
            .then(function (response) {
                console.log(response.data);
                Alert.alert('Message', "Great! Successfully send in your mail");
               // setFeedback('');
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
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: '5%', alignContent: 'center' }}>
                    <View style={styles.imageCont}>
                        <Image source={require('../assets/icons/chat.png')} style={styles.image} />
                        <Text style={{ alignItems: 'center', fontWeight: '700', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15 }}>Feedback</Text>
                    </View>
                    <View>
                        <Text style={styles.feedText}>Your feedback is incredible valuable to us. Please let us know what you think about our app such as:</Text>
                        <Text style={styles.bulletPoint}>• What we can do to improve our app</Text>
                        <Text style={styles.bulletPoint}>• What financial information you would like to see in up coming updates</Text>
                        <Text style={styles.bulletPoint}>•  If our information helped you to understand your financials better</Text>
                        <Text style={{ fontSize: 18, fontWeight: '600', lineHeight: 27, paddingHorizontal: 30, marginTop: 20, marginBottom: -20 }}>We’d love to hear from you:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your comment..."
                            multiline
                            value={feedback}
                            onChangeText={setFeedback}
                        />
                    </View>
                </View>
                <View style={styles.content} >
                    <TouchableOpacity style={styles.button} onPress={handleFeedback}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>


                <StatusBar
                    barStyle="auto" animated={false}
                    backgroundColor="#072a40"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    imageCont: {
        marginBottom: "7%",
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center',
        justifyContent: 'center', // Center vertically
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%',

    },
    input: {
        height: 180,
        borderWidth: 1,
        backgroundColor: '#EAEAEA',
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 25,
        padding: 25,
        marginTop: 25,
        marginBottom: 10,

    },
    bulletPoint: {
        fontSize: 12,
        lineHeight: 24,
        paddingHorizontal: 50
    },
    image: {
        //flex: 1,
        width: 26,
        height: 34,
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
    feedText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000C14',
        marginBottom: 15,
        paddingHorizontal: 30
    }
});