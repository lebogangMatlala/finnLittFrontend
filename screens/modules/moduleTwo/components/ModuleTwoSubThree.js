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
    Linking
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
const handleLinkPress = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.sarsefiling.co.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};
const ModuleTwoSubThree = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>You can sign-up to use the SARS eFilling service (Web or App), which allows you not only to file a return, make payments to SARS, but also gives you access to many other benefits via an electronic platform.</Text>
        <Text style={styles.mainText}>After you complete the registration process via the link provided, SARS will verify the information captured during the registration process. The outcome of this will be communicated on your eFilling verification page or via email. Once your registration is successful, a One Time Pin (OTP) will be sent to your preferred channel of communications to validate and complete the registration process.</Text>
        <Text style={styles.mainText}>Visit <Text style={{ fontWeight: 'bold' }} onPress={handleLinkPress}>www.sarsefiling.co.za</Text> and click on register.</Text>
        <Text style={styles.mainText}>Upon successful registration, you can proceed to login to eFilling and start your income tax return process, click next to gain more information on what will be required.</Text>
    </View >

);

export default ModuleTwoSubThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    componentContainer: {
        marginTop: 8,
        padding: 20,

    },
    mainText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 27,
        paddingBottom: 30,
        fontFamily:'poppins-regular'
    }

})