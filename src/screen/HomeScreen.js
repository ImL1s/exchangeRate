import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    androidNavigationRightButton: {
        marginRight: 10
    },
    iosNavigationRightButton: {
    }
});

export default class HomeScreen extends Component<Props>{

    static navigationOptions = {
        title: 'Home',
        headerRight: (
            Platform.OS === 'ios' ?
                <Button
                    title='info'
                    color='#000'
                    style={styles.iosNavigationRightButton}
                    onPress={() => alert('this is a button!')} /> :
                <Text
                    style={styles.androidNavigationRightButton}
                    onPress={() => {
                        alert('this is android!');
                    }}>hello</Text>
        )
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}



