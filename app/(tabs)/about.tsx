import { Text, View, StyleSheet, } from "react-native";


 function AboutScreen() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>Claudine</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  text:{
    color: "#fff",
  }
});


export default AboutScreen;