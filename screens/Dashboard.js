import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import ImageCard from '../components/ImageCard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';

export default function DashboardScreen({ navigation, route }) {

    const { user } = route.params;
    const [authenticated, setauthenticated] = useState(null);
    const [userData, setUserData] = useState(null);

    const data = JSON.parse(user);
    const id = data.id;
    

    const username=data.name;

    useEffect(() => {
        setUserData(data);
    }, []);

   

    const handleLogin = () => {
        navigation.navigate("Login");
    }
    const goToModuleOne = (item) => {

        if (item === 0) {
            console.log(item + ' Module 1');
            navigation.navigate("ModuleOneDashboardScreen");
        } else if (item === 1) {
            console.log(item + ' Module 2');
            navigation.navigate("ModuleTwoDashboardScreen");
        } else if (item === 2) {
            console.log(item + ' Module 3');
            navigation.navigate("ModuleThreeDashboardScreen");
        }
        
    }

    const BoldFirstWord = ({ children }) => {
        const words = children.split(' ');
        const firstTwoWords = words.slice(0, 1).join(' ');
        const restOfText = words.slice(1).join(' ');

        return (
            <Text>
                <Text style={styles.subOneText}>{firstTwoWords}
                    <Text style={styles.subTwoText}>{restOfText}</Text>
                </Text> 
            </Text>
        );
    };

    

    const windowDimensions = useWindowDimensions();
    const statusBarHeight = StatusBar.currentHeight || 0;

    const containerStyle = {
        paddingTop: statusBarHeight,
        height: windowDimensions.height,
    };


    const handleWelcome = () => {
        navigation.navigate("Welcome");
    }

    const imageCardsData = [
        {
            id: 0,
            title: 'Module 1\npayslips',
            desc: 'Understanding\nyour pay slip',
            imageSource: require('../assets/onboarding/Module1Image.png'),
            time: 'Time to read: +/- 35min'
        },
        {
            id: 1,
            title: 'Module 2\nTaxes',
            desc: 'Filing\nyour taxes',
            imageSource: require('../assets/onboarding/Module2Image.png'),
            time: 'Time to read: +/- 45min'
        },
        {
            id: 2,
            title: 'Module 3\nCredit Score',
            desc: 'Understanding\ncredit score',
            imageSource: require('../assets/onboarding/Module3Image.png'),
            time: 'Time to read: +/- 30min'
        },
    ];

    if (!userData) {
        // Handle loading state, e.g., show a loading indicator.
        return <Text>Loading...</Text>;
    }
    return (

        <View style={[styles.container, containerStyle]}>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Text style={styles.mainText}>Welcome</Text>
                  
                    <View style={styles.cont}>
                        {userData ? (
                            <BoldFirstWord>
                                {userData.name}
                            </BoldFirstWord>
                        ) : (
                            <Text>Loading...</Text>
                        )}
                        <Text style={styles.mainPara}>We know finances and adulting can be a bit daunting,
                            so we’ve simplified it for you. Our modules will help
                            you gain an understanding of your finances and better your financial literacy.</Text>
                    </View>
                    <View  >
                        {imageCardsData.map((card, index) => (
                            <TouchableOpacity key={card.id} style={styles.imageContainer} onPress={() => goToModuleOne(card.id)}>
                                <ImageBackground source={card.imageSource} style={styles.imageBackground}>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.title}>{card.title}</Text>
                                        <Text style={styles.description}>{card.desc}</Text>
                                        <Text style={styles.time}>{card.time}</Text>

                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>


                        ))}
                        {/* <FlatList
                            data={imageCardsData}
                            renderItem={renderModule}
                            keyExtractor={(item) => item.id}
                            numColumns={1} // Number of columns in the grid
                            columnWrapperStyle={styles.moduleColumn} // Adjust spacing between columns
                        /> */}
                    </View>
                </View>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: 156,
        resizeMode: 'stretch',
        marginTop: 20,
        // paddingRight:-20,
        // paddingRight:20,
        justifyContent: 'space-between',

    },
    cardContent: {
        flex: 1,
        width: '50%',
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'flex-start',
        borderRadius: 20,
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay background color
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
        lineHeight: 19.5,
        marginBottom: 5,
    },

    description: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: 'white',
    }
    ,
    scrollViewContent: {
        // paddingHorizontal: 10,
        // paddingVertical: 10,
    },
    time: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: 'white',
        marginTop: 15,
        justifyContent: 'flex-end',
    },
    boldText: {
        fontWeight: 'bold',
    },
    mainText: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
        color: '#000C14',
        fontSize: 16,
        // fontFamily:'Poppins',
        lineHeight: 24,
        fontWeight: '300',

    }
    ,
    card: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        padding: 20,
        marginBottom: 50,
        marginTop: 50,
        alignItems: 'center',
        //paddingHorizontal:10
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'contain'
        // borderRadius: 40,
        // marginBottom: 10,
    },
    button: {
        backgroundColor: '#226188',
        padding: 10,
        borderRadius: 42,
        marginTop: 180,
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
    },
    buttonText: {
        textAlign: 'center',
        color: '#FBFBFB',
        fontSize: 18,
        // fontFamily:'Poppins',
        lineHeight: 27,
        fontWeight: '600',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    textContainer: {
        flex: 2, // Take 2/3 of the available width
        paddingLeft: 16,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27
    },
    text: {
        fontSize: 16,
    },
    cont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 20
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
    mainPara: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#000C14',
        fontSize: 12,
        //fontFamily:'Poppins',
        lineHeight: 18,
        fontWeight: '300',
    }
});