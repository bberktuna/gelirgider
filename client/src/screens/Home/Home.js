import React, { useState, useCallback, useRef, useMemo, useEffect } from "react"
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native"
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet"
import {
  CustomHeader,
  BalanceCard,
  IncomesCard,
  NewIncome,
  Icon,
} from "../../components"
import { CurrentRenderContext } from "@react-navigation/native"
import { set } from "react-native-reanimated"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

// import BottomSheet from "@gorhom/bottom-sheet"

const slideBalanceData = [
  {
    id: 1,
    type: "alltime",
    income: 0,
    outcome: 0,
    balance: 0,
  },
  {
    id: 2,
    type: "weekly",
    income: 0,
    outcome: 0,
    balance: 0,
  },
  {
    id: 3,
    type: "monthly",
    income: 0,
    outcome: 0,
    balance: 0,
  },
]
const incomesData = [
  { id: 1, income: 5, type: true, description: "araba", date: new Date() },
  { id: 2, income: 10, type: false, description: "çiçek", date: new Date() },
  { id: 3, income: 15, type: true, description: "borç", date: new Date() },
  { id: 4, income: 20, type: false, description: "kira", date: new Date() },
]
const Home = () => {
  //! FOCUS REF HANDLE !//

  const ref_input1 = useRef(null)
  const ref_input2 = useRef(null)
  const ref_headerFlatList = useRef(null)

  const onPressAddExpense = () => {
    console.log("onpressaddexpense")
  }
  //! BOTTOM SHEET !//
  const sheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const snapPoints = ["25%"]

  const handleSnapPress = useCallback((index) => {
    console.log("basıldı")
    sheetRef.current?.snapToIndex(index)
    setIsOpen(isOpen ? false : true)
    useEffect(() => {
      ref_input1.current.focus()
    }, [])
  }, [])

  //! FLATLISTS !//
  const balanceItem = ({ item }) => (
    <BalanceCard
      type={item.type}
      income={item.income}
      outcome={item.outcome}
      balance={item.balance}
    />
  )

  const incomesItem = ({ item }) => (
    <IncomesCard
      incomeType={item.type}
      income={item.income}
      description={item.description}
    />
  )

  const HeaderFlatList = () => (
    <View style={styles.balanceView}>
      <FlatList
        horizontal
        data={slideBalanceData}
        renderItem={balanceItem}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="always"
        ref={ref_headerFlatList}
        onMomentumScrollEnd={() => {
          console.log("SWIPE CONTROL END")
          // setAlltimeFocus(alltimeFocus ? false : true)
          // setWeeklyFocus(weeklyFocus ? false : true)
          // setMonthlyFocus(monthlyFocus ? false : true)
        }}
        // scrollToIndex={2}
      />
    </View>
  )

  //! FLATLIST FOCUSES !//
  // const [alltimeFocus, setAlltimeFocus] = useState(true)
  // const [weeklyFocus, setWeeklyFocus] = useState(false)
  // const [monthlyFocus, setMonthlyFocus] = useState(false)
  // const ref_alltime = useRef(true)
  // const ref_weekly = useRef(false)
  // const ref_monthly = useRef(false)

  const [slideState, setUseSlideState] = useState({
    allTimeFocus: true,
    weeklyFocus: false,
    monthlyFocus: false,
  })
  const { allTimeFocus, weeklyFocus, monthlyFocus } = slideState

  const opAllTime = () => {
    setUseSlideState({
      allTimeFocus: true,
      weeklyFocus: false,
      monthlyFocus: false,
    })
    ref_headerFlatList.current.scrollToIndex({
      animated: true,
      index: 0,
      viewPosition: 10,
    })
  }
  const opWeekly = () => {
    setUseSlideState({
      allTimeFocus: false,
      weeklyFocus: true,
      monthlyFocus: false,
    })
  }
  const opMonthly = () => {
    setUseSlideState({
      allTimeFocus: false,
      weeklyFocus: false,
      monthlyFocus: true,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="always">
        <CustomHeader leftText="gelirgider" />

        <View style={styles.incomeView}>
          <View style={styles.tohFlat}>
            <TouchableOpacity
              style={[
                styles.tohOne,
                ,
                alltimeFocus && {
                  borderBottomWidth: 1.5,
                  borderColor: "white",
                },
              ]}
              onPress={() => {
                ref_headerFlatList.current.scrollToIndex({
                  animated: true,
                  index: 0,
                  viewPosition: 10,
                })
              }}
            >
              <Text
                style={[styles.tohText, alltimeFocus && { color: "white" }]}
              >
                all time
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tohOne,
                ,
                weeklyFocus && { borderBottomWidth: 1.5, borderColor: "white" },
              ]}
              onPress={() => {
                ref_headerFlatList.current.scrollToIndex({
                  animated: true,
                  index: 1,
                  viewPosition: 10,
                })
              }}
            >
              <Text style={[styles.tohText, weeklyFocus && { color: "white" }]}>
                weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tohOne,
                ,
                monthlyFocus && {
                  borderBottomWidth: 1.5,
                  borderColor: "white",
                },
              ]}
              onPress={() => {
                ref_headerFlatList.current.scrollToIndex({
                  animated: true,
                  index: 2,
                  viewPosition: 10,
                })
              }}
            >
              <Text
                style={[styles.tohText, monthlyFocus && { color: "white" }]}
              >
                monthly
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            ListHeaderComponent={HeaderFlatList}
            data={incomesData}
            renderItem={incomesItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleSnapPress(-1)}
        style={styles.newIncomeButton}
      >
        <Icon source={require("../../../assets/icons/plus.png")} size={25} />
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        index={-1}
        backgroundStyle={{ backgroundColor: "#1A1A1A" }}
      >
        <View style={styles.sheetInputView}>
          <Icon
            source={require("../../../assets/icons/euro.png")}
            size={24}
            color="#999999"
          />
          <BottomSheetTextInput
            style={styles.sheetInput}
            placeholder="new expense..."
            placeholderTextColor="#999999"
            keyboardType="decimal-pad"
            keyboardShouldPersistTaps={true}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
          />
        </View>
        <View style={styles.sheetInputView}>
          <Icon
            source={require("../../../assets/icons/description.png")}
            size={24}
            color="#999999"
          />
          <BottomSheetTextInput
            style={styles.sheetInput}
            placeholder="description..."
            placeholderTextColor="#999999"
            keyboardShouldPersistTaps={true}
            returnKeyType="next"
            onSubmitEditing={onPressAddExpense}
            ref={ref_input2}
          />
        </View>
        <TouchableOpacity style={styles.addExpense} onPress={onPressAddExpense}>
          <Text>add expense</Text>
        </TouchableOpacity>
      </BottomSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  regularText: {
    color: "white",
  },
  balanceView: {
    height: height * 0.25,
    width: width,
  },
  incomeView: {},
  newIncomeButton: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    right: 20,
  },
  sheetInput: {
    marginLeft: 8,
    color: "white",
    width,
  },
  sheetInputView: {
    backgroundColor: "#555555",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: height * 0.05,
    width,
  },
  addExpense: {
    width,
    backgroundColor: "white",
    borderRadius: 10,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },

  tohFlat: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tohText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tohOne: {
    paddingHorizontal: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1.5,
    borderColor: "#333",
  },
})

export default Home
