import React, { Component } from 'react';
import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { StackNavigator } from "react-navigation";



export default class StartScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Login");
                    }}
                    title="Log In"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("CreateAccount");
                    }}
                    title="Create an Account"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Discover");
                    }}
                    title="DISCOVER"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("PickGallery");
                    }}
                    title="Pick a Gallery"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("FBAuth");
                    }}
                    title="Facebook Auth"
                />
            </View>
        );
    }
}

