import { View, StyleSheet } from "react-native";

export default function Layout({ children, header, center = true }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>{header}</View>

      <View style={[styles.content, center ? styles.centered : null]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f70c0cff",
  },

  headerArea: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 100,
  },

  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  centered: {
    justifyContent: "center",
  },
});
