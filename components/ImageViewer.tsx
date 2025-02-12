import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

//tipagem typescript vem como objeto e nao interface
type Props = {
  imgSource: ImageSource;
  selectedImage: string | undefined; //  tras por uri
};

function ImageViewer({ imgSource, selectedImage }: Props) {
  //uso de ternario = condição if/else
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    // <Image source={imgSource} style={styles.image} />;
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
