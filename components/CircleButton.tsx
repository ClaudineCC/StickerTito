import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void; //propriedade onPress que é uma função
};

function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable onPress={onPress}  style={styles.circleButton}>
        <MaterialIcons         
          name="add"
          size={38}
          color="#25292E"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffD33D",
    borderRadius: 42,
    padding: 3,
  },

  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});

export default CircleButton;
