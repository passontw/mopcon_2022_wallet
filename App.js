import { useState, Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class App extends Component {
  timer = null;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const self = this;
    this.timer = setInterval(() => {
      self.setState(state => ({...state, count: state.count + 1}));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleSetCount = () => {
    const { count } = this.state;
    this.setState(state => ({...state, count: count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}>You clicked {count} times</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.handleSetCount}>
            <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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

export default App;
