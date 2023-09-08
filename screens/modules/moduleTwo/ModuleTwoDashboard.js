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

export default function ModuleTwoDashboardScreen({ navigation }) {
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    const handleDescription = () => {
        navigation.navigate("ModuleTwoContentScreen");
    }

    const goBack = () => {
        navigation.navigate("Dashboard");
    }

    const data = [
        { id: '2.1', text: 'Do I have to pay taxes?' },
        { id: '2.2', text: ' Where do I start?' },
        { id: '2.3', text: ' How do I register?' },
        { id: '2.4', text: ' What you will need to complete a tax oo return' },
        { id: '2.5', text: ' How do I complete my tax return?' },
        { id: '2.6', text: ' What do I do when SARS sends me messages?' },
        { id: '2.7', text: ' What is a rebate?' },

    ];

    return (


        <ScrollView>
            <View style={styles.container}>
                {/* Half screen with image */}
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../../assets/onboarding/module2.png')}
                        style={[styles.imageBackground, { height: halfScreenWidth }]}
                    >
                        <View style={styles.cardContent}>
                            <TouchableOpacity style={styles.sectionA} onPress={goBack}>
                                <Ionicons name="chevron-back" size={32} color="white"></Ionicons>
                            </TouchableOpacity>
                            <View style={styles.sectionB} >
                                <Text style={{ color: 'white', fontSize: 28, fontWeight: '800', lineHeight: 30 }}>Module 2: Taxes</Text>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', lineHeight: 27 }}>Filing your taxes</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    {/* Half screen with white background */}
                </View>
                <View style={styles.container}>
                    <View style={[styles.whiteBackground, { paddingBottom: 50 }]}>
                        <View style={{ marginTop: '5%' }}>
                            <View style={styles.section}>
                                <Text style={styles.bold}>Overview:</Text>
                                <Text style={styles.light}>When it comes to your taxes, you do not need to run in fear, just breathe. We have decoded it for you and put it into simple English so it is easier to understand.</Text>
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

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column', // Arrange children horizontally
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'

    },

    light: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 27,
        color: '#000C14',
        marginBottom: 15
    },
    bold: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        color: '#000C14',
        marginBottom: 5
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
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 32,
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        ///margin:10,
        justifyContent: 'flex-start',
        borderRadius: 0,
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay background color
    },
    imageBackground: {
        flex: 1, // Take half of the screen width
        resizeMode: 'contain',
        backgroundColor: 'white',
        //marginTop: "",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 30
    },
    whiteBackground: {
        backgroundColor: 'white',
        borderTopWidth: 30,
        borderTopColor: 'white',
        borderRadius: 25,
        marginTop: -35

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
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        // borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        // marginLeft: 28,
        // marginRight: 28,
        // borderBottomWidth: 1.5,
    },
    sectionB: {
        marginTop: '100%',
        marginBottom: '10%',
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        paddingHorizontal: 20,
    },
    section: {

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