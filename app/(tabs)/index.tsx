import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { type ImageSource } from "expo-image";
import { GestureHandlerRootView} from 'react-native-gesture-handler';

// import { Link } from "expo-router";
// import { Image } from "expo-image";

//import de componentes
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";



const PlaceholderImage = require("@/assets/images/background-image.png");


//refatoração - melhoramento no codigo. OS comentarios sao as primeiras inserções
function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);  //onReset
  const [isModelVisible, setIsModelVisible] = useState<boolean>(false);  //onAddSticker
  const [pickedEmoji, setPickedEmoji] =useState<ImageSource |undefined>(undefined)

  
  
  // ACESSAR A BIBLIOTECA INTERNA DO CELULAR
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result);
      // tras estado alterado / a const result e assets ImagerPicker./imagePickerAsset[]
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image");
    }
  };

  // iconButton RESET
  const onReset =()=>{
    setShowAppOptions(false);
  };

  // circle button ADICIONAR OS EMOJIS  
  const onAddSticker = ()=>{
    setIsModelVisible(true);
  };

  const onModalClose= () =>{
    setIsModelVisible(false);
  };

   // iconButton SAVE
  const onSaveImageAsync =()=>{

  };


  return (
    <GestureHandlerRootView style={styles.container}>
    {/* <View style={styles.container}> */}
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}

      {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}


      </View>
      {showAppOptions ? (
        <View style={styles.optionContainer}>
          <View style={styles.optionRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            {/* <CircleButton onPress={() => alert('falta colocar funçao')} />     espera uma funçao da props e nao uma string  */}
            <CircleButton onPress={onAddSticker} />
            {/* <IconButton icon="save-alt" label="Save" onPress={() => alert('salvar')} /> */}
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>

        </View>
      ) : (
        <View style={styles.footerContainer}>
          {/* <View> */}
          <Button 
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />

          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModelVisible} onClose={onModalClose} >
        {/*lista de emojis */}
        <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji}/>

        </EmojiPicker>
      
      
      {/* {" "} */}
      {/**footer container */}
      {/* <Text style={styles.text}>HOME</Text> */}
      {/* <Link href="/about" style={styles.button}>         
          Go to about screen
        </Link> */}
    </GestureHandlerRootView> //container
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer: {
    flex: 1,
  },
  // image:{
  //   width:320,
  //   height: 440,
  //   borderRadius: 18,
  // },
  // text: {
  //   color: "#fff",
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: "underline",
  //   color: "#fff",
  // },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionContainer:{
    position: "absolute",
    bottom:80,
  },
  optionRow:{
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Index;
