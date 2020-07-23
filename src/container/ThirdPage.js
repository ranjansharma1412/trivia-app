
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '../component/CheckBox';
import { NextButton } from '../component/Button';

export default function ThirdPage(props) {

    const [state, setState] = useState({
        name: props.route.params && props.route.params.name || "",
        bestCricketer: props.route.params && props.route.params.bestCricketer || "",
        flagColors: []
    })

    const setFlagColors = (item) => {
        let flagColors = state.flagColors;
        let isExist = flagColors.includes(item);
        if (isExist) {
            flagColors = flagColors.filter((data) => data !== item);
        } else {
            flagColors.push(item)
            flagColors = flagColors;
        }
        setState({...state, flagColors })
    }

    const goToNext = () => {
        props.navigation.navigate("GameSummary", {
            name: state.name,
            bestCricketer: state.bestCricketer,
            flagColors: state.flagColors
        });
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>What are the colors in the Indian national flag?</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    title={"White"}
                    checked={state.flagColors.indexOf("White") > -1 ? true : false}
                    onPress={() => setFlagColors("White")}
                />
                <CheckBox
                    title={"Yellow"}
                    checked={state.flagColors.indexOf("Yellow") > -1 ? true : false}
                    onPress={() => setFlagColors("Yellow")}
                />
                <CheckBox
                    title={"Orange"}
                    checked={state.flagColors.indexOf("Orange") > -1 ? true : false}
                    onPress={() => setFlagColors("Orange")}
                />
                <CheckBox
                    title={"Green"}
                    checked={state.flagColors.indexOf("Green") > -1 ? true : false}
                    onPress={() => setFlagColors("Green")}
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
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    checkboxContainer: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 40
    }
})