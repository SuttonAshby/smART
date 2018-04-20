import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    };
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Email Goes Here"
                    onEndEditing={(email) => this.setState({ email }).trim()}
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
                        alert("You are creating an account!");
                    }}
                    title="Create My Account"
                />
            </View>
        );
    }
}

