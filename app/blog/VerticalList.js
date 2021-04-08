import React from 'react';
import {StyleSheet, View} from "react-native";
import Title from "./Title";
import FlatCard from "./FlatCard";

export default function VerticalList({title, data}) {
    return (
        <View>
            <Title size={20} style={styles.container}>{title}</Title>
            <View>
                {data.map(item => <FlatCard item={item} key={item.id}/>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      marginVertical: 15,
  }
})