import React, { useRef, useState } from "react"
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native"

import Icon from "./Icon"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const CustomHeader = ({
  leftIconSource,
  size,
  leftText,
  icon1,
  stateHeader,
  onPressOut,
}) => {
  const [newAmount, setNewAmount] = useState("")
  const [type, setType] = useState(true)
  const refButton = useRef(null)

  const [array, setArray] = useState({ ...array })
  const onPressDone = (array, newObj) => {
    console.log("done")
    setArray({
      array: [
        ...array,
        {
          title: Date.now(""),
          data: [
            {
              id: Date.now(""),
              amount: newAmount,
              incomeType,
              //description,
              exactTime: Date.now(""),
            },
          ],
        },
      ],
    })
  }

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
          <TouchableOpacity
            onPress={() => setType(type ? false : true)}
            style={{ position: "absolute", left: 10, zIndex: 1 }}
          >
            {type ? (
              <Icon
                source={require("../../assets/icons/plus.png")}
                size={24}
                color={"white"}
              />
            ) : (
              <Icon
                source={require("../../assets/icons/subtract.png")}
                size={24}
                color={"white"}
              />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="new expense..."
            style={styles.textInput}
            placeholderTextColor={"#999999"}
            autoFocus={true}
            value={newAmount}
            onChangeText={(text) => setNewAmount(text)}
            onSubmitEditing={onPressDone}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 20 }}
            ref={refButton}
            onPress={onPressDone}
          >
            <Icon
              source={require("../../assets/icons/done.png")}
              size={24}
              color={"#fff"}
            />
          </TouchableOpacity>
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
