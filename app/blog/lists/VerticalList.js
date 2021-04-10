import React from 'react';
import {StyleSheet, View} from "react-native";
import Title from "../common/Title";
import VerticalCard from "../cards/VerticalCard";

export default function VerticalList({title, data}) {
    return (
        <View>
            <Title size={20} style={styles.container}>{title}</Title>
            <View>
                {data.map(item =>
                    <VerticalCard item={item} key={item.id}/>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      marginVertical: 15,
  }
})