import { useTheme } from "@/hooks/useTheme";
import { TypoProps } from "./Typo.type";
import { Text, TextStyle } from "react-native";
import { Color } from "@/constants/token/color";
import { Typography } from "@/constants/token/typography";

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
  } = props;

  const textStyle: TextStyle = {
    width: maxWidth ? "100%" : undefined,
    textAlign,
    fontSize: size,
    fontWeight: weight.toString() as TextStyle["fontWeight"],
    color: Color[theme][color],
    ...style,
  };

  return (
    <Text
      style={textStyle}
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
      style={{
        lineHeight: Typography.lineHeight[sizeKey],
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