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

export default class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            // _keyboardDidHide:"",
            // _keyboardDidShow:"",
            // keyboardDidHideListener:"",
            // keyboardDidShowListener:""
        }
    };
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
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Email Goes Here"
                    onEndEditing={(email) => this.setState({ email })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onEndEditing={(password) => this.setState({ password })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onEndEditing={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => {
                        var test = this.state.email
                        alert("You are creating an account!");
                        console.log(test)
                    }}
                    title="Create My Account"
                />
            </View>
        );
    }
}

