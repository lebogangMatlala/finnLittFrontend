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
        <View style={{marginTop:'-2%'}}>
            <Text style={styles.numText}>1.Credit Bureau Credit Score</Text>
            <Text style={styles.numText}>2.Custom Credit Scores</Text>
        </View>
       
        <View style={{marginTop:20,marginBottom:-15 }}>
            <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold', }}>Credit bureau credit scores:</Text></Text>
        </View>
        <Text style={styles.mainText}>As the name suggests, these are calculated by the credit bureaus. Each has a scoring system based on whether you are good payer or not that gives you a high-level overview of your credit profile. A high score indicates that you are a responsible payer.
            This, along with your employment history; your income and affordability assessments as well as the type of credit for which you are applying, may affect the outcome of your credit application.</Text>
        <View style={{ marginTop: 20, marginBottom: -15 }}>
            <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold', marginTop: 18}}>Custom credit scores:</Text></Text>
        </View>
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
        //marginTop: 20,
        // borderWidth: 1,
        // borderColor: 'gray',
        padding: 20,

    },
   normalText: {
        fontSize: 15,
        lineHeight: 27,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'
    },
    mainText: {
        fontSize: 15,
        lineHeight: 27,
        marginTop:18,
        marginBottom: 6,
        //paddingHorizontal: 15,
        fontFamily: 'poppins-regular'

    },
     numText: {
        fontSize: 16,
        lineHeight: 27,
        //marginBottom: 15,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'

    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingHorizontal: 20,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        fontSize: 16,
    },
    itemText: {
        flex: 1,
    },
    // bullet: {
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     marginBottom: 10,
    //     paddingHorizontal: 20,
    //     fontFamily: 'poppins-regular'
    // },
    bulletText: {
        //marginLeft: 10,
        //padding: 20,
        fontSize: 14,
        fontFamily: 'poppins-regular'
    },
    

})