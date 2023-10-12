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

const ModuleTwoSubTwo = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Before you register, Check if your employer has registered you with SARS and request you IRP5 form if not already provided. Don’t worry we will explain your IRP5 form to you.</Text>
        <Text style={styles.mainText}>If you are registered and forgetful like some of us, please contact <Text style={{ fontWeight: 'bold' }}>0800 00 7277</Text> in order to retrieve your username and password or you can also obtain your eFiling username and password by going to the SARS website <Text style={{ fontWeight: 'bold' }}>www.sarsefiling.co.za</Text> and clicking on forgot username or forgot password and then enter your ID or Passport number and contact details and lastly your tax reference number.</Text>
    </View >

);

export default ModuleTwoSubTwo;

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