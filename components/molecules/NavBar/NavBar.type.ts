import { RelativePathString } from "expo-router";

import { WithChildren } from "@/types/components";

export interface NavBarItemProps extends WithChildren {
    icon?: React.ReactNode;
    selected: boolean;
    screenName: RelativePathString;
}