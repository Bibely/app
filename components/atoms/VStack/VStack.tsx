import { Box } from '@/components/atoms';
import { BoxProps } from '@/components/atoms/Box/Box.type';

export default function VStack({ children, ...restProps }: BoxProps) {
  return (
    <Box direction="column" {...restProps}>
      {children}
    </Box>
  );
}
