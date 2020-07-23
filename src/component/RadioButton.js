import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

export const RadioButton = ({ checked, sortBy, title, setValue }) => (
    <TouchableOpacity
        style={{ flexDirection: 'row', width: '40%', marginVertical: 10 }}
        onPress={() => setValue(true, sortBy, title)}
    >
        <View style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {
                checked ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#000',
                    }} />
                    : null
            }

        </View>
        <Text style={{ marginLeft: 5, fontSize: 15,alignSelf:'center' }}>{title}</Text>
    </TouchableOpacity>
)