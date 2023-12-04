import React from 'react';
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
    RefreshControl
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModuleThreeDashboardScreen({ navigation }) {
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    const handleDescription = () => {
        navigation.navigate("ModuleThreeContentScreen");
    }


    const goBack = () => {
        navigation.goBack();
    }

    const data = [
        { id: '3.1', text: 'What is a Credit Score' },
        { id: '3.2', text: 'Why is a credit score important?' },
        { id: '3.3', text: 'How to check what your Credit Score is' },
        { id: '3.4', text: 'What do I do if I have a judgement?' },
        { id: '3.5', text: 'How to improve my credit score' },


    ];

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white', marginTop: -40, }} contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <View style={styles.container}>
                    {/* Half screen with image */}

                    <ImageBackground
                        source={require('../../../assets/onboarding/module3.png')}
                        style={[styles.imageBackground, { height: halfScreenWidth }]}
                    >
                        <View style={styles.cardContent}>
                            <TouchableOpacity style={styles.sectionA} onPress={goBack}>
                                <Ionicons name="chevron-back" size={32} color="white"></Ionicons>
                            </TouchableOpacity>
                            <View style={styles.sectionB} >
                                <Text style={{ color: 'white', fontSize: 24, lineHeight: 30, fontFamily: 'poppins-extraBold' }}>Module 3: Getting Credit</Text>
                                <Text style={{ color: 'white', fontSize: 16, lineHeight: 27, fontFamily: 'poppins-medium' }}>Understanding credit score</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    {/* Half screen with white background */}

                    <View style={styles.container}>
                        <View style={[styles.whiteBackground, { paddingBottom: 50 }]}>
                            <View style={{ marginTop: '-10%' }}>
                                <View style={styles.section}>
                                    <Text style={styles.bold}>Overview:</Text>
                                    <Text style={styles.light}>Banks and lenders will look at how you have been paying and whether you have been a good payer or not. This is shown in a credit score.
                                    </Text>
                                    <Text style={styles.light}>There are two types of credit scores:
                                    </Text>
                                    <Text style={styles.itemText}>1. Credit Bureau Credit Score</Text>
                                    <Text style={styles.itemText}>2. Custom Credit Scores</Text>
                                    <Text style={styles.bold}>What will the module cover:</Text>
                                    <View >
                                        {data.map((item) => (
                                            <View key={item.id} style={styles.listItem}>
                                                <Text style={styles.itemText}>{`${item.id}. ${item.text}`}</Text>
                                            </View>
                                        ))}
                                    </View>

                                </View>

                            </View>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.button} onPress={handleDescription}>
                                    <Text style={styles.buttonText}>Start Learning</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <StatusBar
                            barStyle="auto" animated={false}
                            backgroundColor="#072a40"
                            translucent={true}
                        />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        fontFamily: 'poppins-regular' // Arrange children horizontally
    },
    bold: {
        fontSize: 20,
        //fontWeight: '700',
        lineHeight: 27,
        color: '#000C14',
        marginTop: 20,
        marginBottom: 5,
        fontFamily: 'poppins-bold'
    },
    scrollView: {
        height: '100%',
        width: '100%',
        //margin: 20,
        alignSelf: 'center',
        // padding: 20,
        // borderWidth: 5,
        // borderRadius: 5,
        // borderColor: 'black',
        // backgroundColor: 'lightblue'
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgrey',
        //paddingBottom: 50
    },
    light: {
        fontSize: 15,
        //fontWeight: '400',
        lineHeight: 27,
        color: '#000C14',
        marginTop: 4,
        marginBottom: 4,
        fontFamily: 'poppins-regular'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '1%'
    },
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 2,
    },
    itemText: {
        fontSize: 15,
        //fontWeight: '400',
        lineHeight: 32,
        marginRight: 10,
        fontFamily: 'poppins-regular'
    },
    cardContent: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'flex-start',
        borderRadius: 0,
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay background color
    },
    imageBackground: {
        flex: 1, // Take half of the screen width
        resizeMode: 'contain',
        //backgroundColor: 'white',
        //marginTop: "-15%",
        borderRadius: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //height:30
    },
    whiteBackground: {
        flex: 2, // Take the other half of the screen width
        backgroundColor: 'white',
        borderTopWidth: 30,
        borderTopColor: 'white',
        borderRadius: 25,
        marginTop: -65

    },
    image: {
        flex: 1,
        width: 146,
        height: 124,
        resizeMode: 'contain',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700'
    },
    sectionA: {
        marginTop: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 25,
        //backgroundColor:'pink',
        padding: 10,
        //width:'100%',

        // marginLeft: 28,
        // marginRight: 28,
        // borderBottomWidth: 1.5,
    },
    sectionB: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 90,
        paddingHorizontal: 25,
    },
    section: {

        // marginTop: '6%',

        alignItems: 'flex-start',
        borderColor: 'gray',
        borderRadius: 5,
        padding: 20,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 27


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
        //elevation: 2,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FBFBFB',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        //fontWeight: 'bold',
        fontFamily: 'poppins-semiBold'
    },
    termText: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: '#94999D'
    }
});