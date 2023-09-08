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

const BulletText = ({ children }) => (
    <Text style={styles.bullet}>
        {'\u2022'} <Text style={styles.bulletText}>{children}</Text>
    </Text>
);

const ModuleTwoSubSeven = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>A rebate is an amount by which SARS reduces the actual taxes owing depending on certain circumstances. SARS will calculate the amount of tax that you owe to them, based on your income and expenses throughout the year, then if certain conditions apply, they’ll reduce the amount due.</Text>
        <Text style={styles.mainText}>The most common rebate in tax terms is for age. The applicable amounts are adjusted annually but there are 3 different levels, subject to your age. </Text>
        <Text style={styles.numText}>1.Primary rebate – under 65 years</Text>
        <Text style={styles.numText}>2.Secondary rebate – between 65 and 75 years</Text>
        <Text style={styles.numText}>3.Tertiary rebate – over 75 years</Text>
        <Text style={styles.mainText}>Depending on your age group, you’ll qualify for the primary, secondary, or tertiary rebate, which will reduce your tax obligation to SARS. Nice!</Text>
    </View >

);

export default ModuleTwoSubSeven;

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
    main: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 27,
        marginBottom: 15
    },
    mainText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 20
    },
    numText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        paddingHorizontal:15
    },
    bullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    bulletText: {
        marginLeft: 8,
        padding: 10,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 28
    },

})