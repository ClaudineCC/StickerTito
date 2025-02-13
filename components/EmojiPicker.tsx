import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

// modal dentro os filhos=emojis
type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;



function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.tittle}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}


const styles=StyleSheet.create ({
    modalContent:{
        height:"25%",
        width: "100%",
        backgroundColor: "#25292E",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer:{
        height: "16%",
        backgroundColor :"#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // paddingHorizontal: 20,
        paddingLeft:20,
        paddingRight: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
    },
    tittle:{
    color: "#FFF",
    fontSize: 16,
    },
});

export default EmojiPicker;
