import { DimensionValue, ViewStyle } from 'react-native';

import { ComponentPropsFull } from '@/types/components';

export interface SkeletonProps extends ComponentPropsFull {
    width?: DimensionValue;
    height?: number;

    borderRadius?: number;

    style?: ViewStyle;
}