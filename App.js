import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, backgroundColor: "tomato", flexDirection: "row" }}
      >
        <View style={{ flex: 1, backgroundColor: "green" }}></View>
        <View style={{ flex: 1, backgroundColor: "purple" }}></View>
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "white" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
