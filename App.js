import { useState } from "react";
import { View, StyleSheet } from 'react-native';
import Counter from './Counter';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.bg]}>
      <Counter count={count} handleSetCount={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center' },
});
