import React from "react"
import { View, Dimensions, StyleSheet, Image } from "react-native"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width
const NewIncome = () => {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: 0,
    right: 0,
  },
})
export default NewIncome
