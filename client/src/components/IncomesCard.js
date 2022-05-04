import React from "react"
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native"
import Icon from "./Icon"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const IncomesCard = ({ incomeType, amount, description, day, month }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.dateText}> {[day, " ", month]} </Text> */}
      <Text style={styles.amountText}>
        {description ? description : amount}
      </Text>
      <Text
        style={[
          styles.amountText2,
          incomeType && {
            backgroundColor: "#222D25",
            paddingHorizontal: 3,
            borderRadius: 5,
            overflow: "hidden",
          },
        ]}
      >
        {[incomeType ? "+" : "-", amount, ".00"]}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: "#333",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  dateText: { color: "#999" },
  amountText: { color: "white", fontSize: 16, paddingVertical: 1 },
  amountText2: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 1,
  },
})

export default IncomesCard
