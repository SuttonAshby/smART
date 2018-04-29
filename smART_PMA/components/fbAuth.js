import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard
} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

const facebookLogin = async () => {
    try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw new Error('User cancelled request'); // Handle this however fits the flow of your app
        }

        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

        // get the access token
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }

        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

        console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
        console.error(e);
    }
}

// export default class NewUser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             error: "",
            // _keyboardDidHide:"",
            // _keyboardDidShow:"",
            // keyboardDidHideListener:"",
            // keyboardDidShowListener:""
    //     }
    // };
    // componentDidMount () {
    //     this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    //     this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    //   }

    //   componentWillUnmount () {
    //     this.keyboardDidShowListener.remove();
    //     this.keyboardDidHideListener.remove();
    //   }

    //   _keyboardDidShow () {
    //     alert('Keyboard Shown');
    //   }

    //   _keyboardDidHide () {
    //     alert('Keyboard Hidden');
    //   }
//     render() {
//         return (
//             <View>
//                 <TextInput
//                     style={{ height: 40 }}
//                     placeholder="Email Goes Here"
//                     onEndEditing={(email) => this.setState({ email })}
//                 />
//                 <TextInput
//                     style={{ height: 40 }}
//                     placeholder="Password"
//                     secureTextEntry={true}
//                     onEndEditing={(password) => this.setState({ password })}
//                 />
//                 <TextInput
//                     style={{ height: 40 }}
//                     placeholder="Confirm Password"
//                     secureTextEntry={true}
//                     onEndEditing={(password) => this.setState({ password })}
//                 />
//                 <Button
//                     onPress={() => {
//                         alert("You are creating an account!");
//                     }}
//                     title="Create My Account"
//                 />
//             </View>
//         );
//     }
// }