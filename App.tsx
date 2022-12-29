import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlexDemo from "./components/FlexDemo";
import LayoutStart from "./components/FlexDemo";
import Finally from "./components/Finally";
import DynamicStyles from "./components/DynamicStyles";
import Navigation from "./navigation";

export default function App() {
  return (
      <Navigation />
    // <View style={styles.container}>
    //     <DynamicStyles />
    //   <Finally />
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
