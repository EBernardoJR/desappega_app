import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/Login/Index';
import Signup from './src/Pages/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
