import React, { useCallback, useRef, useMemo, useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native"
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet"

export default function Register() {
  const sheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(true)

  const snapPoints = ["30%"]

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(true)
  }, [])

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isOpen ? "#00000090" : "#fff" },
      ]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSnapPress(0)}
      >
        <Text style={{ color: "#0080FB", fontSize: 16, fontWeight: "600" }}>
          GET
        </Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetTextInput />
      </BottomSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 32,
    textAlign: "left",
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    color: "#aaa",
    fontWeight: "500",
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20,
  },
  shadow: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 6.84,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f4f4f4",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
})
