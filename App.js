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
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//OnBoardingScreen

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
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('./assets/headerlogo.png')} style={{ width: 150, height: 30 }} />
      </TouchableOpacity>
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
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'FAQ') {
          iconName = focused ? 'help-circle' : 'help-circle-outline';
        } else if (route.name === 'Feedback') {
          iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
        }

        return (<Ionicons name={iconName} size={size} color={color} style={iconStyle} >

        </Ionicons>);
      },
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          "display": "flex"
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
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigationRef = useRef(null);

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

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => null,
        headerTitle: () => <CustomHeader />

      }}>
          {!isLoggedIn && (
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}></Stack.Screen>

          )}
        <Stack.Screen name="Welcome" component={OnBoardingScreen} options={{ headerShown: false, }}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, }}></Stack.Screen>
        <Stack.Screen name="Registration" component={RegisterScreen} options={{ headerShown: false, }}></Stack.Screen>
        <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: true, headerBackVisible: false }}></Stack.Screen>
        <Stack.Screen name="ModuleOneDashboardScreen" component={ModuleOneDashboardScreen} options={{ headerShown: true, headerBackVisible: false, }}></Stack.Screen>
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




      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
});
