import { useNavigation } from 'expo-router';
import { useState } from 'react';

import { Box, Typo, VStack } from '@/components/atoms';
import { Icon } from '@/components/icon/glyph';
import { Color } from '@/constants/token/color';
import { useTheme } from '@/hooks/useTheme';

import { TitleHeaderProps } from './TitleHeader.type';

export default function TitleHeader({
  children,
  showBackButton,
  backButtonText,
  rightContent,
}: TitleHeaderProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  const [chevronWidth, setChevronWidth] = useState(0);

  return (
    <VStack
      fullWidth
      style={{
        height: 46,
        paddingHorizontal: 12,
        backgroundColor: Color[theme].surface,
      }}
      justify={!showBackButton && !rightContent ? 'center' : 'space-between'}
      align="center"
    >
      <VStack align="center" onLayout={e => setChevronWidth(e.nativeEvent.layout.width)}>
        <VStack as="hoverable" align="center" onPress={() => navigation.goBack()}>
          {showBackButton && <Icon.chevronLeft size={40} color={Color[theme].textSecondary} />}
          {backButtonText && (
            <Typo size={14} color="textSecondary" style={{ marginLeft: -6 }}>
              {backButtonText}
            </Typo>
          )}
        </VStack>
      </VStack>
      <Typo>{children}</Typo>
      <Box
        as="hoverable"
        style={{
          minWidth: chevronWidth,
        }}
      >
        {rightContent}
      </Box>
    </VStack>
  );
}
