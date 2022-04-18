import React from "react"
import { StyleSheet, View, Dimensions, Text } from "react-native"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const CustomHeader = ({ leftIconSource, size, leftText, icon1 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {icon1 ? (
          <Image
            source={leftIconSource}
            style={{ height: size, width: size }}
          />
        ) : (
          <Text style={styles.leftText}> {leftText} </Text>
        )}
      </View>
      <View style={styles.midView}></View>
      <View style={styles.rightView}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.07,
    width: width,
    borderBottomWidth: 2,
    borderColor: "#333333",
    flexDirection: "row",
    marginBottom: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  leftView: {
    flex: 3,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  midView: { flex: 5 },
  rightView: { flex: 2 },
  leftText: { color: "white", fontSize: 22, fontWeight: "bold" },
})

export default CustomHeader
