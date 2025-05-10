import { Button, HStack, Typo, TypoWeight } from '@/components/atoms';
import { SocialLoginProps } from '@/components/molecules';
import { SOCIAL_LOGIN_CONFIG } from '@/components/molecules/SocialLogin/SocialLogin.config';
import { Spacing } from '@/constants/token/spacing';

export default function SocialLogin({ platform, onPress, fullWidth }: SocialLoginProps) {
  const { icon, label, color, variant } = SOCIAL_LOGIN_CONFIG[platform];

  return (
    <Button fullWidth={fullWidth} onPress={onPress} variant={variant}>
      <HStack bgColor="transparent" gap={Spacing.small}>
        {icon}
        <Typo size={17} weight={TypoWeight.SemiBold} color={color}>
          {label}
        </Typo>
      </HStack>
    </Button>
  );
}
