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
  RefreshControl,
  TextInput,
  SectionList,
  StatusBar,
} from "react-native"

import {
  CustomHeader,
  BalanceCard,
  IncomesCard,
  NewIncome,
  Icon,
} from "../../components"

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

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
  {
    title: new Date("July 4 2022 12:30"), //"24 April",
    data: [
      {
        id: 1,
        amount: 5,
        incomeType: true,
        description: "car",
        exactTime: new Date("July 4 2022 12:30"),
      },
      {
        id: 2,
        amount: 10,
        incomeType: false,
        description: "stuff",
        exactTime: new Date("July 4 2022 12:30"),
      },
    ],
  },
  {
    title: new Date("July 5 2022 12:30"), //"24 June",
    data: [
      {
        id: 3,
        amount: 15,
        incomeType: true,
        description: "expense",
        exactTime: new Date("July 5 2022 12:30"),
      },
      {
        id: 4,
        amount: 20,
        incomeType: false,
        description: "rent",
        exactTime: new Date("July 5 2022 12:30"),
      },
      {
        id: 5,
        amount: 25,
        incomeType: false,
        description: "other",
        exactTime: new Date("July 5 2022 12:30"),
      },
    ],
  },
]
console.log(incomesData[0].title.getUTCDay())

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const Home = () => {
  //! FLATLISTS !//
  const balanceItem = ({ item }) => (
    <BalanceCard type={item.type} amount={item.income} balance={item.balance} />
  )

  const incomesItem = ({ item }) => (
    <IncomesCard
      day={item.exactTime.getUTCDay()} //.getUTCDay()
      month={monthNames[item.exactTime.getUTCMonth()]} //.getUTCMonth()
      amount={item.amount}
      description={item.description}
      incomeType={item.incomeType}
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
        ref={ref_headerFlatList}
      />
    </View>
  )

  //! FOCUS REF HANDLE !//

  const ref_input1 = useRef(null)
  const ref_input2 = useRef(null)
  const ref_headerFlatList = useRef(null)

  const onPressAddExpense = () => {
    console.log("onpressaddexpense")
    setIsOpen(false)
  }

  //! FLATLIST FOCUSES !//
  const [alltimeFocus, setAlltimeFocus] = useState(true)
  const [weeklyFocus, setWeeklyFocus] = useState(false)
  const [monthlyFocus, setMonthlyFocus] = useState(false)

  //! REFRESH TO TEXTINPUT
  const onRefresh = () => {
    console.log("refresh")
    setIsHeader(false)
  }
  const [refreshing, setRefreshing] = useState(false)
  const [isHeader, setIsHeader] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CustomHeader leftText="gelirgider" stateHeader={isHeader} />
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

          <SectionList
            ListHeaderComponent={HeaderFlatList}
            sections={incomesData}
            renderItem={incomesItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            renderSectionHeader={({ section }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {[
                    section.title.getDay(),
                    " ",
                    monthNames[section.title.getUTCMonth()],
                  ]}
                </Text>

                <Text style={styles.text}>EUR</Text>
              </View>
            )}
            renderSectionFooter={() => (
              <View style={styles.sectionFooter}></View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  timeStamp: { flexDirection: "row" },
  minitext: { color: "#999" },
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
  item: {
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#999",
    padding: 5.5,
    fontSize: 12,
  },
  sectionFooter: {
    borderWidth: 0.75,
    borderColor: "#333",
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    marginBottom: 10,
  },
})

export default Home
