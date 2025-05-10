import { ButtonVariant } from '@/components/atoms';
import { BrandIcon } from '@/components/icon/brand';

export const SOCIAL_LOGIN_CONFIG = {
  google: {
    icon: <BrandIcon.google size={22} />,
    label: 'socialLogin.google',
    color: 'white',
    variant: ButtonVariant.BRAND,
  },
  apple: {
    icon: <BrandIcon.apple size={22} />,
    label: 'socialLogin.apple',
    color: 'black',
    variant: ButtonVariant.SECONDARY,
  },
} as const;
