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

const ModuleTwoSubSix = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.main}>Just take a breath, do not panic.</Text>
        <Text style={styles.mainText}>Login and the messages will either appear on the home screen or do the following:</Text>
        <BulletText>
            Click on <Text style={{fontFamily:'poppins-bold'}}>“SARS Correspondence”</Text>
        </BulletText>
        <BulletText>
            Follow the instructions.
        </BulletText>
    </View >

);

export default ModuleTwoSubSix;

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
    main:{
        //fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        marginBottom:15,
        fontFamily:'poppins-bold'
    },
    mainText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 27,
        paddingBottom: 20,
        fontFamily:'poppins-regular'
    },
    numText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10
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
        fontSize: 15,
        //fontWeight: '400',
        lineHeight: 28,
        fontFamily:'poppins-regular'
    },

})