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

const ModuleThreeSubThree = () => (

    <View style={styles.componentContainer} >
        <Text style={styles.mainText}>As a responsible consumer check your credit score regularly and report any discrepancies to the relevant credit bureaus immediately.</Text>
        <Text style={styles.mainText}>What will I see:</Text>
        <BulletText>
            <BoldFirstThreeWords>
                Your personal credit score: See exactly what lenders see when they look into your profile.
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstThreeWords>
                See your debt: You will get to see in detail how much debt you have and how it influences your score.
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstThreeWords>
                Where to improve: you will get to see the problem areas that caused your score to drop.
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstThreeWords>
               Activities on your credit profile: Know each and every company that looked into your score. Where to improve: you will get to see the problem areas that caused your score to drop.
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstThreeWords>
                If you have judgements or listings: This is the biggest reason for people getting declined by lenders
            </BoldFirstThreeWords>
        </BulletText>
        <BulletText>
            <BoldFirstThreeWords>
                If you qualify for loans: Your risk class will show you if you are good, average, or high risk to lenders.
            </BoldFirstThreeWords>
        </BulletText>
        <Text style={styles.mainText}>Where can I check my credit score?</Text>
        <Text style={styles.mainText}>TransUnion: </Text>
        <BulletText>Call centre 0861 886 466 </BulletText>
        <BulletText>Visit www.transunion.co.za </BulletText>
        <Text style={styles.mainText}>Experian:  </Text>
        <BulletText>Call centre 0861 105 665 </BulletText>
        <BulletText>Visit www.experian.com </BulletText>
        <BulletText>Send an email to consumer@experian.co </BulletText>
        <Text style={styles.mainText}>Compuscan:  </Text>
        <BulletText>Call centre  0861 514 131, </BulletText>
        <BulletText>Visit www.compuscan.co.za  </BulletText>
        <BulletText>Send an email to consumercare@compuscan.co.za </BulletText>
        <Text style={styles.mainText}>Xpert Decision Systems (XDS):   </Text>
        <BulletText>Call centre 0860 937 000, </BulletText>
        <BulletText>Visit www.xds.co.za</BulletText>
        <BulletText>Send an email disput@xds.co.za </BulletText>
        <Text style={styles.mainText}>VeriCred: </Text>
        <BulletText>Call centre on 087 150 3601  </BulletText>
        <BulletText>Visit www.vcbb,co,za</BulletText>
        
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
    }
    ,
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27
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