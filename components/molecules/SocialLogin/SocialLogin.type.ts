export enum SocialLoginPlatform {
	GOOGLE = "google",
	APPLE = "apple",
}

export interface SocialLoginProps {
  platform: SocialLoginPlatform;
  onPress: () => void;
  fullWidth?: boolean;
}