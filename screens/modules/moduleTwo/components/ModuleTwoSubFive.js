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

const BulletText = ({ children }) => (
    <Text style={styles.bullet}>
        {'\u2022'} <Text style={styles.bulletText}>{children}</Text>
    </Text>
);

const handleLinkPress = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.sarsefiling.co.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};

const ModuleTwoSubFive = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Upon a successful login to the system, you will land on the home page, from where you can access the Income Tax Return by clicking the relevant hyperlink for the tax year, e.g., 2023:</Text>
        <Text style={styles.numText}><Text style={{ fontFamily:'poppins-bold' }}>Follow the below steps:</Text></Text>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>1.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Returns”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>2.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Returns Issued”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>3.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Personal Income Tax (ITR12)”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>4.</Text>
            <Text style={styles.itemTextB}> Select the relevant year and click on <Text style={{ fontFamily: 'poppins-bold' }}>“Request Return”</Text> if it is not automatically issued.</Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>5.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Returns Issued”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>6.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Personal Income Tax (ITR12)”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>7.</Text>
            <Text style={styles.itemTextB}> Click on <Text style={{ fontFamily: 'poppins-bold' }}>“My Tax Return”</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>8.</Text>
            <Text style={styles.itemTextB}> Complete all the information.</Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>9.</Text>
            <Text style={styles.itemTextB}> You can always click on <Text style={{ fontFamily: 'poppins-bold' }}>“Save Return”</Text> and come back at a later stage.</Text>
        </View>
        <View style={styles.listItemA}>
            <Text style={styles.bulletB}>10.</Text>
            <Text style={styles.itemTextB}> Before submitting you can click on <Text style={{ fontFamily: 'poppins-bold' }}>“Calculate”</Text>to see an estimate of tax due by you or to you</Text>
        </View>
        <View style={styles.listItemA}>
            <Text style={styles.bulletB}>11.</Text>
            <Text style={styles.itemTextB}> Once fully completed Click on <Text style={{ fontFamily: 'poppins-bold' }}>“Submit Return”</Text></Text>
        </View>
        <View style={{ marginTop: '5%' }}>
            <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>Useful things to note:</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>{'\u2022'}</Text>
            <Text style={styles.itemTextB}>To check what information has been uploaded on your behalf go to “Third Party Data Certificate Search” on the left tab (IRP5, medical aid etc)</Text>
        </View>
        
        <View style={{ marginTop: '5%' }}>
            <Text style={styles.mainText}> <Text style={{ fontFamily: 'poppins-bold' }}>Updating Bank Account Details:</Text></Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>{'\u2022'}</Text>
            <Text style={styles.itemTextB}> SARS will notify you if are required to submit supporting documents to verify your banking details.</Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>{'\u2022'}</Text>
            <Text style={styles.itemTextB}>REMEMBER: without the correct banking details SARS cannot pay you a refund, where it is due.</Text>
        </View>
        <View style={styles.listItemB}>
            <Text style={styles.bulletB}>{'\u2022'}</Text>
            <Text style={styles.itemTextB}>If you’re unsure visit <Text style={{ fontFamily:'poppins-bold' }} onPress={handleLinkPress}>www.sarsefiling.co.za</Text> or contact SARS on 0800 00 7277.</Text>
        </View>
    </View >

);

export default ModuleTwoSubFive;

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
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        fontFamily: 'poppins-regular'
    },
    numText: {
        //fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'

    },
    bulletText: {
        marginLeft: 8,
        padding: 10,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 28,
        fontFamily: 'poppins-regular'
    },
    listItemB: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        lineHeight: 27,
        marginBottom: 8,
        paddingHorizontal: 12,
        fontFamily: 'poppins-regular'
    },
    listItemA: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingHorizontal: 2,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },
    bulletB: {
        fontSize: 15,
        lineHeight: 27,
        fontFamily:'poppins-regular'
    },
    itemTextB: {
        flex: 1,
        fontSize: 15,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },

})