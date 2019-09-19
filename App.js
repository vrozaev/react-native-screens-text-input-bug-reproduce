import React from 'react';
import { View, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useScreens } from 'react-native-screens';

// The issue reproduce if we use react-native-screens
// Comment the next line and problem will disappear.
useScreens();

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Initial value',
        };

        this.handleOnChangeText = this.handleOnChangeText.bind(this);

        setTimeout(() => {
            this.props.navigation.navigate('SecondScreen', {
                onFinish: () => {
                    this.setState({
                        text: 'Text which should appear',
                    });
                }
            });
        }, 2000);

    }

    handleOnChangeText(text) {
        console.log(`handleOnChangeText was called with value: ${text}`);
        this.setState({ text });
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.text} onChangeText={this.handleOnChangeText}/>
            </View>
        )
    }
}

class SecondScreen extends React.Component {
    constructor(props) {
        super(props);

        setTimeout(() => {
            this.props.navigation.goBack();
            this.props.navigation.getParam('onFinish')();
        }, 2000)
    }

    render() {
        return null;
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    SecondScreen: {
        screen: SecondScreen
    }
});

export default createAppContainer(AppNavigator);
