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
    Alert
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';

const ModuleTwoSubThree = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>You can sign-up to use the SARS eFilling service (Web or App), which allows you not only to file a return, make payments to SARS, but also gives you access to many other benefits via an electronic platform.</Text>
        <Text style={styles.mainText}>After you complete the registration process via the link provided, SARS will verify the information captured during the registration process. The outcome of this will be communicated on your eFilling verification page or via email. Once your registration is successful, a One Time Pin (OTP) will be sent to your preferred channel of communications to validate and complete the registration process.</Text>
        <Text style={styles.mainText}>Visit www.sarsefiling.co.za and click on register.</Text>
        <Text style={styles.mainText}>Upon successful registration, you can proceed to login to eFilling and start your income tax return process, click next to gain more information on what will be required.</Text>
    </View >

);

export default ModuleTwoSubThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        // flexDirection: 'column', // Arrange children horizontally
    },
    componentContainer: {
        marginTop: 20,
        // borderWidth: 1,
        // borderColor: 'gray',
        padding: 15,

    },
    mainText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 30
    }

})