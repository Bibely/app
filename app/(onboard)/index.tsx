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
          {t('onboarding.consent.notice')}
          {'\n'}
          {t('onboarding.consent.terms')}
          {t('onboarding.consent.and')}
          {t('onboarding.consent.privacy')}
          {t('onboarding.consent.agreeSuffix')}
        </Typo>
      </VStack>
    </>
  );
}
