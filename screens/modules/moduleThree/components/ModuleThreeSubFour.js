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

const ModuleThreeSubFour = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>Try to make the agreed repayment issued by the court. Once paid in full, you can go to the court where the judgment was issued and request it to be removed.</Text>
        <Text style={styles.mainText}>It could also indicate that there could be a problem with the information contained in your credit report. It could alert you to the fact that you need to investigate and possibly challenge some of the information contained in your credit report – before you apply for that all important loan.</Text>
       
        <Text style={styles.mainText}>Please contact the Credit Bureaus to resolve as detailed in previous section.</Text>
        
    </View >

);

export default ModuleThreeSubFour;

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
        //paddingHorizontal: 15,
        fontFamily: 'poppins-regular'
    },
    mainText: {
        fontSize: 16,
        lineHeight: 27,
        marginBottom: 18,
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