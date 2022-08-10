import { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

class Counter extends Component {
  render() {
    const { count, handleSetCount } = this.props;
    return (
      <>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>
            You clicked {count} times
          </Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={handleSetCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  less: { fontSize: 25, color: "#4d3398", fontWeight: "bold" },
  greater: { fontSize: 25, color: "#f3845c", fontWeight: "bold" },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#3498db",
  },
  buttonText: {
    fontSize: 25,
    color: "#fff",
  },
});

export default Counter;
