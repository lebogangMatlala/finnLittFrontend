import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OnBoardingScreen from './screens/OnBoarding';
import DashboardScreen from './screens/Dashboard';
import FeedbackScreen from './screens/Feedback';
import ProfileScreen from './screens/Profile';
import FAQScreen from './screens/FAQ';
import { Ionicons } from '@expo/vector-icons';
import ModuleTwoDashboardScreen from './screens/modules/moduleTwo/ModuleTwoDashboard';
import ModuleOneDashboardScreen from './screens/modules/moduleOne/ModuleOneDashboard';
import ModuleThreeDashboardScreen from './screens/modules/moduleThree/ModuleThreeDashboard';
import ModuleOneContentScreen from './screens/modules/moduleOne/ModuleOneContent';
import ModuleOneSubOne from './screens/modules/moduleOne/components/ModuleOneSubOne';
import ModuleOneSubTwo from './screens/modules/moduleOne/components/ModuleOneSubTwo';
import ModuleTwoContentScreen from './screens/modules/moduleTwo/ModuleTwoContent';
import ModuleTwoSubOne from './screens/modules/moduleTwo/components/ModuleTwoSubOne';
import ModuleTwoSubTwo from './screens/modules/moduleTwo/components/ModuleTwoSubTwo';
import ModuleTwoSubThree from './screens/modules/moduleTwo/components/ModuleTwoSubThree';
import ModuleTwoSubFour from './screens/modules/moduleTwo/components/ModuleTwoSubFour';
import ModuleTwoSubFive from './screens/modules/moduleTwo/components/ModuleTwoSubFive';
import ModuleTwoSubSix from './screens/modules/moduleTwo/components/ModuleTwoSubSix';
import ModuleTwoSubSeven from './screens/modules/moduleTwo/components/ModuleTwoSubSeven';
import ModuleThreeContentScreen from './screens/modules/moduleThree/ModuleThreeContent';
import ModuleThreeSubOne from './screens/modules/moduleThree/components/ModuleThreeSubOne';
import ModuleThreeSubTwo from './screens/modules/moduleThree/components/ModuleThreeSubTwo';
import ModuleThreeSubThree from './screens/modules/moduleThree/components/ModuleThreeSubThree';
import ModuleThreeSubFour from './screens/modules/moduleThree/components/ModuleThreeSubFour';
import ModuleThreeSubFive from './screens/modules/moduleThree/components/ModuleThreeSubFive';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExampleOne from './screens/ExampleOne';
import forgotPasswordScreen from './screens/forgotPassword/ForgotPassword';
import { Linking } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import CustomProgressBar from './screens/components/CustomProgressBar';

import homeIconActive from './assets/iconsTab/HomeActive.png';
import homeIconInactive from './assets/iconsTab/HomeInactive.png';

import profileIconActive from './assets/iconsTab/ActiveProfile.png';
import profileIconInactive from './assets/iconsTab/InactiveProfile.png';

import faqIconActive from './assets/iconsTab/FAQActive.png';
import faqIconInactive from './assets/iconsTab/FAQInactive.png';
import DeepLinking from 'react-native-deep-linking';
import feedbackIconActive from './assets/iconsTab/FeedbackActive.png';
import feedbackIconInactive from './assets/iconsTab/FeedbackInactive.png';
//import { linking } from './LinkingConfiguration'; 

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//OnBoardingScreen

//font
const getFonts = () => Font.loadAsync({
  'Poppins Regular': require('./assets/fonts/Poppins Regular.ttf'),
});

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    light: 'Poppins-Light',
    thin: 'Poppins-Thin',
  },
};


