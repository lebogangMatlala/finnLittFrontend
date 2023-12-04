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

const ModuleTwoSubFour = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Now that you have registered, before you start with your tax return make sure you have the following on hand:</Text>
        <Text style={styles.numText}>1. IRP5 Form from your employer</Text>
        <Text style={styles.numText}>2. Proof of medical expenses</Text>
        <Text style={styles.numText}>3. Your bank account confirmation letter</Text>
        <Text style={styles.numText}>4. Any other income, example interest earned on savings account or dividends from shares</Text>

        
    </View >

);

export default ModuleTwoSubFour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'white',
        // flexDirection: 'column', // Arrange children horizontally
    },
    componentContainer: {
        marginTop: 8,
        // borderWidth: 1,
        // borderColor: 'gray',
        padding: 20,

    },
    mainText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 27,
        paddingBottom: 30,
        fontFamily:'poppins-regular'
    },
    numText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 27,
        paddingBottom: 10,
        fontFamily:'poppins-regular'
    }

})