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

const ModuleTwoSubOne = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>If you earn a total combined income that is either salary wages, or commission in excess of the tax threshold of R91250 yearly for 2023, you will be required to register with SARS and submit your tax return even though your employer deducts PAYE monthly from your salary.</Text>
        <Text style={styles.mainText}>The tax threshold changes yearly so make sure you always look at the correct year of assessment</Text>
        <Text style={styles.mainText}>Visit www.... and click on view current year assessment.</Text>
    </View >

);

export default ModuleTwoSubOne;

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
    mainText:{
        fontWeight:'400',
        fontSize:16,
        lineHeight:27,
        paddingBottom:30
    }

})