import Logo from '@/assets/images/icon.png'
import {Button, ButtonVariant, HStack, Typo, TypoWeight, VStack} from "@/components/atoms";
import {BrandIcon} from "@/components/icon/brand";
import {Icon} from "@/components/icon/glyph";
import SocialLogin from "@/components/molecules/SocialLogin/SocialLogin";
import {SocialLoginPlatform} from "@/components/molecules/SocialLogin/SocialLogin.type";
import {Color} from "@/constants/token/color";
import {Radius} from "@/constants/token/radius";
import {Spacing} from "@/constants/token/spacing";
import {useTheme} from "@/hooks/useTheme";
import {LinearGradient} from "expo-linear-gradient";
import {Image, Platform, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Onboard() {
	const inset = useSafeAreaInsets();
	const theme = useTheme();

	return (
		<LinearGradient
			colors={['#fff', '#fff', 'rgb(255, 235, 231)']}
		  style={{
				...s.container,
			  paddingTop: Platform.OS === 'android' ? inset.top + Spacing.medium : inset.top,
			  paddingBottom: Platform.OS === 'android' ? inset.bottom + Spacing.big : inset.bottom,
			}}
		>
			<HStack justify={'center'}>
				<Image
					source={Logo}
					style={s.logo}
				/>
			</HStack>
			<VStack bgColor={'transparent'} gap={Spacing.large}>
				<Icon.quote size={52} color={Color[theme].brand10} />
				<Typo size={30} readingMode>
					모든 성경은 하나님의 {'\n'}감동으로 된 것으로{'\n'}교훈과 책망과{'\n'}바르게 함과 의로 교육하기 유익하니
				</Typo>
				<Typo.Subtitle color={'textSecondary'} readingMode>
					디모데후서 3장 16절
				</Typo.Subtitle>
				<Typo.Body color={'textTertiary'}>- King James Version</Typo.Body>
			</VStack>
			<VStack bgColor={'transparent'} fullWidth gap={Spacing.large}>
				<VStack bgColor={'transparent'} gap={Spacing.medium}>
					<SocialLogin platform={SocialLoginPlatform.GOOGLE} onPress={() => {}} />
					<SocialLogin platform={SocialLoginPlatform.APPLE} onPress={() => {}} />
				</VStack>
				<Typo size={12} textAlign={'center'} color={'textTertiary'}>저희는 개인정보를 중요하게 생각합니다.{'\n'}가입함으로써 다음 사항에 동의하게 됩니다. 약관 그리고 개인정보 취급 처리방침</Typo>
			</VStack>
		</LinearGradient>
	)
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingInline: Spacing.big,
	},
	logo: {
		width: 50,
		height: 50,
		borderRadius: Radius.medium,
		marginTop: Spacing.medium
	}
})