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

const ModuleThreeSubFive = () => (

    <View style={styles.componentContainer} >
        <BulletText>Open clothing account – don’t utilize in full and make regular payments.</BulletText>
        <BulletText>No judgements</BulletText>
        <BulletText>Credit Card account – don’t exceed your limit and make regular payments.</BulletText>
        <BulletText>Cellular contracts – pay on time or with a debit order.</BulletText>
        <BulletText>Settle debts on time</BulletText>
        <BulletText>Don’t miss payments.</BulletText>
        <BulletText>Pay slightly more than your monthly installment and try to pay your accounts on the same dates each month. By going above, the minimum requirements, you’re showing your creditors you’re eager to settle your debt. For example, if you owe R500 and your monthly installment is R50, you could make a monthly payment of R70 each month, and make sure it gets done on the 28th of each month.</BulletText>
        

    </View >

);

export default ModuleThreeSubFive;

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
    },
    bullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 15
    },
    bulletText: {
        marginLeft: 10,
        padding: 20,
        fontSize: 16,
        lineHeight: 27
    },


})