import { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const useCountdown = (defaultCount = 0, ms = 1000) => {
  const [count, setCount] = useState(defaultCount);

  useEffect(() => {
    const timmer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, ms);
    return () => clearInterval(timmer);
  }, []);
  return [count, setCount];
};

const OtherCountdownText = () => {
  const [count, setCount] = useCountdown(0, 500);

  return (
    <View style={[styles.bg]}>
      <View style={{ height: 100 }}>
        <Text style={count < 5 ? styles.less : styles.greater}>You countdown {count} times</Text>
      </View>
    </View>
  );
};

export default function App() {
  const [count, setCount] = useCountdown(0, 1000);

  return (
    <>
    <View style={[styles.bg]}>
      <View style={{ height: 100 }}>
        <Text style={count < 5 ? styles.less : styles.greater}>You countdown {count} times</Text>
      </View>
    </View>
    <OtherCountdownText />
    </>
  );
}

const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center' },
  less: { fontSize: 25, color: '#4d3398', fontWeight: 'bold' },
  greater: { fontSize: 25, color: '#f3845c', fontWeight: 'bold' },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff'
  }
});
