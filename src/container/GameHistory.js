import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { selectAllGameHistory } from '../action';
import moment from 'moment';

export default function GameHistory(props) {

    const [state, setState] = useState({
        gameHistory: [],
    })

    useEffect(() => {
        getGameHistory();
    })

    const getGameHistory = async () => {
        let reponse = await selectAllGameHistory();
        if (reponse) {
            setState({ ...state, gameHistory: reponse })
        }
        // console.log("reponse",reponse);
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView persistentScrollbar={true}>
                <View style={styles.rootContainer}>
                    {state.gameHistory && state.gameHistory.length > 0 && state.gameHistory.map((item, index) => {
                        let formatedDate = moment(item.game_date).format("DD MMMM hh:mm A");
                        return (
                            <View style={styles.continer} key={index}>
                                <SimpleContentView
                                    label={"Game " + item.id}
                                    value={formatedDate} />
                                <SimpleContentView
                                    label={"Name"}
                                    value={item.name} />
                                <QuestionView
                                    id={1}
                                    label={"Who is the best cricketer in the world?"}
                                    value={item.best_cricketer} />
                                <QuestionView
                                    id={2}
                                    label={"What are the colors in the national flag?"}
                                    value={item.flag_colors} />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const SimpleContentView = ({ label, value }) => {
    return (
        <View style={styles.content}>
            <Text
                style={{ fontSize: 16, paddingVertical: 8, color: '#2F445A' }}
            >
                {label + " : "}
            </Text>
            <Text
                style={{ fontSize: 16 }}
            >
                {value}
            </Text>
        </View>
    )
}
const QuestionView = ({ id, label, value }) => {
    return (
        <View style={styles.question}>
            <Text
                style={{ fontSize: 16, paddingVertical: 8, color: '#2F445A' }}
            >
                {"Q." + id + " " + label}
            </Text>
            <Text
                style={{ fontSize: 16, paddingVertical: 8 }}
            >
                {"Answer: " + value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // justifyContent: 'center'
    },
    rootContainer: {

    },
    continer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: "#5D738B",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
        paddingVertical: 8,
    },
    content: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-evenly'
    },
    question: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
})