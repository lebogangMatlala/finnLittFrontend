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

const BoldFirstOneWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 1).join(' ');
    const restOfText = words.slice(1).join(' ');

    return (
        <Text>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const BoldFirstTwoWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 2).join(' ');
    const restOfText = words.slice(2).join(' ');

    return (
        <Text>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const BoldFirstThreeWords = ({ children }) => {
    const words = children.split(' ');
    const firstTwoWords = words.slice(0, 3).join(' ');
    const restOfText = words.slice(3).join(' ');

    return (
        <Text>
            <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
        </Text>
    );
};

const ModuleOneSubTwo = () => (

    <View>
        <View style={styles.componentContainer} >
            <Text style={styles.mainText}>A payslip is an important document for employees in South Africa for several reasons. A South African payslip template should include the following details:</Text>
        </View >

        <BulletText>
            <BoldFirstTwoWords>
                Employee Details: This should include the employees name, employee number, and pay period.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Gross Pay: This is the total amount earned by the employee before deductions. It should include the basic salary, overtime pay, bonuses, and other allowances.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstOneWords>
                Deductions: This should include all deductions made from the employees gross pay. These deductions may include tax, UIF (Unemployment Insurance Fund), Pension/Provident Fund, and Medical Aid contributions
            </BoldFirstOneWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Net Pay: This is the total amount paid to the employee after all deductions have been made.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Company Information: The payslip should include the company name, company logo, physical address, and contact details.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            <BoldFirstTwoWords>
                Payment Information: This should include the bank name, account number, and branch code where the employee’s salary is paid into.
            </BoldFirstTwoWords>
        </BulletText>
        <BulletText>
            Payslips may also show other employee information such as the amount of leave owed or used.
        </BulletText>

    </View>



);

export default ModuleOneSubTwo;

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
    mainText: {
        fontSize: 16,
        lineHeight: 27,
        marginBottom: 15,
        paddingHorizontal: 15

    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27
    },
    bullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 25
    },
    bulletText: {
        marginLeft: 10,
        padding: 20
    },

})