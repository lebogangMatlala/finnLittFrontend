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

const ModuleThreeSubOne = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Banks and lenders will look at how you have been paying and whether you have been a good payer or not. This is shown in a credit score.</Text>
        <Text style={styles.mainText}>There are two types of credit scores:</Text>
        <Text style={styles.numText}>1.Credit Bureau Credit Score</Text>
        <Text style={styles.numText}>2.Custom Credit Scores</Text>
        <Text style={styles.mainText}>Credit bureau credit scores:</Text>
        <Text style={styles.mainText}>As the name suggests, these are calculated by the credit bureaus. Each has a scoring system based on whether you are good payer or not that gives you a high-level overview of your credit profile. A high score indicates that you are a responsible payer.
            This, along with your employment history; your income and affordability assessments as well as the type of credit for which you are applying, may affect the outcome of your credit application.</Text>
        <Text style={styles.mainText}>Custom credit scores:</Text>
        <Text style={styles.mainText}>These are determined by lenders. They look at information from their preferred credit bureau and additional information from your accounts with them. For example, if you apply for vehicle finance through the same lender that you have a home loan, they will also consider how reliable you've been at paying off your home loan before approving your new credit application.</Text>
    </View >

);

export default ModuleThreeSubOne;

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
    },
    numText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        paddingHorizontal: 15
    }

})