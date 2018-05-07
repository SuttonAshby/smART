import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from "react-navigation";
import StartScreen from "./components/startscreen";
import LogIn from "./components/login";
import NewUser from "./components/newUser";
import GalleryChoice from "./components/galleryChoice";
import SliderImages from "./components/slider";

//for Auth
import firebase from 'react-native-firebase';

const RootStack = StackNavigator(
  {
    Home: {
      screen: StartScreen
    },
    Login: {
      screen: LogIn
    },
    CreateAccount: {
      screen: NewUser
    },
    PickGallery: {
      screen: GalleryChoice
    },
    Discover: {
      screen: SliderImages
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      currentUser: null
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymouslyAndRetrieveData()
      .then(() => {
        var user = firebase.auth().currentUser
        console.log(user)
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {

    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return null;
    }

    return (
      <RootStack />
    )
  }
};

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StartScreen />
//         {/* <LogIn />
//         <NewUser />
//         < GalleryChoice />
//         <SliderImages /> */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
