import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WavePattern = ({ width, height, waveColor }) => {
    return (
        <Svg height={height} width={width}>
            <Path
                d={`M0 ${height} Q${width / 4} ${height - 40}, ${width / 2} ${height} Q${(3 * width) / 4} ${height + 40}, ${width} ${height} V${height} H0 Z`}
                fill={waveColor}
            />
        </Svg>
    );
};

export default WavePattern;