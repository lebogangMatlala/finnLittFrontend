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

const ModuleThreeSubTwo = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>All the credit information in your credit report contributes towards the calculation of your credit score.
        </Text>
        <Text style={styles.mainText}>So, if you want to apply for credit to buy a home or car, for example, or to apply for an increase in your credit limit, your credit score can serve as a guide. A poor, unfavourable, or below average score indicates that you have some work to do to improve your credit risk rating.</Text>

    </View >

);

export default ModuleThreeSubTwo;

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
        paddingBottom: 10
    },
    numText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        paddingHorizontal: 15
    }

})