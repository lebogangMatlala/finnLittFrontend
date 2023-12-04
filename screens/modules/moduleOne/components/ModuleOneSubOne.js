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
    <View style={styles.listItem}>
        <Text style={styles.bullet}>{'\u2022'}  </Text>
        <Text style={styles.itemText}>{children}</Text>
    </View>
    // <Text style={styles.bullet}>
    //     {'\u2022'} <Text style={styles.bulletText}>{children}</Text>
    // </Text>
);

const BoldFirstOneWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 1).join(' ');
    const restOfText = words.slice(1).join(' ');

    return (
        <Text style={styles.normalText}>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const BoldFirstTwoWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 2).join(' ');
    const restOfText = words.slice(2).join(' ');

    return (
        <Text style={styles.normalText}>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const BoldFirstThreeWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 3).join(' ');
    const restOfText = words.slice(3).join(' ');

    return (
        <Text style={styles.normalText}>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const ModuleOneSubOne = () => (

    <View>
        <View style={styles.componentContainer} >
            <Text style={styles.mainText}>A payslip is an important document for employees for several reasons:</Text>
        </View >

        <BulletText>
            <BoldFirstThreeWords>
                Record of Earnings: The payslip serves as a record of the employees earnings and deductions for a given period. This is important for tax purposes, as the employee may need to provide proof of income to government agencies or financial institutions.
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Tax Purposes: The payslip contains information about the amount of tax that has been deducted from the employees earnings. This information is used by the South African Revenue Service (SARS) to calculate the employee’s tax liability and to ensure that the correct amount of tax is being paid.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Benefit Claims: Payslips may be required by employees to make claims for benefits such as unemployment insurance or medical aid.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstOneWords>
                Budgeting: The payslip provides employees with a clear understanding of their earnings and expenses, which is useful for budgeting and financial planning.
            </BoldFirstOneWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Employee Rights: The payslip serves as evidence of the terms of employment and the deductions made from the employee’s earnings. This is important in ensuring that employees are paid the correct amount and that their rights are protected.
            </BoldFirstTwoWords>
        </BulletText>

    </View>



);

export default ModuleOneSubOne;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'flex-start',
    //     padding: 20,
    //     //backgroundColor: 'white',
    //     // flexDirection: 'column', // Arrange children horizontally
    // },
    componentContainer: {
        // marginTop: 10,
        // borderWidth: 1,
        // borderColor: 'gray',
        // padding: 5,
    },
    normalText:{
        fontSize: 15,
        lineHeight: 27,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'
    },
    mainText: {
        fontSize: 16,
        lineHeight: 27,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'

    },
    boldText: {
        //fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 27,
        fontFamily: 'poppins-bold'
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        paddingHorizontal: 20,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        fontSize:16 ,
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