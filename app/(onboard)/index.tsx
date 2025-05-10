import { useTranslation } from 'react-i18next';

import { Typo, VStack } from '@/components/atoms';
import { Icon } from '@/components/icon/glyph';
import SocialLogin from '@/components/molecules/SocialLogin/SocialLogin';
import { SocialLoginPlatform } from '@/components/molecules/SocialLogin/SocialLogin.type';
import { Color, Spacing } from '@/constants/token';
import { useTheme } from '@/hooks/useTheme';

export default function Onboard() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <VStack bgColor={'transparent'} gap={Spacing.large}>
        <Icon.quote size={52} color={Color[theme].brand10} />
        <Typo size={30} readingMode>
          {t('onboarding.bibleContent')}
        </Typo>
        <Typo.Subtitle color={'textSecondary'} readingMode>
          {t('onboarding.bibleTitle')}
        </Typo.Subtitle>
        <Typo.Body color={'textTertiary'}>- {t('onboarding.bibleVersion')}</Typo.Body>
      </VStack>
      <VStack bgColor={'transparent'} fullWidth gap={Spacing.large}>
        <VStack bgColor={'transparent'} gap={Spacing.medium}>
          <SocialLogin platform={SocialLoginPlatform.GOOGLE} onPress={() => {}} />
          <SocialLogin platform={SocialLoginPlatform.APPLE} onPress={() => {}} />
        </VStack>
        <Typo size={12} textAlign={'center'} color={'textTertiary'}>
          저희는 개인정보를 중요하게 생각합니다.{'\n'}가입함으로써 다음 사항에 동의하게 됩니다. 약관
          그리고 개인정보 취급 처리방침
        </Typo>
      </VStack>
    </>
  );
}