const CustomHeader = ({ navigation }) => {
  return (
    // <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    //   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    //     <Image source={require('./assets/headerlogo.png')} style={{ width: 150, height: 30 }} />
    //   </TouchableOpacity>
    // </View>
    <View style={{ height: 95, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('./assets/headerlogo.png')} style={{ width: 200, height: 40 }} />
      </TouchableOpacity>
      {/* <Text style={{ fontSize: 24, color: 'white', textAlign: 'center' }}>
        Custom Header
      </Text> */}
    </View>
  );
};

const DashboardTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconStyle = focused ? styles.iconFocused : styles.iconNormal;

        if (route.name === 'Dash') {
          iconName = focused ? homeIconActive : homeIconInactive;
        } else if (route.name === 'Profile') {
          iconName = focused ? profileIconActive : profileIconInactive;
        } else if (route.name === 'FAQ') {
          iconName = focused ? faqIconActive : faqIconInactive;
        } else if (route.name === 'Feedback') {
          iconName = focused ? feedbackIconActive : feedbackIconInactive;
        }


        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={iconName} style={{ width: size, height: size }} />
        </View>);
      },
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          //"display": "flex",
          style: styles.tabBar,
          labelStyle: styles.labelStyle,
          tabStyle: styles.tabStyle,
        },
        null
      ]

    })}

    >
      <Tab.Screen name="Dash" component={DashboardScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="FAQ" component={FAQScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} options={{ headerShown: false, }} />

      {/* /// <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

//export const navigationRef = React.createRef();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigationRef = useRef(null);
  //const navigation = useNavigation();

  useEffect(() => {


    const checkLoginStatus = async () => {
      await AsyncStorage.clear();
      const token = await AsyncStorage.getItem('userid');
      console.log("lebo" + token);
      if (token === null || token === 0) {
        setIsLoggedIn(false);

      } else if (token >= 1) {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();

  }, [isLoggedIn]);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'poppins-extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerTitle: () => <CustomHeader />,


        }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}></Stack.Screen>
          <Stack.Screen name="Welcome" component={OnBoardingScreen} options={{ headerShown: false, }}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, }}></Stack.Screen>
          <Stack.Screen name="Registration" component={RegisterScreen} options={{ headerShown: false, }}></Stack.Screen>
          <Stack.Screen name="DashTabs" component={DashboardTabs} options={{ headerShown: true, headerBackVisible: false }}></Stack.Screen>
          <Stack.Screen name="ModuleOneDashboardScreen" component={ModuleOneDashboardScreen} options={{ headerShown: true, headerBackVisible: false, gestureEnabled: false, }}></Stack.Screen>
          <Stack.Screen name="ModuleOneContentScreen" component={ModuleOneContentScreen} options={{ headerShown: true, headerBackVisible: false, }}></Stack.Screen>
          <Stack.Screen name="ModuleTwoDashboardScreen" component={ModuleTwoDashboardScreen} options={{ headerShown: true, headerBackVisible: false, }}></Stack.Screen>
          <Stack.Screen name="ModuleTwoContentScreen" component={ModuleTwoContentScreen} options={{ headerShown: true, headerBackVisible: false, }}></Stack.Screen>
          <Stack.Screen name="ModuleThreeDashboardScreen" component={ModuleThreeDashboardScreen} options={{ headerShown: true, headerBackVisible: false }}></Stack.Screen>
          <Stack.Screen name="ModuleThreeContentScreen" component={ModuleThreeContentScreen} options={{ headerShown: true, headerBackVisible: false, }}></Stack.Screen>
          <Stack.Screen
            name="ModuleOneSubOne"
            component={ModuleOneSubOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleOneSubTwo"
            component={ModuleOneSubTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubOne"
            component={ModuleTwoSubOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubTwo"
            component={ModuleTwoSubTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubThree"
            component={ModuleTwoSubThree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubFour"
            component={ModuleTwoSubFour}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubFive"
            component={ModuleTwoSubFive}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubSix"
            component={ModuleTwoSubSix}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleTwoSubSeven"
            component={ModuleTwoSubSeven}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleThreeSubOne"
            component={ModuleThreeSubOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleThreeSubTwo"
            component={ModuleThreeSubTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleThreeSubThree"
            component={ModuleThreeSubThree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleThreeSubFour"
            component={ModuleThreeSubFour}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ModuleThreeSubFive"
            component={ModuleThreeSubFive}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordReset"
            component={forgotPasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconNormal: {
    borderBottomWidth: 0,
    marginBottom: -3,
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between items

  },
  iconFocused: {
    borderBottomWidth: 2,
    borderColor: 'blue',
    marginBottom: -3,

  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    right: 0,
  },
  tabBar: {
    borderTopWidth: 1, // Add a 1-pixel border at the top of the tab bar
    borderTopColor: 'gray', // Border color
    backgroundColor: 'white', // Background color of the tab bar
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1, // Add a 1-pixel border on the right to separate tabs
    borderRightColor: 'gray', // Border color
  },
  labelStyle: {
    display: 'none', // Hide tab labels if not needed
  },
  tabStyle: {
    paddingVertical: 10, // Adjust the tab height as needed
  },
});
