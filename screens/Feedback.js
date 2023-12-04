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
    Alert,
    ActivityIndicator
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

    const { height, width } = Dimensions.get('window');
    const isIpad = width > 768 && height > 1024;

    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    const items = [
        {
            id: 0,
            title: 'What we can do to improve our app',
        },
        {
            id: 1,
            title: 'What financial information you would like to see in up coming updates',
        },
        {
            id: 2,
            title: 'If our information helped you to understand your financials better',
        },
    ];
    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    const handleFeedback = () => {
        setLoading(true);
        console.log(feedback);
        axios.post('https://finnlitt.co.za/api/sendfeedback', {
            feedback
        })
            .then(function (response) {
                console.log(response.data);
                Alert.alert('Message', "Great! Successfully send in your mail");
                // setFeedback('');
                setFeedback('');
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
    }


    return (

        <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={{ marginTop: '5%', alignContent: 'center' }}>
                    <View style={styles.imageCont}>
                        <Image source={require('../assets/iconsTab/FeedbackActive.png')} style={styles.image} />
                        <Text style={{ alignItems: 'center', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15, fontFamily: 'poppins-bold' }}>Feedback</Text>
                    </View>
                    <View>
                        <Text style={[styles.feedText, isIpad && styles.feedTextIpad]}>Your feedback is incredible valuable to us. Please let us know what you think about our app such as:</Text>
                        {items.map((item, index) => (
                            <View key={item.id} style={[styles.bulletPoint, isIpad && styles.bulletPointIpad]}>
                                <Text style={styles.bullet}>• </Text>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        ))}
                        <Text style={{ fontSize: 16, lineHeight: 27, paddingHorizontal: 30, marginTop: '8%', marginBottom: -18, fontFamily: 'poppins-semiBold' }}>We’d love to hear from you:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Tap to type message"
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
                    {/* Loading indicator */}
                    {loading && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    )}
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
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins-regular'

    }
    ,
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    scrollViewContent: {
        // flexGrow: 1,
        // //alignItems: 'center', // Center content horizontally
        // justifyContent: 'center', // Center content vertically
    },
    imageCont: {
        marginTop: "6%",
        marginBottom: "6%",
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'poppins-regular' // Center vertically
    },
    scrollViewContent: {
        flexGrow: 1,
        //alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%',
        marginBottom: '12%',
        fontFamily: 'poppins-regular'

    },
    input: {
        height: 200,
        borderWidth: 1,
        backgroundColor: '#EAEAEA',
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 25,
        padding: 10,
        marginTop: 25,
        marginBottom: 10,
        fontFamily: 'poppins-regular'

    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        fontSize: 12,
        lineHeight: 24,
        paddingHorizontal: 35,
        //marginLeft: 10,
        fontFamily: 'poppins-regular'
    }
    ,
    bulletPointIpad: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 24,
        paddingHorizontal: 50,
        marginTop: '1%',
        fontFamily: 'poppins-regular'
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
        fontFamily: 'poppins-regular'
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
    feedText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000C14',
        marginBottom: 15,
        paddingHorizontal: 30,
        fontFamily: 'poppins-regular'
    },
    feedTextIpad: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: '#000C14',
        marginBottom: 25,
        paddingHorizontal: 30,
        fontFamily: 'poppins-regular'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet: {
        fontSize: 12,
        fontFamily: 'poppins-regular'
    },
    itemText: {
        flex: 1,
        fontSize:12,
        fontFamily: 'poppins-regular'
    },
});