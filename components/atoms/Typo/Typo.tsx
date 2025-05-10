import { Text, TextStyle } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { Color } from "@/constants/token/color";
import { Typography } from "@/constants/token/typography";

import { TypoProps } from "./Typo.type";

function TypoBase(props: TypoProps) {
  const theme = useTheme();
  const {
    children,
    style,
    color = "text",
    textAlign,
    numberOfLines,
    ellipsizeMode,
    size = Typography.fontSize.body,
    weight = Typography.fontWeight.medium,
    maxWidth,
    testID,
    readingMode, lineHeight
  } = props;

  const textStyle: TextStyle = {
    width: maxWidth ? "100%" : undefined,
    textAlign,
    fontSize: size,
    fontWeight: weight.toString() as TextStyle["fontWeight"],
    color: Color[theme][color],
    fontFamily: readingMode ? "BookkMyungjo" : "Wanted Sans",
    lineHeight: readingMode ? size * 1.4 : lineHeight,
    ...style,
  };

  return (
    <Text
      allowFontScaling={true}
      maxFontSizeMultiplier={1.03}
      style={{...textStyle}}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      testID={testID}
    >
      {children}
    </Text>
  );
}

function createTypoFromToken(
  sizeKey: keyof typeof Typography.fontSize,
  weightKey: keyof typeof Typography.fontWeight
) {
  return (props: Omit<TypoProps, "size" | "weight">) => (
    <TypoBase
      {...props}
      size={Typography.fontSize[sizeKey]}
      weight={Typography.fontWeight[weightKey]}
      lineHeight={Typography.lineHeight[sizeKey]}
      style={{
        ...(props.style || {})
      }}
    />
  );
}

export const Typo = Object.assign(TypoBase, {
  Caption: createTypoFromToken("caption", "medium"),
  Footnote: createTypoFromToken("caption", "medium"),
  Body: createTypoFromToken("body", "medium"),
  Subtitle: createTypoFromToken("subtitle", "medium"),
  Title: createTypoFromToken("title", "bold"),
  Heading: createTypoFromToken("heading", "bold"),
  DisplaySmall: createTypoFromToken("displaySmall", "bold"),
  DisplayMedium: createTypoFromToken("displayMedium", "bold"),
  DisplayLarge: createTypoFromToken("displayLarge", "bold"),
});

export default Typo;