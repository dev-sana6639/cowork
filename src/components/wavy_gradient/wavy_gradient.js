import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as appcolors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Grad_Wavy({ customStyles }) {

    return (
        <View style={customStyles}>
           
                <Svg
                    width="100%"
                    height="310"
                    viewBox="0 0 414 350"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    <Path d="M60.71 -138.938C62.643 -142.286 66.9241 -143.433 70.2721 -141.5L607.561 168.704C610.909 170.637 612.057 174.918 610.124 178.266L436.494 479.002C434.273 482.849 428.378 480.557 429.338 476.22C452.848 370.047 363.555 272.861 255.775 287.314L144.397 302.25C43.6933 310.15 -54.5904 268.734 -119.268 191.142L-125.146 184.089C-125.375 183.815 -125.408 183.428 -125.229 183.119L60.71 -138.938Z" fill="#FF6000" fillOpacity="0.25"/>


                    <Path
                        d="M-103.859 -67C-103.859 -70.866 -100.725 -74 -96.8586 -74H452.141C456.007 -74 459.141 -70.866 459.141 -67V233.068C459.141 236.99 453.632 237.858 452.427 234.126C423.136 143.474 313.236 108.709 237.138 166.023L156.223 226.966C82.1476 276.664 -11.136 288.204 -95.089 258.057L-103.348 255.091C-103.655 254.981 -103.859 254.691 -103.859 254.365V-67Z"
                        fill="#FF6000" />


                </Svg>


         
        </View>
    )
}