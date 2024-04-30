import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/Login';
import Signup from './src/Pages/Signup';
import Home from './src/Pages/Home';
import About from './src/Pages/About';

export default function App() {
  return (
    <View style={styles.container}>
      <About />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
