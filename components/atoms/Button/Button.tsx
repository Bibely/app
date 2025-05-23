import React from 'react';
import { ActivityIndicator, Animated, StyleSheet, TouchableOpacity } from 'react-native';

import { Typo, TypoWeight } from '@/components/atoms';
import { useButtonAnimation } from '@/hooks/components';
import { useTheme } from '@/hooks/useTheme';
import { VariantColorType } from '@/types/color';

import { ButtonProps, ButtonSize, ButtonVariant } from './Button.type';
import { getButtonColorByVariant, getButtonStyleByVariant } from './Button.util';

export default function Button({
  children,
  variant = ButtonVariant.BRAND,
  size = ButtonSize.LARGE,
  isPending,
  disabled,
  fullWidth,
  fullRadius,
  onPress,
}: ButtonProps) {
  const theme = useTheme();
  const { scaleAnim, handlePressIn, handlePressOut } = useButtonAnimation();

  const ButtonStyle = {
    color: getButtonColorByVariant(variant, theme),
    size: getButtonStyleByVariant(size),
  };

  const renderChildren = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children);
    } else if (typeof children === 'string') {
      return (
        <Typo
          size={ButtonStyle.size.fontSize}
          color={ButtonStyle.color.color as VariantColorType}
          weight={TypoWeight.SemiBold}
        >
          {children}
        </Typo>
      );
    }
    return children;
  };

  const handlePress = () => {
    if (!isPending && !disabled && onPress) {
      onPress();
    }
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, fullWidth && s.fullWidth]}>
      <TouchableOpacity
        style={[
          ButtonStyle.color,
          ButtonStyle.size,
          s.button,
          fullWidth && s.fullWidth,
          fullRadius && s.fullRadius,
          { opacity: disabled ? 0.5 : 1 },
        ]}
        disabled={isPending || disabled}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.6}
      >
        {isPending ? (
          <ActivityIndicator size={24} color={ButtonStyle.color.color} />
        ) : (
          renderChildren()
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  fullRadius: {
    borderRadius: 999,
  },
});
