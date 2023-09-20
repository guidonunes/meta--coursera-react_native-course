import { View, Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler'; 
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
  } from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const scaleImage = useSharedValue(imageSize);

const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
        }
    },
});

export default function EmojiSticker ({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <AnimatedImageImage 
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize}}
            />
        </View>
    )
}