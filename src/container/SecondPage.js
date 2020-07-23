import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from '../component/RadioButton';
import { NextButton } from '../component/Button';

export default function SecondPage(props) {

    const [state, setState] = useState({
        name: props.route.params && props.route.params.name || "",
        bestCricketer: "",
        selecedOption: 0,
        checked: false,
    })

    const setValue = (value, selecedOption, bestCricketer) => {
        let checked = false;
        if (state.selecedOption !== selecedOption) {
            checked = value;
        }
        setState({ ...state, checked, selecedOption, bestCricketer });

    }

    const goToNext = () => {
        props.navigation.navigate("ThirdPage", { name: state.name, bestCricketer: state.bestCricketer });
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Who is the best cricketer in the world?</Text>
            <View style={styles.radioButtonContainer}>
                <RadioButton
                    checked={state.selecedOption === 1 ? state.checked : false}
                    sortBy={1}
                    title={"Sachin Tendulkar"}
                    setValue={setValue}
                />
                <RadioButton
                    checked={state.selecedOption === 2 ? state.checked : false}
                    sortBy={2}
                    title={"Virat Kolli"}
                    setValue={setValue}
                />
                <RadioButton
                    checked={state.selecedOption === 3 ? state.checked : false}
                    sortBy={3}
                    title={"Adam Gilchirst"}
                    setValue={setValue}
                />
                <RadioButton
                    checked={state.selecedOption === 4 ? state.checked : false}
                    sortBy={4}
                    title={"Jacques Kallis"}
                    setValue={setValue}
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
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    radioButtonContainer: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 40
    }
})