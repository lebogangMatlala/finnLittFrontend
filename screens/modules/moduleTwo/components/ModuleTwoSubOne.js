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

const handleSars = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.sars.gov.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};

const ModuleTwoSubOne = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>If you earn a total combined income that is either salary wages, or commission in excess of the tax threshold of R91250 yearly for 2023, you will be required to register with SARS and submit your tax return even though your employer deducts PAYE monthly from your salary.</Text>
        <Text style={styles.mainText}>The tax threshold changes yearly so make sure you always look at the correct year of assessment</Text>
        <Text style={styles.mainText}>Visit <Text style={{fontWeight:'bold'}} onPress={handleSars}>www.sars.gov.za</Text> and click on view current year assessment.</Text>
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
        marginTop: 8,
        // borderWidth: 1,
        // borderColor: 'gray',
        //paddingHorizontal:15,
        padding: 20,
        
    },
    mainText:{
        //fontWeight:'400',
        fontSize:15,
        //padding:18,
        lineHeight:27,
        paddingBottom:30,
        fontFamily:'poppins-regular'
    }

})