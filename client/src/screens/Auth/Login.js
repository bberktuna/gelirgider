import React, { useState } from "react"
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Login = () => {
  const navigation = useNavigation()

  const onChangeText = () => {
    console.log("pressed")
  }
  const onPressNext = () => {
    console.log("pressed")
    navigation.navigate("Home", { name })
  }
  const [name, setName] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}>
        <Text style={styles.entrance}>
          hello there,{"\n"}welcome to gelirgider
        </Text>
      </View>

      <View style={styles.view3}>
        <TextInput
          placeholder="what's your name?"
          value={name}
          onChangeText={(text) => setName()}
          style={styles.textInput}
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={onPressNext} style={styles.button}>
          <Text style={styles.buttonText}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  view1: { flex: 1.5, borderWidth: 4 },
  view2: { flex: 6, marginLeft: 20 },
  view3: {
    flex: 2.5,

    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 50,
    width: width * 0.9,
    height: height * 0.07,
    paddingLeft: 20,
    borderColor: "white",
    marginBottom: 10,
    color: "white",
  },
  entrance: {
    fontWeight: "700",
    fontSize: 50,
    color: "white",
  },
  button: {
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
})

export default Login
