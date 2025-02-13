import { View } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};


// controla emoji sobre a foto trazida da galeria
function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -300 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

export default EmojiSticker;
