import { StyleSheet, Text, View } from 'react-native';
import WelcomScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
