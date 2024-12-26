import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.counter}> Счет: {count} </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Сброс</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    width: "50%",
    margin: "0 auto",
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 14,
  },
  button: {
    backgroundColor: "#42AAFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flex: 1,
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
