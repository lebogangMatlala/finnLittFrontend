import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ImageCard = ({ imageSource, title, description,time }) => {
    return (
        <ImageBackground source={imageSource} style={styles.imageBackground}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.time}>{time}</Text>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 156,
        resizeMode: 'stretch',
    },
    cardContent: {
        flex: 1,
        width:'50%',
        flexDirection: 'column',
        ///margin:10,
        justifyContent: 'flex-start',
        borderRadius:20,
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay background color
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight:'700',
        lineHeight:19.5,
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        fontWeight:'300',
        lineHeight: 18,
        color: 'white',
    },
    time:{
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: 'white', 
        marginTop:30,
        justifyContent: 'flex-end',
    }
});

export default ImageCard;
