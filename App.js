import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <View style={{ flex: 1, backgroundColor: "#7638ff" }}></View>
        <View style={{ flex: 1, backgroundColor: "#63a9fe" }}></View>
        <View style={{ flex: 2, backgroundColor: "#7638ff" }}></View>
      </View>
      <View style={styles.test2}>
        <View style={{ flex: 1, backgroundColor: "#9dbffc" }}></View>
        <View
          style={{
            flex: 2.75,
            backgroundColor: "#63a9fe",
            flexWrap: "wrap",
          }}
        >
          <View
            style={{
              flex: 2.6,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                fontFamily: "monospace",
                fontSize: 68,
                marginBottom: 120,
                letterSpacing: 10,
                width: "100%",
                fontWeight: "bold",
              }}
            >
              FLEXBOX
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.25, backgroundColor: "#7638ff" }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#3f403b",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  test: {
    backgroundColor: "#3f403b",
    flex: 1,
    rowGap: 8,
  },
  test2: {
    backgroundColor: "#3f403b",
    flex: 1,
    rowGap: 8,
  },
});
