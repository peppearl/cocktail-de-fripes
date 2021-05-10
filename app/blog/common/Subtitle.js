import React from 'react';
import {Text} from "react-native";

export default function Subtitle({children, numberOfLines = 2, size = 15}) {
    return <Text
        numberOfLines={numberOfLines}
        style={{ fontSize: size, color : "#354362"}}
    >
        {children}
    </Text>
}