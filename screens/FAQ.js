import React, { useEffect, useState } from 'react';
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
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export default function FAQScreen({ navigation }) {

    const data = [
        {
            id: 0,
            title: 'What is FINNLITT',
            body: "It is a proactive finance learning app, to help you improve your financial literacy.",
        },
        {
            id: 1,
            title: 'What modules are covered in Phase 1?',
            body: "1. Payslip Module \n2. Tax Module - Basics \n3. Understanding Credit Score",
        }
        ,
        {
            id: 2,
            title: 'Can anyone gain access to FINNLITT?',
            body: "Yes, anyone of all ages and gender can gain access to FINNLITT.",
        },
        {
            id: 3,
            title: 'Is there a cost to use FINNLITT? ',
            body: "There is no cost, FINNLITT Basic is a free offering. ",
        }
        ,
        {
            id: 4,
            title: 'Can I download the App on more than \none device? ',
            body: "You can have only one Mobile App on a Device at a time, but you can download the Mobile App onto as many Devices as you require. ",
        },
        {
            id: 5,
            title: 'Will I be required to re-register for each device download? ',
            body: "You do not need to re-register for each Device, but you must login as normal with your Digital Identity.",
        }
        ,
        {
            id: 6,
            title: 'Will FINNLITT offer more phases ',
            body: "Yes, the intention is to expand the offering to include more content per module and additional advanced modules. ",
        },
        {
            id: 7,
            title: 'Can I contact FINNLITT',
            body: "Yes, we would love to get feedback on our App and address any other questions you have",
        }
        ,
        {
            id: 8,
            title: 'How can I get in touch with FINNLITT',
            body: "Please refer to our website www.finnlitt.co.za for all contact details. ",
        }
        ,
        {
            id: 9,
            title: 'Is FINNLITT an FSP (Financial Services \nProvider) ? ',
            body: "No, FINNLITT is a learning app and not an FSP",
        },
    ];
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (item) => {
        if (openItems.includes(item)) {
            setOpenItems(openItems.filter((i) => i !== item));
        } else {
            setOpenItems([...openItems, item]);
        }
    };
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
                        <Image source={require('../assets/iconsTab/FAQActive.png')} style={styles.image} />
                        <Text style={{ alignItems: 'center', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15, fontFamily: 'poppins-bold' }}>FAQ</Text>
                    </View>
                    <View style={styles.contList}>
                        <AccordionList
                            data={data}
                            customTitle={(item) => (
                                <View>
                                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'poppins-semiBold' }}>{item.title}</Text>

                                    </View>
                                </View>
                            )}
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
                                            // elevation: 2,
                                            backgroundColor: "#fff",
                                            borderRadius: 10,
                                            marginTop: -12,
                                            //marginBottom: 1,
                                            zIndex: -1,
                                            paddingVertical: 10,
                                            // borderTopWidth:1,
                                            // borderTopColor:'black'
                                        }}
                                    >
                                        <View style={{ flex: 1, alignItems: "flex-start", }}>
                                            <Text style={{ fontSize: 12, padding: 2, fontFamily: 'poppins-regular' }}>{item.body}</Text>

                                        </View>
                                    </View>
                                );
                            }}
                            animationDuration={400}
                            expandMultiple={true}
                            containerItemStyle={{ borderBottomWidth: 1, fontSize: 20, fontWeight: '600', lineHeight: 21, justifyContent: 'center' }}
                            topDivider={true} // Add top divider
                            expandFromBottom={true}
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
        fontFamily: 'poppins-regular'

    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingHorizontal: 20,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        fontSize: 16,
    },
    itemText: {
        flex: 1,
    },
    contList: {
        //paddingVertical: '-20%',
        paddingHorizontal: '3%',
        //height: 'auto',
        //backgroundColor: 'pink',
        borderBottomColor: 'black',
        marginBottom: '50%'

    },
    imageCont: {
        marginTop: "6%",
        marginBottom: "6%",
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