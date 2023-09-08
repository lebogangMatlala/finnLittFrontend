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

const ModuleTwoSubFive = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Upon a successful login to the system, you will land on the home page, from where you can access the Income Tax Return by clicking the relevant hyperlink for the tax year, e.g., 2023:</Text>
        <Text style={styles.numText}>Follow the below steps:</Text>
        <Text style={styles.numText}>1.Click on “Returns”</Text>
        <Text style={styles.numText}>2.Click on “Returns Issued”</Text>
        <Text style={styles.numText}>3.Click on “Personal Income Tax (ITR12)”</Text>
        <Text style={styles.numText}>4.Select the relevant year and click on “Request Return” if it is not automatically issued.</Text>
        <Text style={styles.numText}>5.Click on “Returns Issued”</Text>
        <Text style={styles.numText}>6.Click on “Personal Income Tax (ITR12)”</Text>
        <Text style={styles.numText}>7.Click on “My Tax Return”</Text>
        <Text style={styles.numText}>8.Complete all the information.</Text>
        <Text style={styles.numText}>9.You can always click on “Save Return” and come back at a later stage.</Text>
        <Text style={styles.numText}>10.Before submitting you can click on “Calculate” to see an estimate of tax due by you or to you</Text>
        <Text style={styles.numText}>11.Once fully completed Click on “Submit Return”</Text>
        <Text style={styles.mainText}>Useful things to note:</Text>
        <BulletText>
            To check what information has been uploaded on your behalf go to “Third Party Data Certificate Search” on the left tab (IRP5, medical aid etc)
        </BulletText>
        <Text style={styles.mainText}>Updating Bank Account Details:</Text>
        <BulletText>
            SARS will notify you if are required to submit supporting documents to verify your banking details.
        </BulletText>
        <BulletText>
            REMEMBER: without the correct banking details SARS cannot pay you a refund, where it is due.
        </BulletText>
        <BulletText>
            If you’re unsure visit www.sarsefiling.co.za or contact SARS on 0800 00 7277.
        </BulletText>
    </View >

);

export default ModuleTwoSubFive;

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
        fontSize:16,
        fontWeight:'400',
        lineHeight:28
    },

})