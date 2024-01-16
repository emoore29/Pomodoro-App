import { View, Text, StyleSheet } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface SlideMenuProps {
  statusBarHeight: number;
}

export default function SlideMenu({ statusBarHeight }: SlideMenuProps) {
  const pressed = useSharedValue(false);
  const width = useSharedValue(200);
  const openMenu = useSharedValue(false);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      if (event.translationX > 0) {
        openMenu.value = true;
      } else if (event.translationX < 0) {
        openMenu.value = false;
      }
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(openMenu.value ? width.value : 0) }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.slideMenu,
          { width: width, top: statusBarHeight },
          animatedStyles,
        ]}
      >
        <Text>Menu content</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  slideMenu: {
    position: "absolute",
    left: -150,
    backgroundColor: "violet",
    height: "100%",
    zIndex: 2,
  },
});
