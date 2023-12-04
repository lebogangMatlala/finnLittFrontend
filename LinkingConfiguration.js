
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import { Linking } from 'react-native';

enableScreens();

// Deep linking setup
Linking.getInitialURL().then((url) => {
    if (url) {
        // Extract the path and handle it as needed
        const { path, queryParams } = Linking.parse(url);

        if (path === 'password/reset') {
            // Navigate to the ResetPasswordScreen with the token
            navigationRef.current?.navigate('ResetPassword', { token: queryParams.token });
        }
    }
});

AppRegistry.registerComponent(appName, () => App);

// import * as Linking from 'expo-linking';

// const prefix = Linking.createURL('/');

// const config = {
//     screens: {
//         PasswordReset: 'PasswordReset',
//     },
// };

// export const linking = {
//     prefixes: [prefix],
//     config,
// };
