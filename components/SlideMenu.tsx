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
  const width = useSharedValue(90);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      width.value = 50;
    })
    .onFinalize(() => {
      width.value = 90;
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.slideMenu, { width: width, top: statusBarHeight }]}
      >
        <Text>Test</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  slideMenu: {
    position: "absolute",
    left: 0,
    backgroundColor: "violet",
    height: "100%",
    zIndex: 2,
  },
});
