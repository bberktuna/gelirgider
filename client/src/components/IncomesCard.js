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

const IncomesCard = ({ incomeType, income, description }) => {
  return <View></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.96,
    height: height * 0.07,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    paddingLeft: 15,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 15,
  },
})

export default IncomesCard
