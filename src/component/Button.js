import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constant/colors';

export const NextButton = ({ title, onPress, btnHeight, fontSize }) => (
    <TouchableOpacity
        onPress={() => onPress()}
        style={styles.root}
    >
        <Text style={{ textAlign: 'center', fontSize: 18, color: '#fff' }}>
            {title}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 50,
        backgroundColor:colors.skyColor,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 15
    }
})