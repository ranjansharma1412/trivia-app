import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputText from '../component/InputText';
import { NextButton } from '../component/Button';

export default function FirstPage(props) {

    const [state, setState] = useState({
        name: ""
    })

    const goToNext = () => {
       if(state.name===""){
           Alert.alert("Trivia","Please enter your name")
       }else{
        props.navigation.navigate("SecondPage", { name: state.name });
       }
    }

    return (
        <View style={styles.root}>
            <View style={styles.continer}>
                <Text style={styles.title}>What is your name?</Text>
            </View>
            <View style={styles.continer}>
                <InputText
                    value={state.name}
                    onChangeText={(name) => setState({ ...state, name })}

                />
            </View>
            <View style={{ paddingHorizontal: 40, paddingVertical: 10 }}>
                <NextButton title="Next" onPress={goToNext} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
    },
    continer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
})