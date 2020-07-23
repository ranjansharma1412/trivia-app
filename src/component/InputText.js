import React from "react";
import { TextInput, View } from "react-native";
import colors from "../constant/colors";

export default function InputText({ title, editable, isError, errorMessage, font_Size, ...others }) {

    return (
        <>
            <View style={{
                fontSize: 17,
                height: 45,
                borderColor: isError ? 'red' : '#dedede',
                borderBottomWidth: 1.5,
                // marginTop: 2,
            }}>
                <TextInput
                    style={{
                        height: 40,
                        paddingHorizontal: 8,
                        paddingBottom: 0,
                        fontSize:18,
                        borderRadius: 5,
                        textAlign: 'center',
                        color: colors.primaryTextColor
                    }}
                    editable={editable || true}
                    {...others}
                />
            </View>
        </>
    )
}