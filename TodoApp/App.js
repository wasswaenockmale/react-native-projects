import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Dashboard from './screens/Dashboard';
import NewTask from './screens/NewTask';

export default function App() {
  return (
    // <View >
    //   {/* <Header /> */}
    // </View>
    // <Dashboard />
    <NewTask />
  );
}