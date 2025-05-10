import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from '@/types/components';

const Quote = (props: SVGProps) => {
    const { size = 24, color } = props;
    return (
        <Svg
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                fill={props.color}
                d="M13.879 2.879A3 3 0 0 1 16 2h3a3 3 0 0 1 3 3v10a7 7 0 0 1-7 7 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2 1 1 0 0 0 1-1v-1a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121ZM16 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V5a1 1 0 0 0-1-1h-3ZM2.879 2.879A3 3 0 0 1 5 2h3a3 3 0 0 1 3 3v10a7 7 0 0 1-7 7 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2 1 1 0 0 0 1-1v-1a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121ZM5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V5a1 1 0 0 0-1-1H5Z"
           />
        </Svg>
    );
};

export default Quote;
