import React, { useState, useEffect } from 'react';
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
    ProgressBarAndroid,
    FlatList,
    Button
} from 'react-native';
// import { ProgressBar } from '@react-native-community/progress-bar-android';
import Svg, { Path } from 'react-native-svg';

import WavePattern from '../components/wavePattern';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from 'react-native-progress/Bar'
export default function OnBoardingScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width;
    const textWidth = screenWidth - 20;

    const { height, width } = Dimensions.get('window');
    const isIpad = width > 768 && height > 1024;

    const images = [
        { id: 1, source: require('../assets/onboarding/Illustration1.png'), text: 'Welcome to our finance learning app! We are excited to help you on this journey to improve your financial literacy.Let us get started!', headingText: 'Welcome To', subOne: 'Finn', subTwo: 'LITT' },
        { id: 2, source: require('../assets/onboarding/Illustration2.png'), text: 'On this app, we will help you understand the adult things you will need to manage such as tax compliance or why a credit score is important.Our content is designed for the youth of South Africa.We have simplified it for those who are new to finance.', headingText: 'What', subOne: 'We', subTwo: 'Do' },
        { id: 3, source: require('../assets/onboarding/Illustration3.png'), text: 'Our team is made up of finance experts who are passionate about helping and growing the youth in financial literacy.We are committed to supporting you on your journey through life as an adult.', headingText: 'Who', subOne: 'We', subTwo: 'Are' },
    ];

    const handleNextButton = () => {
        const lastIndex = images.length - 1;
        const isLastIndex = currentIndex === lastIndex;
        if (isLastIndex) {
            // setTimeout(() => {
                navigation.navigate('Registration'); // Replace 'OtherScreen' with the actual screen name
            // }, 8000);

        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    useEffect(() => {
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                navigation.navigate('Registration'); // Replace 'OtherScreen' with the actual screen name
            }, 8000); // Navigate to registration page on last slide
        }
    }, [currentIndex])

    const progressBarValue = (currentIndex + 1) / images.length;

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                {/* <ScrollView> */}
                <View style={styles.container}>
                    <View style={styles.progressBarContainer}>

                        {/* {Platform.OS === 'android' && (
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={progressBarValue}
                                    color="#2196F3"
                                style={{ width: 290,marginTop:20 }} 
                                />
                            )} */}
                        {Platform.OS === 'android' && (
                            <ProgressBar
                                progress={progressBarValue}
                                width={290}
                                color="#2196F3"
                                borderColor="#ccc"
                                unfilledColor="#e0e0e0"
                                style={{ marginTop: 25, marginBottom: 15 }}
                            />
                        )}

                    </View>
                    <FlatList
                        data={[images[currentIndex]]}
                        renderItem={({ item }) => (
                            <View style={[styles.imageContainer, isIpad && styles.imageContainerIpad]}>
                                <Text style={styles.headingText}>{item.headingText}</Text>
                                <View style={styles.cont}>
                                    <Text style={styles.subOneText}>{item.subOne}
                                        <Text style={styles.subTwoText}>{item.subTwo}</Text>
                                    </Text>
                                </View>
                                {/* <Text>{item.subOne}
                                    <TouchableOpacity>
                                        <Text>{item.subTwo}</Text>
                                    </TouchableOpacity>
                                </Text> */}
                                <Image source={item.source} style={[styles.image,isIpad && styles.imageIpad]} />
                                <Text style={[styles.imageText, { width: textWidth }]}>{item.text}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        pagingEnabled
                    />

                    <TouchableOpacity style={styles.button} onPress={handleNextButton} >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    <Text style={styles.disText}>Disclaimer: We are not a Financial Service Provider</Text>
                    <StatusBar
                        barStyle="dark-content" animated={false}
                    //backgroundColor="#072a40"
                    />
                </View>
                {/* </ScrollView> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,

    },
    progressBarContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    progressBar: {
        width: '100%',
        height: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#2196F3',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
       
    },
    imageContainerIpad:{
        marginTop: '15%'
    },
    subOneText: {
        color: '#CC6D3D',
        fontWeight: '800',
        fontSize: 40,
        lineHeight: 60,
    },
    subTwoText: {
        color: '#072A40',
        fontWeight: '300',
        fontSize: 40,
        lineHeight: 60,
        marginTop: -40,

    },
    image: {
        width: 370,
        height: 280,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    imageIpad: {
        width: 570,
        height: 480,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    imageText: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 22,
        color: '#4D555B'
    },
    headingText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: 30,
        color: '#000C14',
        // marginTop:'-15%'
        
    },
    button: {
        backgroundColor: '#226188',
        padding: 10,
        borderRadius: 42,
        marginTop: 10,
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
    disText: {
        color: '#a5a5a6',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    }
});















// import React, { useState } from 'react';
// import { View, Text, Image, Button, FlatList, StyleSheet, ProgressBarAndroid, Platform } from 'react-native';

// const ImageCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//         { id: 1, source: require('./images/image1.jpg'), text: 'Image 1 Text' },
//         { id: 2, source: require('./images/image2.jpg'), text: 'Image 2 Text' },
//         { id: 3, source: require('./images/image3.jpg'), text: 'Image 3 Text' },
//         // Add more images as needed
//     ];

//     const handleNextButton = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const progressBarValue = (currentIndex + 1) / images.length;

//     return (
//         <View style={styles.container}>
//             {Platform.OS === 'android' && (
//                 <ProgressBarAndroid
//                     styleAttr="Horizontal"
//                     indeterminate={false}
//                     progress={progressBarValue}
//                     color="#2196F3"
//                 />
//             )}
//             <FlatList
//                 data={[images[currentIndex]]}
//                 renderItem={({ item }) => (
//                     <View style={styles.imageContainer}>
//                         <Image source={item.source} style={styles.image} />
//                         <Text style={styles.imageText}>{item.text}</Text>
//                     </View>
//                 )}
//                 keyExtractor={(item) => item.id.toString()}
//                 horizontal
//                 pagingEnabled
//             />
//             <Button title="Next" onPress={handleNextButton} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     imageContainer: {
//         width: '100%',
//         alignItems: 'center',
//     },
//     image: {
//         width: 300,
//         height: 200,
//         resizeMode: 'cover',
//         marginBottom: 10,
//     },
//     imageText: {
//         fontSize: 16,
//     },
// });

// export default ImageCarousel;
