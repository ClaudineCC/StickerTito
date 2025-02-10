import { Text, View, StyleSheet } from "react-native";
// import { Link } from "expo-router";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/background-image.png");

function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
        {/* <Text style={styles.text}>HOME</Text> */}
        {/* <Link href="/about" style={styles.button}>         
          Go to about screen
        </Link> */}
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
  imageContainer:{
    flex:1,
  },
  image:{
    width:320,
    height: 440,
    borderRadius: 18,
  },
  // text: {
  //   color: "#fff",
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: "underline",
  //   color: "#fff",
  // },
 
});

export default Index;
