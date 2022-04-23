<TouchableOpacity>
        <Icon source={require("../../../assets/icons/plus.png")} size={25} />
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        backgroundStyle={{ backgroundColor: "#1A1A1A" }}
        index={-1}
        enableHandlePanningGesture={true}
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
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
            autoFocus={isOpen && true}
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