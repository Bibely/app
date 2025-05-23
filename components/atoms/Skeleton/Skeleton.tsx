import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/hooks/useTheme';
import { Color } from '@/constants/token/color';

import { SkeletonProps } from './Skeleton.type';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function Skeleton({
  width = '100%',
  height = 20,
  borderRadius = 6,
  style,
  fullWidth = false,
  fullHeight = false,
  fullRadius = false,
}: SkeletonProps) {
  const theme = useTheme();
  const opacity = useSharedValue(0.5);

  const finalWidth = fullWidth ? SCREEN_WIDTH : width;
  const finalHeight = fullHeight ? SCREEN_HEIGHT : height;
  const finalRadius = fullRadius ? Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) / 2 : borderRadius;

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(withTiming(1, { duration: 500 }), withTiming(0.5, { duration: 500 })),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          width: finalWidth,
          height: finalHeight,
          borderRadius: finalRadius,
          backgroundColor: Color[theme].surfaceTertiary,
        },
        animatedStyle,
        style,
      ]}
    />
  );
}
