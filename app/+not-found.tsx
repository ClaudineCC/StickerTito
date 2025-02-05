import { View, StyleSheet, } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";


 function NotFoundScreen() {
  return (
    <>  
    <Stack.Screen options= {{title:"Ops! Not Found!"}}/>
    
        <View  style={styles.container}>
     
      <Link href="/" style={styles.button}> 
      Go to about screen 
      </Link>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
   button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color:"#fff",
  }
});


export default NotFoundScreen;


