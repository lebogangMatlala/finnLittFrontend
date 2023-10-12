import React, { useEffect } from 'react';
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
    UIManager
} from 'react-native';
import { AccordionList } from 'react-native-accordion-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FAQScreen({ navigation }) {

    const data = [
        {
            id: 0,
            title: '1.What is FINNLITT',
            body: "It is a proactive finance learning app, to help you improve your financial literacy.",
        },
        {
            id: 1,
            title: '2.What modules are covered in Phase 1?',
            body: "2.1 Payslip Module \n2.2.Tax Module - Basics \n2.3.Understanding Credit Score",
        }
        ,
        {
            id: 2,
            title: '3.Can anyone gain access to FINNLITT?',
            body: "Yes, anyone of all ages and gender can gain access to FINNLITT.",
        },
        {
            id: 3,
            title: '4.Is there a cost to use FINNLITT? ',
            body: "There is no cost, FINNLITT Basic is a free offering. ",
        }
        ,
        {
            id: 4,
            title: '5.Can I download the App on more than one device? ',
            body: "You can have only one Mobile App on a Device at a time, but you can download the Mobile App onto as many Devices as you require. ",
        },
        {
            id: 5,
            title: '6.Will I be required to re-register for each device download? ',
            body: "You do not need to re-register for each Device, but you must login as normal with your Digital Identity.",
        }
        ,
        {
            id: 6,
            title: '7.Will FINNLITT offer more phases ',
            body: "Yes, the intention is to expand the offering to include more content per module and additional advanced modules. ",
        },
        {
            id: 7,
            title: '8.Can I contact FINNLITT',
            body: "Yes, we would love to get feedback on our App and address any other questions you have",
        }
        ,
        {
            id: 8,
            title: '9.How can I get in touch with FINNLITT',
            body: "Please refer to our website www.finnlitt.co.za for all contact details. ",
        }
        ,
        {
            id: 9,
            title: '10.Is FINNLITT an FSP (Financial Services Provider) ? ',
            body: "No, FINNLITT is a learning app and not an FSP",
        },
    ];

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    return (
      
        <View style={styles.container}>
            {/* <ScrollView contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}> */}
            <View style={styles.container}>
                <View style={{ marginTop: '5%', alignContent: 'center' }}>
                    <View style={styles.imageCont}>
                        <Image source={require('../assets/icons/Subtract.png')} style={styles.image} />
                        <Text style={{ alignItems: 'center', fontWeight: '700', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15 }}>FAQ</Text>
                    </View>
                    <View style={styles.contList}>
                        <AccordionList
                            data={data}
                            customTitle={(item) => {
                                return (
                                    <View>
                                        <View style={{ flex: 1, alignItems: "flex-start", }}>
                                            <Text style={{ fontSize: 14, }}>{item.title}</Text>

                                        </View>
                                    </View>
                                );
                            }}
                            customBody={(item) => {
                                return (
                                    <View
                                        style={{
                                            shadowColor: "#000",
                                            flex: 1,
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.2,
                                            shadowRadius: 2.84,
                                            elevation: 2,
                                            backgroundColor: "#fff",
                                            borderRadius: 10,
                                            marginTop: 2,
                                            zIndex: -1,
                                            paddingVertical: 20,
                                            // borderTopWidth:1,
                                            // borderTopColor:'black'
                                        }}
                                    >
                                        <View style={{ flex: 1, alignItems: "flex-start", }}>
                                            <Text style={{ fontSize: 14, padding: 2 }}>{item.body}</Text>

                                        </View>


                                    </View>
                                );
                            }}
                            animationDuration={400}
                            expandMultiple={true}
                            containerItemStyle={{ borderBottomWidth: 1, fontSize: 20, fontWeight: '600', lineHeight: 21, justifyContent: 'center' }}

                        />
                    </View>
                </View>
               
                <StatusBar
                    barStyle="auto" animated={false}
                    backgroundColor="#072a40"
                />
            </View>
        {/* </ScrollView> */}
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    contList: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        //height: 'auto',
        //backgroundColor: 'pink',
        borderBottomColor: 'black',

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
        marginTop: '10%'

    },
    scrollViewContent: {
        flexGrow: 1,
        //alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
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