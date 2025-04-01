import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Body (looks like HTML)
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.defaultTitle1]}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Styles (looks like CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultTitle1: { // Created a h1 style
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});