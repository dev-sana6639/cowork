import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as appcolors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Grad_Wavy({ customStyles }) {

    return (
        <View style={customStyles}>

            <Svg width="414" height="251" viewBox="0 0 414 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M56.71 -180.938C58.643 -184.286 62.9241 -185.433 66.2721 -183.5L603.561 126.704C606.909 128.637 608.057 132.918 606.124 136.266L432.494 437.002C430.273 440.849 424.378 438.557 425.338 434.22C448.848 328.047 359.555 230.861 251.775 245.314L140.397 260.25C39.6933 268.15 -58.5904 226.734 -123.268 149.142L-129.146 142.089C-129.375 141.815 -129.408 141.428 -129.229 141.119L56.71 -180.938Z" fill="#FFD7BF" />

                <Path d="M-107.86 -71C-107.86 -74.866 -104.726 -78 -100.86 -78H448.14C452.006 -78 455.14 -74.866 455.14 -71V229.068C455.14 232.99 449.631 233.858 448.425 230.126C419.134 139.474 309.235 104.709 233.137 162.023L152.221 222.966C78.1461 272.664 -15.1374 284.204 -99.0905 254.057L-107.35 251.091C-107.656 250.981 -107.86 250.691 -107.86 250.365V-71Z" fill="#FF6000" />


            </Svg>



        </View>
    )
}