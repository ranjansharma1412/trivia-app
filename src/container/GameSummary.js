import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import InputText from '../component/InputText';
import { NextButton } from '../component/Button';
import { insertGameHistory } from '../action';
import { StackActions } from '@react-navigation/native';

export default function GameSummary(props) {

    const [state, setState] = useState({
        name: props.route.params && props.route.params.name || "",
        bestCricketer: props.route.params && props.route.params.bestCricketer || "",
        flagColors: props.route.params && props.route.params.flagColors || [],
    })

    const goToHistory = () => {
        props.navigation.navigate("GameHistory");
    }
    const onGameFinish = async () => {
        let { name, bestCricketer, flagColors } = state;
        let currentDate = new Date().toISOString();
        let response = await insertGameHistory(name, bestCricketer, String(flagColors), currentDate)
        if (response) {
            props.navigation.dispatch(
                StackActions.replace("FirstPage")
            )
        }

    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.continer}>
                <Text style={styles.title}>Summary</Text>
            </View>
            <View style={styles.continer}>
                <View style={styles.result}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Hello :{state.name}</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Here are the answers selected:</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.text}>Q.1 Who is the best cricketer in the world?</Text>
                    <Text style={styles.text}>Answer: {state.bestCricketer}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.text}>Q.2 What are the colors in the national flag?</Text>
                    <Text style={styles.text}>Answer: {String(state.flagColors)}</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40, paddingVertical: 10 }}>
                <NextButton title="FINISH" onPress={onGameFinish} />
                <NextButton title="HISTORY" onPress={goToHistory} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // justifyContent: 'center'
    },
    continer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 22,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontWeight: "bold"
    },
    result: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 18,
        paddingVertical: 8,
    }
})