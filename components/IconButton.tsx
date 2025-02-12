import { Text, View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;   //glyphMap possui + de 2000 modelos e esta em SVG (vetores)
  label: string;
  onPress: () => void; //propriedade onPress que é uma função
};

function IconButton({ icon, label, onPress }: Props) {
  return (
    <View style={styles.iconButton}>
      <Pressable style={styles.iconButtonLabel} onPress={onPress} >
        <MaterialIcons          
          name={icon}
          size={38}
          color="#fff"
        />
      </Pressable>
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    marginTop: 12,
    color: '#FFF',
  },
});

export default IconButton;
