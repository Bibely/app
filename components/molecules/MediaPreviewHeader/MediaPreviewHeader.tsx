import { useNavigation } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '@/components/atoms';
import { Icon } from '@/components/icon/glyph';
import { MediaPreviewHeaderProps } from '@/components/molecules';
import { Color } from '@/constants/token/color';
import { useTheme } from '@/hooks/useTheme';

export default function MediaPreviewHeader({ imageSource, height = 245 }: MediaPreviewHeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Box fullWidth style={{ height }}>
      <Image source={imageSource} style={s.backgroundImage} resizeMode="cover" />
      <Box fullWidth style={[s.overlay, { paddingTop: insets.top }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={8}
          style={{ marginTop: -12 }}
        >
          <Icon.chevronLeft size={42} color={Color[theme].white} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const s = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 12,
  },
});
