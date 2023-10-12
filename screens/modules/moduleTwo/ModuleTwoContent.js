import React, { useState } from 'react';
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
    FlatList,
    useWindowDimensions,
    Picker,
    Button,
    Alert,
    Modal
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import ModuleTwoSubOne from './components/ModuleTwoSubOne';
import ModuleTwoSubTwo from './components/ModuleTwoSubTwo';
import ModuleTwoSubThree from './components/ModuleTwoSubThree';
import ModuleTwoSubFour from './components/ModuleTwoSubFour';
import ModuleTwoSubFive from './components/ModuleTwoSubFive';
import ModuleTwoSubSix from './components/ModuleTwoSubSix';
import ModuleOneDashboardScreen from '../moduleOne/ModuleOneDashboard';
import ModuleTwoSubSeven from './components/ModuleTwoSubSeven';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ModuleOneSubOne from './components/ModuleOneSubOne';
// import ModuleOneSubTwo from './components/ModuleOneSubTwo';

//dummy components which will be replaced by original components 




export default function ModuleTwoContentScreen({ navigation }) {
    const screenWidth = Dimensions.get('window').height;
    const halfScreenWidth = screenWidth / 2;

    const windowDimensions = useWindowDimensions();
    const statusBarHeight = StatusBar.currentHeight || 0;

    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState(null);

    const { height, width } = Dimensions.get('window');
    const isIpad = width > 768 && height > 1024;

    const containerStyle = {
        paddingTop: statusBarHeight,
        height: windowDimensions.height,
    };

    const handleRegister = () => {
        navigation.navigate("Registration");
    }

    const goBack = () => {
        navigation.goBack();
    }

    const data = [
        { id: '1.1', text: 'Intro to your pay slip' },
        { id: '1.2', text: 'How to interpret your payslip' },
    ];

    const components = [ModuleTwoSubOne, ModuleTwoSubTwo, ModuleTwoSubThree, ModuleTwoSubFour, ModuleTwoSubFive, ModuleTwoSubSix, ModuleTwoSubSeven];
    const dropdownOptions = ['2.1. Do I have to pay taxes?', '2.2. Where do I start?', '2.3. Where do I start?', '2.4. What do you need before you get started?', '2.5. How to complete a tax return', '2.6. What do I do when SARS sends me messages!', '2.7. What do I do when SARS sends me messages!'];
    const mainTitles = ['2.1. Do I have to pay taxes?', '2.2. Where do I start?', '2.3. Where do I start?', '2.4. What do you need before you get started?', '2.5. How to complete a tax return', '2.6. What do I do when SARS sends me messages!', '2.7. What do I do when SARS sends me messages!'];
    const [selectedOption, setSelectedOption] = useState(0);


    const handleNextButton = () => {
        if (selectedOption < components.length - 1) {
            setSelectedOption(selectedOption + 1);
        } else {
            setModalVisible(true);
        }
    };

    const handleDropdownSelect = (index) => {
        setSelectedOption(index);
    };
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const handleYesPress = () => {
        navigation.navigate('DashTabs', {
            screen: 'Dash',
            params: { user: user },

        })
        closeModal();
    };

    const handleNoPress = () => {
        // Handle 'No' button click here
        navigation.navigate('ModuleThreeContentScreen');
        console.log('No button clicked');
        closeModal();
    };

    useEffect(() => {
        const getDataFromAsyncStorage = async () => {
            try {
                const storedData = await AsyncStorage.getItem('user'); // Replace 'myKey' with your storage key
                if (storedData !== null) {
                    // Data found in storage
                    setUser(storedData);
                } else {
                    // Data not found in storage
                    setUser('No data found');
                }
            } catch (error) {
                // Handle error here
                console.error('Error retrieving data:', error);
            }
        };

        getDataFromAsyncStorage();
    }, []);

    return (


        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <ScrollView style={[styles.scrollViewContent, isIpad && styles.scrollViewContentIpad]} contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <View style={styles.container}>
                    {/* Half screen with image */}


                    <ImageBackground
                        source={require('../../../assets/onboarding/module2.png')}
                        style={[styles.imageBackground, { height: halfScreenWidth }]}
                    >
                        <View style={styles.cardContent}>
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.sectionA} onPress={goBack}>
                                    <Ionicons name="chevron-back" size={32} color="white"></Ionicons>
                                </TouchableOpacity>
                                <SelectDropdown
                                    data={dropdownOptions}
                                    onSelect={(selectedItem, index) => handleDropdownSelect(index)}
                                    defaultButtonText={dropdownOptions[selectedOption]}
                                    buttonStyle={styles.dropdown1BtnStyle}
                                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                    renderDropdownIcon={isOpened => {
                                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                    }}
                                    dropdownIconPosition={'right'}
                                    dropdownStyle={styles.dropdown1DropdownStyle}
                                    rowStyle={styles.dropdown1RowStyle}
                                    rowTextStyle={styles.dropdown1RowTxtStyle}
                                />
                            </View>

                            <View style={styles.sectionB} >
                                <Text style={{ color: 'white', fontSize: 22, fontWeight: '800', lineHeight: 33 }}>{mainTitles[selectedOption]}</Text>

                            </View>

                        </View>
                    </ImageBackground>

                    {/* Half screen with white background */}
                    <View style={[styles.whiteBackground, { paddingBottom: 50 }]}>
                        {components[selectedOption]()}


                        <View style={styles.content}>
                            <TouchableOpacity style={styles.button} onPress={handleNextButton}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Modal */}
                    <Modal
                        animationType="slide" // Change animation type as needed
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={closeModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.subOneText}>Module
                                    <Text style={styles.subTwoText}>Complete</Text>
                                </Text>
                                <Text style={styles.modalText}><Text style={{ fontWeight: '800' }}>Congratulations</Text> on completing Module 2. You should now have a better grasp on taxes and SARS! </Text>
                                <Text style={styles.modalText}>Module 3 centers around understanding your credit score. You can continue to the next module or you can return to the homepage.</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={handleYesPress} style={[styles.buttonModalTwo, { width: '45%' }]}>
                                        <Text style={styles.buttonTextTwo}>Home</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleNoPress} style={[styles.buttonModal, { width: '45%' }]}>
                                        <Text style={styles.buttonText}>Module 3




                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    <StatusBar
                        barStyle="auto" animated={false}
                        backgroundColor="#072a40"
                    />
                </View>
            </ScrollView >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //flexDirection: 'column', // Arrange children horizontally
    },
    scrollViewContent: {
        flex: 1, backgroundColor: 'white', marginTop: '-8%'
    },
    scrollViewContentIpad: {
        flex: 1, backgroundColor: 'white', marginTop: '-2.5%'
    },
    modalText: {
        textAlign: 'center',
        padding: 5,
        fontSize: 12,
        fontWeight: '400'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    componentContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
    },
    bold: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 27,
        color: '#000C14',
        marginBottom: 5
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
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 27,
        color: '#000C14',
        marginBottom: 15
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'

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
        padding: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay background color
    },
    imageBackground: {
        flex: 1, // Take half of the screen width
        resizeMode: 'contain',
        //backgroundColor: 'white',
        //marginTop: "-15%",
        borderRadius: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        //height:30
    },
    whiteBackground: {
        //flex: 2, // Take the other half of the screen width
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
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
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
        // borderColor: 'gray',
        // borderRadius: 5,
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
    },
    dropdown1BtnStyle: {
        width: '60%',
        height: 44,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});