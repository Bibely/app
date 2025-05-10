import {ButtonVariant} from "@/components/atoms";
import {BrandIcon} from "@/components/icon/brand";

export const SOCIAL_LOGIN_CONFIG = {
  google: {
    icon: <BrandIcon.google size={22} />,
    label: "구글 계정으로 시작하기",
    color: "white",
    variant: ButtonVariant.BRAND,
  },
  apple: {
    icon: <BrandIcon.apple size={22} />,
    label: "애플 계정으로 시작하기",
    color: "black",
    variant: ButtonVariant.SECONDARY,
  },
} as const;