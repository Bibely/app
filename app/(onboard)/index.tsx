import {Box, Button, Typo, VStack} from "@/components/atoms";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";

import Logo from '@/assets/images/icon.png'
import {Radius} from "@/constants/token/radius";
import {Color} from "@/constants/token/color";
import {Spacing} from "@/constants/token/spacing";

export default function Onboard() {
	return (
		<SafeAreaView>
			<VStack justify={'center'}>
				<Image
					source={Logo}
					style={s.logo}
				/>
			</VStack>
			<Button onPress={() => {}}>눌러서 시작하기</Button>
		</SafeAreaView>
	)
}

const s = StyleSheet.create({
	logo: {
		width: 50,
		height: 50,
		borderRadius: Radius.medium,
		marginTop: Spacing.medium
	}
})