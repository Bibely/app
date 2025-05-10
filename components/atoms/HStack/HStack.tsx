import { Box } from '@/components/atoms';
import { BoxProps } from '@/components/atoms/Box/Box.type';

export default function HStack({ children, ...restProps }: BoxProps) {
  return (
    <Box direction="row" {...restProps}>
      {children}
    </Box>
  );
}
