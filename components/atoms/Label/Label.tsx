import { Typo, VStack } from '@/components/atoms';
import { Icon } from '@/components/icon/glyph';
import { Color } from '@/constants/token/color';
import { useTheme } from '@/hooks/useTheme';

import { LabelProps, LabelSize, LabelStatus } from './Label.type';

export default function Label({
  children,
  essential,
  size = LabelSize.MEDIUM,
  status = LabelStatus.DEFAULT,
}: LabelProps) {
  const theme = useTheme();
  return (
    <VStack align="center" gap={3} style={{ opacity: status === LabelStatus.DISABLED ? 0.4 : 1 }}>
      <Typo size={size === LabelSize.MEDIUM ? 14 : 12}>{children}</Typo>
      {essential && <Icon.asterisk size={14} color={Color[theme].error50} />}
    </VStack>
  );
}
