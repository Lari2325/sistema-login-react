import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props){
    return(
        <View style={styles.boxResult}>
            <Text style={styles.Result}>{props.messageResultImc}</Text>
            <Text style={styles.Result}>{props.resultImc}</Text>
        </View>
    );
}



// expo start --tunnel