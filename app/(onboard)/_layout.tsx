import { LinearGradient } from 'expo-linear-gradient';
import { Slot } from 'expo-router';
import { Image, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Radius, Spacing } from '@/constants/token';
import { HStack } from '@/components/atoms';
import Logo from '@/assets/images/icon.png';

export default function OnboardLayout() {
  const inset = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#fff', '#fff', 'rgb(255, 235, 231)']}
      style={{
        ...s.container,
        paddingTop: Platform.OS === 'android' ? inset.top + Spacing.medium : inset.top,
        paddingBottom: Platform.OS === 'android' ? inset.bottom + Spacing.big : inset.bottom,
      }}
    >
      <HStack justify={'center'}>
        <Image source={Logo} style={s.logo} />
      </HStack>
      <Slot />
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingInline: Spacing.big,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: Radius.medium,
    marginTop: Spacing.medium,
  },
});
