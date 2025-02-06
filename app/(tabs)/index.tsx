import { Text, View, StyleSheet, } from "react-native";
import { Link } from "expo-router";


 function Index() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>Claudine</Text>
      <Link href="/about" style={styles.button}> Go to about screen </Link>
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
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color:"#fff",
  }
});


export default Index;


