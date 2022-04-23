import React from "react"
import { StyleSheet, View, Dimensions, Text, TextInput } from "react-native"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const CustomHeader = ({
  leftIconSource,
  size,
  leftText,
  icon1,
  stateHeader,
}) => {
  return (
    <>
      {stateHeader ? (
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
      ) : (
        <View style={styles.container}>
          <TextInput
            placeholder="new expense..."
            style={styles.textInput}
            placeholderTextColor={"#999999"}
            autoFocus={true}
          />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: width * 0.94,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 15,
    color: "white",
  },

  container: {
    height: height * 0.07,
    width: width,
    borderBottomWidth: 2,
    borderColor: "#333333",
    flexDirection: "row",
    marginBottom: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,

    justifyContent: "center",
    alignItems: "center",
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
