import React from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const BalanceCard = ({ type, income, outcome, balance }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}> {type} </Text>
      <Text style={{ color: "white" }}> balance: {balance} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#333333",
    borderRadius: 25,
    width: width,
    height: height * 0.24,
    padding: 10,
  },
})
export default BalanceCard
