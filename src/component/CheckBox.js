import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constant/colors';

export const CheckBox = ({ checked, onPress, title }) => (
    <View style={styles.root}>
        <View style={{width:'50%'}}>
            <Text style={{alignSelf:'center'}}>{title}</Text>
        </View>
        <View style={{width:'50%'}}>
            {checked ? <Icon
                onPress={() => onPress(checked ? false : true)}
                name="check-box"
                size={25}
                style={{alignSelf:'center'}}
                color={colors.skyColor}
            /> :
                <Icon
                    onPress={() => onPress(checked ? false : true)}
                    name="check-box-outline-blank"
                    size={25}
                    style={{alignSelf:'center'}}
                    color={colors.skyColor}
                />
            }
        </View>
    </View>
)

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 10
    }
})