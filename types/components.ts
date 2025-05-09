import {ReactElement, ReactNode} from "react";

export interface ComponentPropsForTest {
    testID?: string;
}

export interface WithChildren<T = unknown> {
    children: ReactElement<T>;
}

export interface SVGProps {
    size?: number;
    color?: string;
}

export interface ComponentPropsFull {
    fullWidth?: boolean;
    fullHeight?: boolean;
    fullRadius?: boolean;
}