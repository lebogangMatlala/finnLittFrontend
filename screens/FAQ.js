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
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 1,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
        ,
        {
            id: 2,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                {/* <ScrollView> */}
                <View style={styles.container}>
                    <View style={{ marginTop: '5%', alignContent: 'center' }}>
                        <View style={styles.imageCont}>
                            <Image source={require('../assets/icons/Subtract.png')} style={styles.image} />
                            <Text style={{ alignItems: 'center', fontWeight: '700', fontSize: 24, lineHeight: 36, color: '#123F5C', paddingHorizontal: 15 }}>FAQ</Text>
                        </View>
                        <View style={styles.contList}>
                            <AccordionList
                                data={data}
                                 //customTitle={item => <Text>{item.title}</Text>}
                                // customBody={item => <Text>{item.body}</Text>}
                                customTitle={(item) => {
                                    return (
                                        <View
                                            // style={{
                                            //     shadowColor: "#000",
                                            //     flex: 1,
                                            //     // shadowOffset: {
                                            //     //     width: 0,
                                            //     //     height: 1,
                                            //     // },
                                            //     // shadowOpacity: 0.2,
                                            //     // shadowRadius: 2.84,
                                            //     // elevation: 2,
                                            //     // backgroundColor: "#fff",
                                            //     // borderRadius: 10,
                                            //     marginTop: 2,
                                            //     zIndex: -1,
                                            //     paddingVertical: 20,
                                            //     borderBottomWidth: 1,
                                            //     borderBottomColor: 'black'
                                            // }}
                                        >
                                            <View style={{ flex: 1, alignItems: "flex-start", }}>
                                                <Text style={{ fontSize: 16, padding: 2 }}>{item.title}</Text>
                                               
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
                                containerItemStyle={{borderBottomWidth:1,fontSize:20,fontWeight:'600',lineHeight:21,justifyContent:'center'}}
                                
                            />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>


                    <StatusBar
                        barStyle="auto" animated={false}
                        backgroundColor="#072a40"
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

    },
    contList: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        //height: 'auto',
        //backgroundColor: 'pink',
        borderBottomColor:'black'
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