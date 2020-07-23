import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

export default class SplashView extends Component {

    componentDidMount() {
        setTimeout(()=>{
            SplashScreen.hide();
            this.props.navigation.dispatch(
                StackActions.replace("FirstPage")
            )
        },2000)
        
    }
 
    render() {
        return null;
        return (
            <View style={styles.root}>
                <Text style={styles.title}>SplashScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    }
})