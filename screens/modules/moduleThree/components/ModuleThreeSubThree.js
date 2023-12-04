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
import { Linking } from 'react-native';

const BulletText = ({ children }) => (
    <View style={styles.listItem}>
        <Text style={styles.bullet}>{'\u2022'}  </Text>
        <Text style={styles.itemText}>{children}</Text>
    </View>
    // <Text style={styles.bullet}>
    //     {'\u2022'} <Text style={styles.bulletText}>{children}</Text>
    // </Text>
);

const handleTrans = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.transunion.co.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};

const handleExpe = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.experian.com/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};

//
const handleComp = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.experian.co.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};

const handlexds = () => {
    // Define the URL you want to open when the link is pressed
    const url = 'https://www.xds.co.za/';

    // Open the URL using the Linking API
    Linking.openURL(url);
};




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

// const BoldFirstThreeWords = ({ children }) => {
//     const words = children.split(' ');
//     const firstTwoWords = words.slice(0, 3).join(' ');
//     const restOfText = words.slice(3).join(' ');

//     return (
//         <Text>
//             <Text style={styles.boldText}>{firstTwoWords}</Text> {restOfText}
//         </Text>
//     );
// };

const ModuleThreeSubThree = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>As a responsible consumer check your credit score regularly and report any discrepancies to the relevant credit bureaus immediately.</Text>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold', marginBottom: '-2%' }}>What will I see:</Text></Text>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>Your personal credit score: </Text>See exactly what lenders see when they look into your profile.

        </BulletText>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>See your debt:</Text> You will get to see in detail how much debt you have and how it influences your score.

        </BulletText>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>Where to improve:</Text> you will get to see the problem areas that caused your score to drop.

        </BulletText>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>Activities on your credit profile:</Text> Know each and every company that looked into your score. Where to improve: you will get to see the problem areas that caused your score to drop.

        </BulletText>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>If you have judgements or listings: </Text>This is the biggest reason for people getting declined by lenders

        </BulletText>
        <BulletText>

            <Text style={{ fontFamily: 'poppins-bold' }}>If you qualify for loans: </Text>Your risk class will show you if you are good, average, or high risk to lenders.

        </BulletText>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold', marginBottom: -10 }}>Where can I check my credit score?</Text></Text>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>TransUnion: </Text></Text>
        <BulletText>Call centre <Text style={{ fontFamily: 'poppins-bold' }}>0861 886 466 </Text></BulletText>
        <BulletText>Visit <Text style={{ fontFamily: 'poppins-bold' }} onPress={handleTrans}>www.transunion.co.za</Text> </BulletText>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>Experian:  </Text></Text>
        <BulletText>Call centre <Text style={{ fontFamily: 'poppins-bold' }}>0861 105 665</Text> </BulletText>
        <BulletText>Visit <Text style={{ fontFamily: 'poppins-bold' }} onPress={handleExpe}>www.experian.com</Text> </BulletText>
        <BulletText>Send an email to<Text style={{ fontFamily: 'poppins-bold' }}> consumer@experian.co</Text> </BulletText>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>Compuscan: </Text> </Text>
        <BulletText>Call centre  <Text style={{ fontFamily: 'poppins-bold' }}>0861 514 131, </Text></BulletText>
        <BulletText>Visit <Text style={{ fontFamily: 'poppins-bold' }} onPress={handleComp}>www.compuscan.co.za  </Text></BulletText>
        <BulletText>Send an email to <Text style={{ fontFamily: 'poppins-bold' }}>consumercare@compuscan.co.za </Text></BulletText>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>Xpert Decision Systems (XDS):  </Text> </Text>
        <BulletText>Call centre <Text style={{ fontFamily: 'poppins-bold' }}>0860 937 000,</Text> </BulletText>
        <BulletText>Visit <Text style={{ fontFamily: 'poppins-bold' }} onPress={handlexds}>www.xds.co.za</Text></BulletText>
        <BulletText>Send an email <Text style={{ fontFamily: 'poppins-bold' }}>disput@xds.co.za </Text></BulletText>
        <Text style={styles.mainText}><Text style={{ fontFamily: 'poppins-bold' }}>VeriCred: </Text></Text>
        <BulletText>Call centre on <Text style={{ fontFamily: 'poppins-bold' }}>087 150 3601 </Text> </BulletText>
        <BulletText>Visit <Text style={{ fontFamily: 'poppins-bold' }}>www.vcbb.co.za</Text></BulletText>

    </View >

);

export default ModuleThreeSubThree;

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
        fontSize: 15,
        lineHeight: 27,
        marginBottom: 18,
        //paddingHorizontal: 15,
        fontFamily: 'poppins-regular'

    },
    numText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        paddingBottom: 10,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'
    }
    ,
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 15,
        fontFamily: 'poppins-regular'
    },
    bulletText: {
        marginLeft: 10,
        padding: 20,
        fontSize: 13,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop:-10,
        marginBottom: 15,
        paddingHorizontal: 25,
        fontFamily: 'poppins-regular'
    },
    bullet: {
        
        fontSize: 16,
        fontFamily: 'poppins-regular'
    },
    itemText: {
        flex: 1,
        fontSize: 13,
        lineHeight: 27,
        fontFamily: 'poppins-regular'
    },

})